(() => {
'use strict';
const quests = window.ALGEBRA_QUESTS;
const STORE_KEY = window.ALGEBRA_SET?.id ? `alice-algebra-arcade-${window.ALGEBRA_SET.id}` : 'alice-algebra-arcade-v1';
const worlds = [{id:'equations',name:'Equation garden',label:'WORLD 01 · EQUATION GARDEN',icon:'✿'},{id:'formulas',name:'Formula studio',label:'WORLD 02 · FORMULA STUDIO',icon:'ƒ'},{id:'stories',name:'Story city',label:'WORLD 03 · STORY CITY',icon:'◇'}];
const $ = selector => document.querySelector(selector);
const esc = text => String(text ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const emptyStep = () => ({solved:false,choice:null,value:'',hint:false,worked:false,attempts:0,feedback:null});
const newProgress = quest => ({step:0,finished:false,results:quest.steps.map(emptyStep)});
const freshState = () => ({current:quests[0].id,earned:[],progress:{}});
let state = freshState(), storageOkay = true, toastTimer;
try {
 const saved = JSON.parse(localStorage.getItem(STORE_KEY));
 if (saved && quests.some(q=>q.id===saved.current)) {
  state.current = saved.current;
  state.earned = Array.isArray(saved.earned) ? [...new Set(saved.earned.filter(id=>quests.some(q=>q.id===id)))] : [];
  for (const quest of quests) {
   const old = saved.progress?.[quest.id];
   if (!old || !Array.isArray(old.results) || old.results.length!==quest.steps.length) continue;
   state.progress[quest.id] = {step:Math.min(Math.max(Math.floor(Number(old.step)||0),0),quest.steps.length-1),finished:!!old.finished,results:old.results.map(r=>({...emptyStep(),...((r && typeof r==='object')?r:{}),value:String(r?.value??''),choice:Number.isInteger(r?.choice)?r.choice:null}))};
  }
 }
} catch { storageOkay = false; }
function save() { try { localStorage.setItem(STORE_KEY,JSON.stringify(state)); } catch { storageOkay=false; } }
function questNow() { return quests.find(q=>q.id===state.current)||quests[0]; }
function progressNow() { const q=questNow(); return state.progress[q.id] ||= newProgress(q); }
function resultNow() { const p=progressNow(); return p.results[p.step]; }
function toast(text) { $('#toast').textContent=text; $('#toast').classList.add('visible'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2300); }
function parseNumber(raw) {
 let s=String(raw).trim().replace(/[−–]/g,'-').replace(/^[a-zA-Z]\s*=\s*/,'').replace(/^\$\s*/,'');
 if (/^[-+]?\d{1,3}(,\d{3})+(\.\d+)?$/.test(s)) s=s.replace(/,/g,'');
 const mixed=s.match(/^([-+]?)(\d+)\s+(\d+)\s*\/\s*(\d+)$/);
 if (mixed) { const den=Number(mixed[4]); if(!den)return null;return (mixed[1]==='-'?-1:1)*(Number(mixed[2])+Number(mixed[3])/den); }
 const fraction=s.match(/^([-+]?(?:\d+(?:\.\d*)?|\.\d+))\s*\/\s*([-+]?(?:\d+(?:\.\d*)?|\.\d+))$/);
 if(fraction){const den=Number(fraction[2]);if(!den)return null;const n=Number(fraction[1])/den;return Number.isFinite(n)?n:null;}
 if(!/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(s))return null;
 const n=Number(s);return Number.isFinite(n)?n:null;
}
function numericCorrect(value,answer) { return (Array.isArray(answer)?answer:[answer]).some(n=>Math.abs(value-n)<=0.000051); }
function prettyAnswer(answer) { return Array.isArray(answer)?answer.join(' or '):String(answer); }
function renderMap() {
 $('#gem-count').textContent=state.earned.length; $('#map-count').textContent=`${state.earned.length} / ${quests.length}`;
 $('#overall-progress').style.width=`${state.earned.length/quests.length*100}%`;
 $('#mission-map').innerHTML=worlds.map(w=>{
  const group=quests.filter(q=>q.world===w.id),complete=group.filter(q=>state.earned.includes(q.id)).length;
  return `<div class="world-group"><div class="world-heading"><span class="world-icon" aria-hidden="true">${w.icon}</span>${w.name}<span class="count">${complete} / ${group.length}</span></div>${group.map(q=>{const n=quests.indexOf(q)+1,earned=state.earned.includes(q.id);return `<button class="mission ${q.id===state.current?'active':''}" data-quest="${esc(q.id)}" ${q.id===state.current?'aria-current="true"':''} aria-label="Mission ${n}: ${esc(q.title)}${earned?', gem earned':''}"><span class="mini-number" aria-hidden="true">${String(n).padStart(2,'0')}</span><span>${esc(q.title)}</span>${earned?'<span class="done-icon" aria-hidden="true">✦</span>':''}</button>`;}).join('')}</div>`;
 }).join('');
}
function diagram(q) {
 const geometry=q.geometry;
 if(!geometry || !geometry.squareSide || !Array.isArray(geometry.triangleSides) || geometry.triangleSides.length!==3)return '';
 const square=esc(geometry.squareSide),[left,right,base]=geometry.triangleSides.map(esc);
 return `<div class="geometric-diagram" aria-label="Square side: ${square}; triangle sides: ${left}, ${right}, ${base}"><svg viewBox="0 0 230 125" role="img" aria-label="Square side ${square}"><rect x="65" y="12" width="85" height="85" rx="2" fill="#fde5f0" stroke="#d62375" stroke-width="2"/><text x="108" y="118" text-anchor="middle">${square}</text><text x="165" y="60">${square}</text></svg><svg viewBox="0 0 230 125" role="img" aria-label="Triangle sides ${left}, ${right}, ${base}"><path d="M32 97 L182 97 L117 12 Z" fill="#fbe3f0" stroke="#d62375" stroke-width="2"/><text x="51" y="43" text-anchor="middle">${left}</text><text x="182" y="46" text-anchor="middle">${right}</text><text x="108" y="118" text-anchor="middle">${base}</text></svg></div>`;
}
function renderProblem() {
 const q=questNow(),i=quests.indexOf(q),w=worlds.find(w=>w.id===q.world);
 $('#quest-title').textContent=q.title; $('#skill-tag').textContent=q.skill; $('#world-label').textContent=window.ALGEBRA_SET?.label ? `${window.ALGEBRA_SET.label.toUpperCase()} · ${w.label}` : w.label;
 $('#quest-number').innerHTML=`${String(i+1).padStart(2,'0')}<span>/ ${quests.length}</span>`;
 $('#problem-area').innerHTML=`<div class="problem"><p class="intro">${esc(q.intro)}</p><div class="equation-display ${q.world==='stories'?'story-display':''}">${esc(q.display)}</div>${diagram(q)}${q.note?`<div class="notation-note">${esc(q.note)}</div>`:''}</div>`;
}
function feedbackHtml(r) {
 if(!r.feedback)return '';
 return `<div class="feedback ${r.feedback.kind==='success'?'success':''}" role="status"><strong>${esc(r.feedback.title)}</strong>${esc(r.feedback.text)}</div>`;
}
function renderStep() {
 const q=questNow(),p=progressNow();
 if(p.finished){renderSummary();return;}
 const step=q.steps[p.step],r=p.results[p.step];
 const dots=q.steps.map((s,i)=>`<button class="step-dot ${i===p.step?'current':''} ${p.results[i].solved?'solved':''}" data-step="${i}" aria-label="${i===p.step?'Current step':'Go to step'} ${i+1}${p.results[i].solved?', completed':''}" ${i===p.step?'aria-current="step"':''}>${p.results[i].solved&&i!==p.step?'✓':i+1}</button>`).join('');
 let answerHtml;
 if(step.type==='choice')answerHtml=`<div class="choices" role="group" aria-label="Answer choices">${step.choices.map((c,i)=>`<button class="choice ${r.choice===i?'selected':''} ${r.solved&&c.correct?'correct-choice':''} ${!r.solved&&r.feedback?.kind==='wrong'&&r.choice===i?'wrong-choice':''}" data-choice="${i}" aria-pressed="${r.choice===i}" ${r.solved?'disabled':''}><span class="choice-letter" aria-hidden="true">${String.fromCharCode(65+i)}</span><span>${esc(c.text)}</span></button>`).join('')}</div>`;
 else answerHtml=`<div class="input-wrap"><input id="answer-input" class="answer-input" aria-label="Your answer" type="text" inputmode="text" placeholder="Type your answer" autocomplete="off" spellcheck="false" value="${esc(r.value)}" ${r.solved?'disabled':''}><span class="answer-unit">${esc(step.unit||'')}</span></div><span class="input-help">Fractions or decimals work. For repeating decimals, use at least 4 decimal places.</span>`;
 const final=p.step===q.steps.length-1;
 $('#step-area').innerHTML=`<section class="step-section"><div class="step-row"><span class="step-caption"><strong>STEP ${p.step+1}</strong> OF ${q.steps.length} · ${r.solved?'Nicely done':r.worked?'Try it with help':'Your move'}</span><div class="step-dots" aria-label="Exercise steps">${dots}</div></div><h3 class="step-prompt" tabindex="-1">${esc(step.prompt)}</h3>${step.equation?`<div class="step-equation">${esc(step.equation)}</div>`:''}<form id="answer-form">${answerHtml}<div class="action-row"><div class="help-actions"><button class="text-button" type="button" id="hint-button">♡ ${r.hint?'Hide hint':'Get a hint'}</button><button class="text-button quiet" type="button" id="redo-button">Redo this step</button></div><button class="primary" type="submit" id="check-button" ${!r.solved&&step.type==='choice'&&r.choice===null?'disabled':''}>${r.solved?(final?'Finish mission':'Next step'):'Check answer'}</button></div></form>${r.hint?`<div class="hint-box"><strong>A little nudge</strong>${esc(step.hint)}<button class="text-button" id="worked-button" type="button" style="display:block;margin-top:7px">See the worked step</button></div>`:''}${r.worked?`<div class="hint-box"><strong>Worked step</strong>${esc(step.explanation)}<br><b>${esc(step.type==='choice'?step.choices.find(c=>c.correct)?.text:step.answerText??prettyAnswer(step.answer))}</b><br>Now give it a try above.</div>`:''}${feedbackHtml(r)}</section>`;
 $('#answer-input')?.addEventListener('input',e=>{r.value=e.target.value;if(r.feedback?.kind!=='success')r.feedback=null;save();});
 $('#answer-form').addEventListener('submit',e=>{e.preventDefault();if(r.solved)advance();else checkAnswer();});
 $('#hint-button').onclick=()=>{r.hint=!r.hint;save();renderStep();};
 $('#redo-button').onclick=()=>{p.results[p.step]=emptyStep();p.finished=false;save();renderStep();toast('Fresh step. You’ve got this.');};
 $('#worked-button')?.addEventListener('click',()=>{r.worked=true;save();renderStep();});
}
function checkAnswer() {
 const q=questNow(),p=progressNow(),step=q.steps[p.step],r=p.results[p.step];
 let correct=false,wrongText='Check the signs and apply the same operation to both sides. Your hint can help.';
 if(step.type==='choice') {
  if(r.choice===null)return;
  correct=!!step.choices[r.choice]?.correct;
  wrongText=step.choices[r.choice]?.feedback||wrongText;
 } else {
  const parsed=parseNumber(r.value);
  if(parsed===null){r.feedback={kind:'wrong',title:'Let’s make that answer readable',text:'Enter a number, a fraction like −2/9, or a mixed number like 13 3/4. A denominator cannot be zero.'};renderStep();return;}
  correct=numericCorrect(parsed,step.answer);
  wrongText=step.feedback||step.wrongFeedback||'Not quite yet. Follow the hint, check your arithmetic, and try again.';
 }
 r.attempts++;
 if(correct){r.solved=true;r.feedback={kind:'success',title:step.success||['That’s it, Alice!','A lovely bit of algebra!','You’ve got the idea!'][p.step%3],text:step.explanation};}
 else r.feedback={kind:'wrong',title:'Keep going — you can retry',text:wrongText};
 save();renderStep();
}
function advance() {
 const q=questNow(),p=progressNow();
 if(p.step<q.steps.length-1){p.step++;save();renderStep();$('.step-prompt')?.focus({preventScroll:true});return;}
 const unfinished=p.results.findIndex(r=>!r.solved);
 if(unfinished!==-1){p.step=unfinished;save();renderStep();toast('One more idea to practice before collecting your gem.');return;}
 p.finished=true;const isNew=!state.earned.includes(q.id);if(isNew)state.earned.push(q.id);
 save();renderMap();renderStep();$('#ending-title')?.focus({preventScroll:true});$('#story-ending')?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'});if(isNew)celebrate();
}
const sceneOrder = ['ribbon','berries','lock','sparkles','macarons','confetti','potion','moon','postcard','cylinder','charms','butterflies','books','garden'];
function endingHtml(q) {
 const ending=window.ALGEBRA_ENDINGS?.[q.id];
 if(!ending)return '';
 const index=sceneOrder.indexOf(ending.scene);
 if(index<0)return '';
 const particles=ending.particles.map((symbol,i)=>`<span class="scene-particle particle-${i}" aria-hidden="true">${esc(symbol)}</span>`).join('');
 return `<section class="story-ending" id="story-ending" aria-labelledby="ending-title"><div class="ending-scene scene-${ending.scene}" id="ending-scene" role="img" aria-label="${esc(ending.action)}"><span class="scene-art" aria-hidden="true" style="--sprite-x:${index%4/3*100}%;--sprite-y:${Math.floor(index/4)/3*100}%"></span>${particles}<span class="scene-sparkle sparkle-one" aria-hidden="true">✦</span><span class="scene-sparkle sparkle-two" aria-hidden="true">✧</span><span class="scene-caption">${esc(ending.action)}</span></div><div class="ending-copy"><span class="eyebrow">ALICE’S STORY · CHAPTER ${quests.indexOf(q)+1}</span><h4 id="ending-title" tabindex="-1">${esc(ending.title)}</h4><p>${esc(ending.text)}</p><p class="ending-lesson"><span aria-hidden="true">✦</span> ${esc(ending.lesson)}</p><button class="text-button" id="replay-story" type="button"><span aria-hidden="true">↻</span> Replay animation</button><span class="animation-status" role="status" id="animation-status"></span></div></section>`;
}
function playEnding() {
 const scene=$('#ending-scene');
 if(!scene)return;
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(reduce){$('#animation-status').textContent='The still scene is shown because reduced motion is enabled.';return;}
 const button=$('#replay-story');
 scene.classList.remove('scene-playing');
 void scene.offsetWidth;
 scene.classList.add('scene-playing');
 if(button)button.textContent='↻ Replay animation';
 $('#animation-status').textContent='Animation replayed.';
}
function renderSummary() {
 const q=questNow(),p=progressNow(),all=state.earned.length===quests.length,hasEnding=!!window.ALGEBRA_ENDINGS?.[q.id];
 $('#step-area').innerHTML=`<section class="step-section"><div class="summary ${hasEnding?'summary-with-story':''}"><div class="mission-finish"><span class="finish-gem" aria-hidden="true">✦</span><div><h3>${all?'All 14 gems. Amazing work!':'Mission complete!'}</h3><p>${all?'You’ve explored every mission. Replay any one to make the skills stick.':`One more skill in your collection. ${state.earned.length} of ${quests.length} gems earned.`}</p></div></div>${endingHtml(q)}<div class="summary-actions"><button class="primary" id="next-quest">${all?'Pick a surprise mission':'Next mission'}</button><button class="secondary" id="replay-button">Play this mission again</button></div><div class="solution-box"><span class="eyebrow">THE FINISHED PUZZLE</span><div class="solution-text">${esc(q.solution)}</div><p class="takeaway">${esc(q.takeaway)}</p></div>${q.extra?`<details class="concept-check"><summary>Honors check: special cases</summary><p>${esc(q.extra)}</p></details>`:''}<p class="storage-note">${storageOkay?'Progress saves in this browser. You can stop and come back.':'Browser storage is unavailable. Keep this tab open to keep your progress.'}</p></div></section>`;
 $('#next-quest').onclick=()=>{const start=quests.indexOf(q);let next;for(let n=1;n<=quests.length;n++){const candidate=quests[(start+n)%quests.length];if(!state.earned.includes(candidate.id)){next=candidate;break;}}openQuest((next||quests[(start+1)%quests.length]).id,true);};
 $('#replay-button').onclick=restart;
 $('#replay-story')?.addEventListener('click',playEnding);
 $('#ending-scene')?.classList.add('scene-playing');
}

function openQuest(id) { if(!quests.some(q=>q.id===id))return;state.current=id;save();render();$('.play-area').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'}); }
function restart() { const q=questNow();state.progress[q.id]=newProgress(q);save();renderStep();toast('Exercise restarted. Your collected gems are safe.'); }
function render() { renderMap();renderProblem();renderStep(); }
function celebrate() {
 if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const container=$('#confetti');container.replaceChildren();
 for(let n=0;n<36;n++){const bit=document.createElement('i');bit.className='confetti-bit';bit.style.left=`${Math.random()*100}%`;bit.style.background=['#ee378d','#f4aa53','#ab68c5','#67bfa8'][n%4];bit.style.animationDelay=`${Math.random()*.4}s`;bit.style.transform=`rotate(${Math.random()*200}deg)`;container.append(bit);}
 setTimeout(()=>container.replaceChildren(),2600);
}
$('#mission-map').addEventListener('click',e=>{const button=e.target.closest('[data-quest]');if(button)openQuest(button.dataset.quest);});
$('#step-area').addEventListener('click',e=>{
 const choice=e.target.closest('[data-choice]');
 if(choice){const r=resultNow();if(r.solved)return;r.choice=Number(choice.dataset.choice);r.feedback=null;save();renderStep();$('#step-area').querySelector(`[data-choice="${r.choice}"]`)?.focus({preventScroll:true});}
 const dot=e.target.closest('[data-step]');
 if(dot){progressNow().step=Number(dot.dataset.step);progressNow().finished=false;save();renderStep();$('.step-prompt')?.focus({preventScroll:true});}
});
$('#restart-button').onclick=restart;
$('#brand-home').onclick=e=>{e.preventDefault();$('.play-area').scrollIntoView({behavior:'smooth',block:'start'});};
$('#surprise-button').onclick=()=>{const candidates=quests.filter(q=>q.id!==state.current);openQuest(candidates[Math.floor(Math.random()*candidates.length)].id,true);};
$('#reset-button').onclick=()=>{const dialog=$('#reset-dialog');dialog.returnValue='';dialog.showModal();};
$('#reset-dialog').addEventListener('close',()=>{if($('#reset-dialog').returnValue==='reset'){state=freshState();save();render();window.scrollTo({top:0,behavior:'instant'});toast('A brand-new adventure begins.');}});
$('#collection-button').onclick=()=>{$('#collection-content').innerHTML=`<p>${state.earned.length} of ${quests.length} gems collected. Finish every step of a mission to earn its gem.</p><div class="completion-overview">${quests.map(q=>`<span class="collection-gem ${state.earned.includes(q.id)?'earned':''}" title="${esc(q.title)}" aria-label="${esc(q.title)}: ${state.earned.includes(q.id)?'gem earned':'still to explore'}">✦</span>`).join('')}</div><p>Hints and retries are always welcome.</p>`;$('#collection-dialog').showModal();};
render();
})();
