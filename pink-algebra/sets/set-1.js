/* Algebra practice data. Plain Unicode math keeps every card readable without a math library. */
window.ALGEBRA_NOTES = [
  'Fractions work in answer boxes: enter −2/9 as -2/9, or enter a decimal.',
  'The typed expression 8/3a is ambiguous. This quest uses 8/(3a). If it means (8/3) × a instead, the answers are a = (9 ± 2√15)/2.',
  'The volume formula is interpreted as V = (1/3)πr²h, and t = 1/8s + 1 is interpreted as t = s/8 + 1.',
  'The walk-a-thon question needs a shared-laps assumption: Sara and Marwa walk the same number of laps.'
];

window.ALGEBRA_QUESTS = [
  {
    id: 'distribute-fraction', world: 'equations', title: 'Ribbon Reveal',
    skill: 'Distribute a negative fraction and solve',
    display: '−(4/5)(5x − 10) = 8 + 3x',
    intro: 'Unwrap the parentheses, then collect the x terms.',
    steps: [
      {
        prompt: 'Distribute −4/5. What does the left side become?', type: 'choice',
        choices: [
          { text: '−4x − 8', correct: false, feedback: 'A negative times a negative is positive: (−4/5)(−10) = +8.' },
          { text: '−4x + 8', correct: true, feedback: 'Yes! Multiply both terms inside the parentheses by −4/5.' },
          { text: '−4x + 10', correct: false, feedback: 'The −10 also needs to be multiplied by −4/5. It becomes +8.' }
        ],
        hint: 'Multiply −4/5 by 5x, and then by −10.',
        explanation: '−(4/5)(5x − 10) = −4x + 8.'
      },
      {
        prompt: 'Subtract 8 from both sides. Which equation remains?', equation: '−4x + 8 = 8 + 3x', type: 'choice',
        choices: [
          { text: '−4x = 3x', correct: true, feedback: 'The +8 cancels on both sides.' },
          { text: '−4x = 16 + 3x', correct: false, feedback: 'Subtracting 8 from +8 gives 0, not 16.' },
          { text: '−4x = 8 + 3x', correct: false, feedback: 'A balance move must happen on both sides. Subtract 8 on the right too.' }
        ],
        hint: 'The same +8 appears on both sides.',
        explanation: 'Subtracting 8 gives −4x = 3x. Subtracting 3x then gives −7x = 0.'
      },
      {
        prompt: 'Solve for x.', equation: '−7x = 0', type: 'number', answer: 0,
        hint: 'Divide both sides by −7. Zero divided by a nonzero number is zero.',
        explanation: 'x = 0. Checking the original equation gives 8 = 8.',
        success: 'Ribbon revealed! x = 0.'
      }
    ],
    solution: '−4x + 8 = 8 + 3x → −7x = 0 → x = 0.',
    takeaway: 'Distribute to every term. A variable can equal zero.'
  },
  {
    id: 'fraction-combo', world: 'equations', title: 'Smoothie Mix',
    skill: 'Clear fractions and combine like terms',
    display: 'x/2 + (2/5)(x − 2) = −1',
    intro: 'Mix the fractional ingredients into one easy equation.',
    steps: [
      {
        prompt: 'Which number is the least common denominator of 2 and 5?', type: 'choice',
        choices: [
          { text: '7', correct: false, feedback: 'Adding the denominators does not find a common denominator. Look for a multiple of both 2 and 5.' },
          { text: '5', correct: false, feedback: '5 is not a multiple of 2.' },
          { text: '10', correct: true, feedback: '10 is the smallest positive multiple of both 2 and 5.' }
        ],
        hint: 'List multiples of 2 until you find one that is also a multiple of 5.',
        explanation: 'Multiplying every term on both sides by 10 clears the fractions.'
      },
      {
        prompt: 'Multiply the entire equation by 10. What do you get?', type: 'choice',
        choices: [
          { text: '5x + 4(x − 2) = −10', correct: true, feedback: 'Exactly: 10 × x/2 = 5x and 10 × 2/5 = 4.' },
          { text: '5x + 4(x − 2) = −1', correct: false, feedback: 'Multiply the right side by 10 too: 10 × (−1) = −10.' },
          { text: '5x + 2(x − 2) = −10', correct: false, feedback: '10 × 2/5 is 4, so the second coefficient becomes 4.' }
        ],
        hint: 'The 10 must multiply both left-side terms and the −1.',
        explanation: '5x + 4(x − 2) = −10.'
      },
      {
        prompt: 'Distribute, combine, and add 8. Which equation is correct?', equation: '5x + 4(x − 2) = −10', type: 'choice',
        choices: [
          { text: '9x = −18', correct: false, feedback: 'After 9x − 8 = −10, add 8 to both sides: −10 + 8 = −2.' },
          { text: '9x = −2', correct: true, feedback: 'Yes: 5x + 4x − 8 = −10, so 9x = −2.' },
          { text: '9x = 2', correct: false, feedback: 'Keep the sign: −10 + 8 is −2, not +2.' }
        ],
        hint: 'First simplify to 9x − 8 = −10.',
        explanation: '5x + 4x − 8 = −10 → 9x − 8 = −10 → 9x = −2.'
      },
      {
        prompt: 'Solve for x. A fraction is welcome!', equation: '9x = −2', type: 'number', answer: -2/9,
        hint: 'Divide both sides by 9.',
        explanation: 'x = −2/9. Check: −1/9 + (2/5)(−20/9) = −1/9 − 8/9 = −1.',
        success: 'Perfect blend! x = −2/9.'
      }
    ],
    solution: 'Multiply by 10: 5x + 4(x − 2) = −10 → 9x = −2 → x = −2/9.',
    takeaway: 'When clearing fractions, multiply every term on both sides.'
  },
  {
    id: 'no-solution-d', world: 'equations', title: 'Mystery Door',
    skill: 'Recognize a contradiction and no solution',
    display: '3(d + 4) = 2 + 3d − 8',
    intro: 'Some equations have no key. Find out whether this door can open.',
    steps: [
      {
        prompt: 'Simplify both sides.', type: 'choice',
        choices: [
          { text: '3d + 4 = 3d − 6', correct: false, feedback: 'The 3 multiplies the +4 too, giving +12.' },
          { text: '3d + 12 = 3d + 6', correct: false, feedback: 'On the right, 2 − 8 = −6.' },
          { text: '3d + 12 = 3d − 6', correct: true, feedback: 'The left distributes to 3d + 12, and 2 − 8 is −6.' }
        ],
        hint: 'Distribute on the left; combine 2 and −8 on the right.',
        explanation: '3(d + 4) = 3d + 12, and 2 + 3d − 8 = 3d − 6.'
      },
      {
        prompt: 'Subtract 3d from both sides. What remains?', equation: '3d + 12 = 3d − 6', type: 'choice',
        choices: [
          { text: '12 = −6', correct: true, feedback: 'Both variable terms cancel, leaving a false statement.' },
          { text: 'd = −18', correct: false, feedback: 'The d terms cancel completely. There is no d term left to solve for.' },
          { text: '12 = 6', correct: false, feedback: 'Subtracting 3d does not change the −6 constant.' }
        ],
        hint: '3d − 3d = 0 on each side.',
        explanation: 'After subtracting 3d, the equation claims 12 = −6.'
      },
      {
        prompt: 'What does 12 = −6 tell you about the original equation?', type: 'choice',
        choices: [
          { text: 'd = 0', correct: false, feedback: 'Try d = 0: the original sides are 12 and −6. They still do not match.' },
          { text: 'No solution', correct: true, feedback: 'Correct! No value of d can make 12 equal −6.' },
          { text: 'Infinitely many solutions', correct: false, feedback: 'Infinitely many solutions would leave a true statement, such as 12 = 12.' }
        ],
        hint: 'A false statement after the variable cancels means no value works.',
        explanation: 'The variable disappears and the remaining statement is false, so there is no solution.',
        success: 'Mystery solved! This equation has no solution.'
      }
    ],
    solution: '3d + 12 = 3d − 6 → 12 = −6 → no solution.',
    takeaway: 'When variables cancel, a false statement means no solution; a true statement means every value works.'
  },
  {
    id: 'minus-parentheses', world: 'equations', title: 'Sign Switch',
    skill: 'Subtract parentheses and recognize no solution',
    display: '3x − (9 − 4x) = 7x − 8',
    intro: 'The minus sign outside the parentheses flips both signs inside.',
    steps: [
      {
        prompt: 'Remove the parentheses on the left.', type: 'choice',
        choices: [
          { text: '3x − 9 − 4x', correct: false, feedback: 'Subtracting −4x gives +4x. The outside minus flips both inside signs.' },
          { text: '3x − 9 + 4x', correct: true, feedback: 'Exactly: −(9 − 4x) = −9 + 4x.' },
          { text: '3x + 9 − 4x', correct: false, feedback: 'The outside minus changes +9 to −9 and −4x to +4x.' }
        ],
        hint: 'Think of the minus as multiplying the parentheses by −1.',
        explanation: '3x − (9 − 4x) = 3x − 9 + 4x = 7x − 9.'
      },
      {
        prompt: 'Subtract 7x from both sides. What remains?', equation: '7x − 9 = 7x − 8', type: 'choice',
        choices: [
          { text: 'x = 1', correct: false, feedback: 'The x terms cancel completely, so a numerical x answer cannot follow.' },
          { text: '−9 = 8', correct: false, feedback: 'Subtracting 7x does not change the sign of the −8.' },
          { text: '−9 = −8', correct: true, feedback: 'Both 7x terms cancel, leaving a contradiction.' }
        ],
        hint: 'Each side has the same variable term, 7x.',
        explanation: '7x − 9 = 7x − 8 → −9 = −8.'
      },
      {
        prompt: 'Choose the solution set.', type: 'choice',
        choices: [
          { text: 'No solution', correct: true, feedback: 'Yes! −9 and −8 cannot be equal.' },
          { text: 'x = −1', correct: false, feedback: 'For any x, the left side stays exactly 1 less than the right side.' },
          { text: 'All real numbers', correct: false, feedback: 'All real numbers would require a true statement after the x terms cancel.' }
        ],
        hint: 'Is the statement left after cancellation true or false?',
        explanation: 'No value of x makes the two sides equal. Their constants differ by 1.',
        success: 'Sign switch mastered! No solution.'
      }
    ],
    solution: '3x − 9 + 4x = 7x − 8 → −9 = −8 → no solution.',
    takeaway: 'A minus outside parentheses changes every sign inside.'
  },
  {
    id: 'fraction-bar', world: 'equations', title: 'Cupcake Tower',
    skill: 'Undo operations around a fraction',
    display: '(4y − 7)/3 − 1 = 15',
    intro: 'Climb back through the operations to uncover y.',
    steps: [
      {
        prompt: 'What happens when you add 1 to both sides?', type: 'choice',
        choices: [
          { text: '(4y − 7)/3 = 14', correct: false, feedback: 'Adding 1 to 15 gives 16.' },
          { text: '4y − 7 = 16', correct: false, feedback: 'Adding 1 removes the −1; the division by 3 is still there.' },
          { text: '(4y − 7)/3 = 16', correct: true, feedback: 'Yes! Undo the −1 first.' }
        ],
        hint: 'The fraction is one whole quantity. Undo what happens outside it first.',
        explanation: 'Add 1: (4y − 7)/3 = 16.'
      },
      {
        prompt: 'Multiply both sides by 3.', equation: '(4y − 7)/3 = 16', type: 'choice',
        choices: [
          { text: '4y − 7 = 48', correct: true, feedback: 'The division by 3 cancels, and 16 × 3 = 48.' },
          { text: '4y − 21 = 48', correct: false, feedback: 'The entire numerator was divided by 3. Multiplying by 3 restores 4y − 7.' },
          { text: '4y − 7 = 16/3', correct: false, feedback: 'To undo division by 3, multiply the right side by 3 too.' }
        ],
        hint: 'The fraction bar applies to all of 4y − 7.',
        explanation: 'Multiplying by 3 gives 4y − 7 = 48. Adding 7 gives 4y = 55.'
      },
      {
        prompt: 'Solve for y.', equation: '4y = 55', type: 'number', answer: 55/4,
        hint: 'Divide 55 by 4. Enter 55/4 or 13.75.',
        explanation: 'y = 55/4 = 13.75. Check: (55 − 7)/3 − 1 = 16 − 1 = 15.',
        success: 'Tower complete! y = 55/4.'
      }
    ],
    solution: '(4y − 7)/3 = 16 → 4y − 7 = 48 → 4y = 55 → y = 55/4.',
    takeaway: 'Undo outside operations first, then simplify the numerator.'
  },
  {
    id: 'double-distribute', world: 'equations', title: 'Confetti Balance',
    skill: 'Distribute negatives on both sides',
    display: '−8(2 − x) = −4(10x + 2) + 4',
    intro: 'Keep the signs straight while balancing two bursts of parentheses.',
    steps: [
      {
        prompt: 'Distribute on both sides and combine constants.', type: 'choice',
        choices: [
          { text: '−16 − 8x = −40x − 4', correct: false, feedback: 'On the left, (−8)(−x) is +8x.' },
          { text: '−16 + 8x = −40x − 4', correct: true, feedback: 'Yes: the right constants combine to −8 + 4 = −4.' },
          { text: '−16 + 8x = −40x + 12', correct: false, feedback: 'On the right, (−4)(2) + 4 = −8 + 4 = −4.' }
        ],
        hint: 'A negative times a negative is positive. Distribute to both terms.',
        explanation: '−8(2 − x) = −16 + 8x, and −4(10x + 2) + 4 = −40x − 4.'
      },
      {
        prompt: 'Add 40x and 16 to both sides. Which equation results?', equation: '−16 + 8x = −40x − 4', type: 'choice',
        choices: [
          { text: '48x = −20', correct: false, feedback: 'Adding 16 to −4 gives +12, not −20.' },
          { text: '32x = 12', correct: false, feedback: 'Adding 40x to 8x gives 48x.' },
          { text: '48x = 12', correct: true, feedback: 'Correct! All x terms are on the left and the constants are on the right.' }
        ],
        hint: '8x + 40x = 48x, and −4 + 16 = 12.',
        explanation: '−16 + 8x = −40x − 4 → 48x = 12.'
      },
      {
        prompt: 'Solve for x.', equation: '48x = 12', type: 'number', answer: 1/4,
        hint: 'x = 12/48. Reduce the fraction.',
        explanation: 'x = 1/4. The original left and right sides both equal −14.',
        success: 'Confetti balanced! x = 1/4.'
      }
    ],
    solution: '−16 + 8x = −40x − 4 → 48x = 12 → x = 1/4.',
    takeaway: 'Distribute before moving terms, and carry each term’s sign with it.'
  },
  {
    id: 'rational-cross', world: 'equations', title: 'Potion Proportion',
    skill: 'Solve a rational proportion with restrictions',
    display: '8/(3a) = 14/(9 − a)',
    intro: 'Check the forbidden values, then cross-multiply the potion recipe.',
    note: 'Here 8/3a means 8/(3a). If your teacher means (8/3) × a, the answers are a = (9 ± 2√15)/2.',
    steps: [
      {
        prompt: 'Which values must a avoid so neither denominator is zero?', type: 'choice',
        choices: [
          { text: 'a = 0 and a = 9', correct: true, feedback: 'Yes. 3a is zero at 0, and 9 − a is zero at 9.' },
          { text: 'a = 3 and a = 9', correct: false, feedback: '3a = 0 when a = 0, not when a = 3.' },
          { text: 'a = 0 only', correct: false, feedback: 'The denominator 9 − a is also zero when a = 9.' }
        ],
        hint: 'Set each denominator equal to zero to find excluded values.',
        explanation: 'The original equation is defined only when a ≠ 0 and a ≠ 9.'
      },
      {
        prompt: 'Cross-multiply. Which equation is correct?', type: 'choice',
        choices: [
          { text: '24a = 14(9 − a)', correct: false, feedback: 'Multiply each numerator by the opposite denominator, not its own denominator.' },
          { text: '8(9 − a) = 14(3a)', correct: true, feedback: 'Correct: 8 pairs with 9 − a, and 14 pairs with 3a.' },
          { text: '8(9 − a) = 14a', correct: false, feedback: 'Keep the whole denominator 3a. The right side is 14 × 3a = 42a.' }
        ],
        hint: 'Use opposite corners: 8 × (9 − a) and 14 × (3a).',
        explanation: 'Multiply by 3a(9 − a), which is nonzero for allowed values: 8(9 − a) = 42a.'
      },
      {
        prompt: 'Distribute and add 8a. Which equation remains?', equation: '8(9 − a) = 42a', type: 'choice',
        choices: [
          { text: '72 = 34a', correct: false, feedback: 'To remove −8a on the left, add 8a to both sides: 42a + 8a = 50a.' },
          { text: '9 = 50a', correct: false, feedback: 'Distribute the 8 to the 9 too: 8 × 9 = 72.' },
          { text: '72 = 50a', correct: true, feedback: 'Yes! 72 − 8a = 42a becomes 72 = 50a.' }
        ],
        hint: 'First get 72 − 8a = 42a.',
        explanation: '72 − 8a = 42a → 72 = 50a.'
      },
      {
        prompt: 'Solve for a. Remember the excluded values!', equation: '72 = 50a', type: 'number', answer: 36/25,
        hint: 'Divide 72 by 50, then reduce. The answer must differ from 0 and 9.',
        explanation: 'a = 36/25 = 1.44 is allowed. Both original fractions equal 50/27.',
        success: 'Potion perfected! a = 36/25.'
      }
    ],
    solution: 'a ≠ 0, 9. 8(9 − a) = 42a → 72 = 50a → a = 36/25.',
    takeaway: 'State denominator restrictions before multiplying, and check the solution against them.'
  },
  {
    id: 'sign-marathon', world: 'equations', title: 'Star Sprint',
    skill: 'Distribute, combine, and solve a multistep equation',
    display: '−8 − 3(4x − 1) + x = −2(x − 4) − (3x + 1)',
    intro: 'Three negative multipliers are hiding here. Catch every sign!',
    steps: [
      {
        prompt: 'Simplify the left side.', type: 'choice',
        choices: [
          { text: '−11x − 5', correct: true, feedback: 'Yes: −8 − 12x + 3 + x = −11x − 5.' },
          { text: '−11x − 11', correct: false, feedback: '(−3)(−1) is +3, so the constants are −8 + 3 = −5.' },
          { text: '−13x − 5', correct: false, feedback: 'Combine −12x + x as −11x, not −13x.' }
        ],
        hint: 'Distribute −3 first, then group x terms and constants.',
        explanation: '−8 − 3(4x − 1) + x = −8 − 12x + 3 + x = −11x − 5.'
      },
      {
        prompt: 'Simplify the right side.', type: 'choice',
        choices: [
          { text: 'x + 9', correct: false, feedback: 'The outside minus makes −(3x + 1) become −3x − 1.' },
          { text: '−5x − 9', correct: false, feedback: '(−2)(−4) is +8; the constants are +8 − 1 = +7.' },
          { text: '−5x + 7', correct: true, feedback: 'Correct: −2x + 8 − 3x − 1 = −5x + 7.' }
        ],
        hint: 'Distribute −2, and treat the second minus as multiplying by −1.',
        explanation: '−2(x − 4) − (3x + 1) = −2x + 8 − 3x − 1 = −5x + 7.'
      },
      {
        prompt: 'Add 5x and 5 to both sides.', equation: '−11x − 5 = −5x + 7', type: 'choice',
        choices: [
          { text: '−16x = 12', correct: false, feedback: 'Adding 5x to −11x gives −6x.' },
          { text: '−6x = 12', correct: true, feedback: 'Yes: −11x + 5x = −6x, and 7 + 5 = 12.' },
          { text: '−6x = 2', correct: false, feedback: 'To remove −5, add 5. On the right, 7 + 5 = 12.' }
        ],
        hint: 'Move the x terms together, then undo the −5.',
        explanation: '−11x − 5 = −5x + 7 → −6x = 12.'
      },
      {
        prompt: 'Solve for x.', equation: '−6x = 12', type: 'number', answer: -2,
        hint: 'Divide 12 by −6. A positive divided by a negative is negative.',
        explanation: 'x = −2. Substitution in the original equation gives 17 on each side.',
        success: 'Star sprint complete! x = −2.'
      }
    ],
    solution: '−11x − 5 = −5x + 7 → −6x = 12 → x = −2.',
    takeaway: 'Simplify each side separately before moving terms across the balance.'
  },
  {
    id: 'literal-s', world: 'formulas', title: 'Secret Letter',
    skill: 'Rearrange a formula to isolate s',
    display: 't = s/8 + 1     Solve for s.',
    intro: 'Treat the other letters as numbers you already know.',
    note: 'The typed 1/8s is interpreted as (1/8) × s, or s/8.',
    steps: [
      {
        prompt: 'Which move undoes the +1?', type: 'choice',
        choices: [
          { text: 't + 1 = s/8', correct: false, feedback: 'Undo +1 by subtracting 1 from both sides.' },
          { text: 't − 1 = s/8', correct: true, feedback: 'Exactly! Subtract 1 to leave s/8.' },
          { text: 't = (s − 1)/8', correct: false, feedback: 'The +1 is outside the division. Subtract 1 from the entire equation.' }
        ],
        hint: 'Use the inverse operation of addition.',
        explanation: 't = s/8 + 1 → t − 1 = s/8.'
      },
      {
        prompt: 'How do you undo division by 8?', equation: 't − 1 = s/8', type: 'choice',
        choices: [
          { text: 'Multiply both sides by 8', correct: true, feedback: 'Yes. Multiply the entire quantity t − 1 by 8.' },
          { text: 'Divide both sides by 8', correct: false, feedback: 'Dividing again would leave s/64. Multiplication undoes division.' },
          { text: 'Add 8 to both sides', correct: false, feedback: 'Addition cannot undo multiplication or division.' }
        ],
        hint: 'The inverse of dividing by 8 is multiplying by 8.',
        explanation: '8(t − 1) = s.'
      },
      {
        prompt: 'Choose the correct formula for s.', type: 'choice',
        choices: [
          { text: 's = 8t − 1', correct: false, feedback: 'Distribute 8 to both t and −1: 8(t − 1) = 8t − 8.' },
          { text: 's = (t − 1)/8', correct: false, feedback: 'You must multiply by 8 to undo s/8.' },
          { text: 's = 8(t − 1)', correct: true, feedback: 'Correct! This is also s = 8t − 8.' }
        ],
        hint: 'Keep t − 1 together in parentheses when multiplying by 8.',
        explanation: 's = 8(t − 1) = 8t − 8. This works for every real t.',
        success: 'Secret unlocked! s = 8(t − 1).'
      }
    ],
    solution: 't − 1 = s/8 → s = 8(t − 1) = 8t − 8.',
    takeaway: 'Use inverse operations on both sides; parentheses keep an entire expression together.'
  },
  {
    id: 'literal-height', world: 'formulas', title: 'Ice Cream Cone',
    skill: 'Isolate a variable in the cone volume formula',
    display: 'V = (1/3)πr²h     Solve for h.',
    intro: 'Find the cone’s height from its volume and radius.',
    note: 'The sample “V-1/3pir²h” is interpreted as the cone formula V = (1/3)πr²h.',
    steps: [
      {
        prompt: 'Multiply both sides by 3. What remains?', type: 'choice',
        choices: [
          { text: 'V/3 = πr²h', correct: false, feedback: 'Multiplying V by 3 gives 3V. Dividing would not cancel the 1/3.' },
          { text: '3V = πr²h', correct: true, feedback: 'Yes. The factor 3 cancels the 1/3 on the right.' },
          { text: '3V = 3πr²h', correct: false, feedback: 'On the right, 3 × (1/3) = 1, so the extra 3 disappears.' }
        ],
        hint: '3 × (1/3) equals 1.',
        explanation: 'V = (1/3)πr²h → 3V = πr²h.'
      },
      {
        prompt: 'Which factor should you divide by to leave h alone?', equation: '3V = πr²h', type: 'choice',
        choices: [
          { text: 'πr²', correct: true, feedback: 'Correct! πr² is the whole factor multiplying h.' },
          { text: 'πr', correct: false, feedback: 'The formula contains r². Dividing by πr would still leave an r multiplying h.' },
          { text: 'h', correct: false, feedback: 'Dividing by h removes the variable you want to isolate.' }
        ],
        hint: 'Find everything multiplied by h.',
        explanation: 'Dividing by πr² is valid when r ≠ 0.'
      },
      {
        prompt: 'Choose the formula for h when r ≠ 0.', type: 'choice',
        choices: [
          { text: 'h = V/(3πr²)', correct: false, feedback: 'The 3 belongs in the numerator because you multiplied V by 3.' },
          { text: 'h = 3V/(πr)', correct: false, feedback: 'Keep r squared in the denominator.' },
          { text: 'h = 3V/(πr²)', correct: true, feedback: 'Exactly! The full coefficient of h has been divided out.' }
        ],
        hint: 'Start with 3V = πr²h and divide both sides by πr².',
        explanation: 'h = 3V/(πr²) for r ≠ 0. If r = 0, the original formula becomes V = 0: any h works when V = 0; no h works when V ≠ 0.',
        success: 'Cone complete! h = 3V/(πr²).'
      }
    ],
    solution: '3V = πr²h → h = 3V/(πr²), provided r ≠ 0. At r = 0: any h if V = 0, otherwise no solution.',
    takeaway: 'Divide by the entire coefficient of the variable. Never divide by zero.'
  },
  {
    id: 'literal-factor', world: 'formulas', title: 'Letter Boutique',
    skill: 'Factor a shared variable and handle a zero coefficient',
    display: 'ax + x = c     Solve for x.',
    intro: 'Both terms contain x. Gather them into one stylish package.',
    steps: [
      {
        prompt: 'Rewrite x as 1x and factor out x.', type: 'choice',
        choices: [
          { text: 'a(2x) = c', correct: false, feedback: 'Only the first x has coefficient a; the second has coefficient 1.' },
          { text: '(a + 1)x = c', correct: true, feedback: 'Yes: ax + 1x = (a + 1)x.' },
          { text: '(a + x)x = c', correct: false, feedback: 'The second coefficient is 1, not x.' }
        ],
        hint: 'ax + x means ax + 1x. Add the coefficients.',
        explanation: 'ax + x = (a + 1)x.'
      },
      {
        prompt: 'When is dividing by a + 1 allowed?', type: 'choice',
        choices: [
          { text: 'When a ≠ −1', correct: true, feedback: 'Correct: a + 1 must not equal zero.' },
          { text: 'When a ≠ 0', correct: false, feedback: 'If a = 0, then a + 1 = 1, so division is safe. The forbidden value is −1.' },
          { text: 'For every value of a', correct: false, feedback: 'At a = −1, a + 1 = 0. Division by zero is undefined.' }
        ],
        hint: 'Solve a + 1 = 0 to find the excluded value.',
        explanation: 'a + 1 ≠ 0 means a ≠ −1.'
      },
      {
        prompt: 'Choose the formula for x when a ≠ −1.', type: 'choice',
        choices: [
          { text: 'x = c/a + 1', correct: false, feedback: 'Divide c by the whole coefficient a + 1. Parentheses matter.' },
          { text: 'x = c − a − 1', correct: false, feedback: 'The coefficient a + 1 multiplies x, so use division, not subtraction.' },
          { text: 'x = c/(a + 1)', correct: true, feedback: 'Yes! Divide both sides by a + 1.' }
        ],
        hint: 'From (a + 1)x = c, divide by the entire coefficient.',
        explanation: 'x = c/(a + 1) for a ≠ −1. If a = −1, the original equation becomes 0 = c: any x works when c = 0; none works when c ≠ 0.',
        success: 'Letters collected! x = c/(a + 1).'
      }
    ],
    solution: '(a + 1)x = c → x = c/(a + 1), provided a ≠ −1. At a = −1: any x if c = 0, otherwise no solution.',
    takeaway: 'When the target variable appears twice, factor it out before dividing.'
  },
  {
    id: 'literal-both-sides', world: 'formulas', title: 'Twin Letter Trail',
    skill: 'Collect and factor a target variable on both sides',
    display: 'xy − w = xz − 4     Solve for x.',
    intro: 'Bring the x terms together and follow the trail to x.',
    steps: [
      {
        prompt: 'Subtract xz and add w on both sides.', type: 'choice',
        choices: [
          { text: 'xy − xz = −w − 4', correct: false, feedback: 'Adding w to the right gives w − 4.' },
          { text: 'xy − xz = w − 4', correct: true, feedback: 'Yes! All x terms are on the left and all other terms are on the right.' },
          { text: 'xy + xz = w + 4', correct: false, feedback: 'Subtract xz, and keep the original −4 on the right.' }
        ],
        hint: 'Use the same subtraction and addition on both sides.',
        explanation: 'xy − w = xz − 4 → xy − xz = w − 4.'
      },
      {
        prompt: 'Factor x out of the left side.', equation: 'xy − xz = w − 4', type: 'choice',
        choices: [
          { text: 'x(y − z) = w − 4', correct: true, feedback: 'Correct! Distributing x gives xy − xz again.' },
          { text: 'x(y + z) = w − 4', correct: false, feedback: 'Keep the subtraction: xy − xz factors as x(y − z).' },
          { text: 'x(yz) = w − 4', correct: false, feedback: 'Factoring a difference does not turn the remaining terms into a product.' }
        ],
        hint: 'Each left-side term has one common factor x.',
        explanation: 'xy − xz = x(y − z).'
      },
      {
        prompt: 'Choose the formula for x when y ≠ z.', type: 'choice',
        choices: [
          { text: 'x = (w + 4)/(y − z)', correct: false, feedback: 'The numerator is w − 4. Dividing does not change that sign.' },
          { text: 'x = (w − 4)/(y + z)', correct: false, feedback: 'The coefficient of x is y − z, not y + z.' },
          { text: 'x = (w − 4)/(y − z)', correct: true, feedback: 'Exactly! Divide both sides by y − z.' }
        ],
        hint: 'Divide by the whole factor multiplying x, and keep both differences together.',
        explanation: 'x = (w − 4)/(y − z) for y ≠ z. If y = z, the original equation requires w = 4: any x works when w = 4; no x works otherwise.',
        success: 'Trail complete! x = (w − 4)/(y − z).'
      }
    ],
    solution: 'xy − xz = w − 4 → x(y − z) = w − 4 → x = (w − 4)/(y − z), for y ≠ z. At y = z: any x if w = 4, otherwise no solution.',
    takeaway: 'Collect the target variable, factor it, then divide by a nonzero coefficient.'
  },
  {
    id: 'walkathon', world: 'stories', title: 'Kindness Walk',
    skill: 'Model equal earnings using rate and starting amount',
    display: 'Sara earns $0.50 per lap plus $33 in donations. Marwa earns $1.25 per lap. They walk the same number of laps and raise equal amounts. How much does each earn?',
    intro: 'Build two earnings expressions and find where they meet.',
    note: 'We assume both students complete the same number of laps. Equal earnings alone would not determine one unique answer if their lap counts could differ.',
    steps: [
      {
        prompt: 'Let L be the number of laps each student walks. Which expression gives Sara’s earnings?', type: 'choice',
        choices: [
          { text: '0.50(L + 33)', correct: false, feedback: 'The $33 is a separate donation, not 33 extra laps. Add it after calculating lap earnings.' },
          { text: '0.50L + 33', correct: true, feedback: 'Yes: lap earnings plus the fixed $33 donation.' },
          { text: '33L + 0.50', correct: false, feedback: '$0.50 is the per-lap rate, so it multiplies L. The $33 is added once.' }
        ],
        hint: 'Earnings = rate × laps + extra donations.',
        explanation: 'Sara earns 0.50L + 33 dollars. Marwa earns 1.25L dollars.'
      },
      {
        prompt: 'They raise equal amounts. Choose the equation.', type: 'choice',
        choices: [
          { text: '0.50L + 33 = 1.25L', correct: true, feedback: 'Correct! The two earnings expressions must be equal.' },
          { text: '0.50L = 1.25L + 33', correct: false, feedback: 'The $33 belongs to Sara, not Marwa.' },
          { text: '0.50L + 1.25L = 33', correct: false, feedback: 'Equal earnings means set the two totals equal; do not add the two rates.' }
        ],
        hint: 'Put Sara’s total on one side and Marwa’s total on the other.',
        explanation: '0.50L + 33 = 1.25L. Subtract 0.50L to get 33 = 0.75L.'
      },
      {
        prompt: 'How many laps does each student walk?', equation: '33 = 0.75L', type: 'number', answer: 44, unit: 'laps',
        hint: 'Divide 33 by 0.75. The rate difference is $0.75 per lap.',
        explanation: 'L = 33/0.75 = 44 laps. Marwa earns $0.75 more per lap, so 44 laps make up Sara’s $33 head start.'
      },
      {
        prompt: 'How much money does each student earn?', equation: 'Sara: 0.50 × 44 + 33    Marwa: 1.25 × 44', type: 'number', answer: 55, unit: 'dollars each',
        hint: 'Use 44 laps in either earnings expression. Both should give the same total.',
        explanation: 'Sara: $22 + $33 = $55. Marwa: $1.25 × 44 = $55. The question asks for dollars, so the final answer is $55 each.',
        success: 'Kindness goal reached! They each earn $55.'
      }
    ],
    solution: '0.50L + 33 = 1.25L → 33 = 0.75L → L = 44 laps → each student earns $55.',
    takeaway: 'A fixed donation is added once. Answer the quantity the story asks for, with its unit.'
  },
  {
    id: 'perimeter', world: 'stories', title: 'Garden Party',
    skill: 'Model equal perimeters and interpret side lengths',
    display: 'A square and a triangle have the same perimeter. Each square side is 3x + 2 inches. The triangle sides are x + 9, 4x, and 3x + 7 inches. Find x and the shared perimeter.',
    intro: 'Choose matching borders for a square garden and a triangular garden.',
    steps: [
      {
        prompt: 'What is the square’s perimeter?', type: 'choice',
        choices: [
          { text: '(3x + 2)²', correct: false, feedback: 'Squaring a side gives area. Perimeter is the distance around all four sides.' },
          { text: '3x + 8', correct: false, feedback: 'Multiply the whole side length by 4: both 3x and 2.' },
          { text: '4(3x + 2) = 12x + 8', correct: true, feedback: 'Exactly! A square has four equal sides.' }
        ],
        hint: 'Perimeter is the sum of side lengths. A square has four copies of the same side.',
        explanation: 'Square perimeter = 4(3x + 2) = 12x + 8 inches.'
      },
      {
        prompt: 'What is the triangle’s perimeter?', type: 'choice',
        choices: [
          { text: '8x + 16', correct: true, feedback: 'Yes: x + 4x + 3x = 8x, and 9 + 7 = 16.' },
          { text: '8x + 7', correct: false, feedback: 'Include both constants: 9 + 7 = 16.' },
          { text: '3(8x + 16)', correct: false, feedback: 'You already added all three sides. Do not multiply the total by 3 again.' }
        ],
        hint: 'Add x + 9, 4x, and 3x + 7. Group like terms.',
        explanation: 'Triangle perimeter = (x + 9) + 4x + (3x + 7) = 8x + 16 inches.'
      },
      {
        prompt: 'The perimeters are equal. Which equation models that?', type: 'choice',
        choices: [
          { text: '3x + 2 = 8x + 16', correct: false, feedback: 'That equates one square side with the entire triangle. Use the square’s full perimeter.' },
          { text: '12x + 8 = 8x + 16', correct: true, feedback: 'Correct! Both expressions represent the full distance around each shape.' },
          { text: '12x + 8 + 8x + 16 = 0', correct: false, feedback: 'Equal perimeters means set the two expressions equal to each other.' }
        ],
        hint: 'Square perimeter = triangle perimeter.',
        explanation: '12x + 8 = 8x + 16. Subtract 8x and 8 to get 4x = 8.'
      },
      {
        prompt: 'Solve for x.', equation: '4x = 8', type: 'number', answer: 2,
        hint: 'Divide both sides by 4.',
        explanation: 'x = 2. The square’s side is 3(2) + 2 = 8 inches. The triangle sides are 11, 8, and 13 inches.'
      },
      {
        prompt: 'What is the shared perimeter?', equation: 'Square: 4 × 8    Triangle: 11 + 8 + 13', type: 'number', answer: 32, unit: 'inches',
        hint: 'Use x = 2 to find the side lengths, then add all sides.',
        explanation: 'Both perimeters equal 32 inches. The triangle is valid because 11 + 8 > 13, 11 + 13 > 8, and 8 + 13 > 11.',
        success: 'Gardens matched! x = 2 and the perimeter is 32 inches.'
      }
    ],
    solution: '4(3x + 2) = (x + 9) + 4x + (3x + 7) → 12x + 8 = 8x + 16 → x = 2. Square side: 8 in. Triangle sides: 11, 8, 13 in. Shared perimeter: 32 in.',
    takeaway: 'Perimeter adds every side length. Substitute your answer to check both shapes.'
  }
];
