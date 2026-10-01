/* Set 2: fresh algebra adventures with explicit notation and checked answers. */
window.ALGEBRA_SET = {"id": "set-2", "label": "Set 2"};
window.ALGEBRA_NOTES = [
  "Welcome to Set 2! These 14 missions are new; your first set stays available separately.",
  "Fractions work in answer boxes: enter −6/13 as -6/13. For repeating decimals, use at least 4 decimal places.",
  "The potion equation uses 5/(2a), meaning the whole product 2a is in the denominator.",
  "The formula V = πr²h is cylinder volume. Rearranging a formula requires checking that the divisor is not zero.",
  "In the bookmark fundraiser, both students sell the same number of bookmarks and raise equal totals."
];

window.ALGEBRA_QUESTS = [
  {
    "id": "s2-ribbon-reveal",
    "world": "equations",
    "title": "Ribbon Remix",
    "skill": "Distribute a negative fraction and solve",
    "display": "−(3/4)(8x − 12) = 5 + 4x",
    "intro": "A new ribbon puzzle awaits. Spread the negative fraction to every term.",
    "steps": [
      {
        "prompt": "Distribute −3/4. What does the left side become?",
        "type": "choice",
        "choices": [
          {
            "text": "−6x − 9",
            "correct": false,
            "feedback": "A negative times a negative is positive: (−3/4)(−12) = +9."
          },
          {
            "text": "−6x + 9",
            "correct": true,
            "feedback": "Yes! (−3/4)(8x) = −6x and (−3/4)(−12) = +9."
          },
          {
            "text": "−6x + 12",
            "correct": false,
            "feedback": "Multiply the −12 by −3/4 too. It becomes +9."
          }
        ],
        "hint": "Make two products: −3/4 × 8x and −3/4 × (−12).",
        "explanation": "−(3/4)(8x − 12) = −6x + 9."
      },
      {
        "prompt": "Add 6x and subtract 5 on both sides. Which equation remains?",
        "type": "choice",
        "choices": [
          {
            "text": "4 = 10x",
            "correct": true,
            "feedback": "Correct! 9 − 5 = 4 and 4x + 6x = 10x."
          },
          {
            "text": "14 = 10x",
            "correct": false,
            "feedback": "Subtract 5 to cancel the +5 on the right. The left constant becomes 9 − 5 = 4."
          },
          {
            "text": "4 = −2x",
            "correct": false,
            "feedback": "Adding 6x to 4x gives 10x. Keep the same operation on both sides."
          }
        ],
        "hint": "Adding 6x removes −6x from the left; subtracting 5 removes +5 from the right.",
        "explanation": "−6x + 9 = 5 + 4x → 9 = 5 + 10x → 4 = 10x.",
        "equation": "−6x + 9 = 5 + 4x"
      },
      {
        "prompt": "Solve for x. You can enter a fraction.",
        "type": "number",
        "answer": 0.4,
        "answerText": "2/5",
        "hint": "Divide 4 by 10, then reduce the fraction.",
        "explanation": "x = 4/10 = 2/5. Check: the original left side is −(3/4)(−44/5) = 33/5, and the right side is 5 + 8/5 = 33/5.",
        "equation": "4 = 10x",
        "wrongFeedback": "The coefficient 10 multiplies x. Divide 4 by 10 rather than subtracting 10.",
        "success": "Ribbon remixed! x = 2/5."
      }
    ],
    "solution": "−6x + 9 = 5 + 4x → 4 = 10x → x = 2/5.",
    "takeaway": "Distribute to every term. A negative times a negative becomes positive."
  },
  {
    "id": "s2-smoothie-mix",
    "world": "equations",
    "title": "Berry Blend",
    "skill": "Clear fractions and combine like terms",
    "display": "x/3 + (3/4)(x − 2) = −2",
    "intro": "Blend the fractions away with one balanced multiplication.",
    "steps": [
      {
        "prompt": "What is the least common denominator of 3 and 4?",
        "type": "choice",
        "choices": [
          {
            "text": "7",
            "correct": false,
            "feedback": "Adding denominators does not find a common denominator. Find a multiple of both."
          },
          {
            "text": "12",
            "correct": true,
            "feedback": "12 is the smallest positive number divisible by both 3 and 4."
          },
          {
            "text": "4",
            "correct": false,
            "feedback": "4 is not divisible by 3, so it cannot clear both fractions."
          }
        ],
        "hint": "Compare 3, 6, 9, 12 with 4, 8, 12.",
        "explanation": "Multiplying the entire equation by 12 clears both denominators."
      },
      {
        "prompt": "Multiply every term by 12. Which equation do you get?",
        "type": "choice",
        "choices": [
          {
            "text": "4x + 9(x − 2) = −24",
            "correct": true,
            "feedback": "Yes: 12/3 = 4, 12 × 3/4 = 9, and 12 × (−2) = −24."
          },
          {
            "text": "4x + 9(x − 2) = −2",
            "correct": false,
            "feedback": "Multiply the right side by 12 too: −2 becomes −24."
          },
          {
            "text": "4x + 3(x − 2) = −24",
            "correct": false,
            "feedback": "The second coefficient is 12 × 3/4 = 9, not 3."
          }
        ],
        "hint": "The 12 multiplies both terms on the left and the −2 on the right.",
        "explanation": "12[x/3 + (3/4)(x − 2)] = 12(−2) → 4x + 9(x − 2) = −24."
      },
      {
        "prompt": "Distribute, combine, and add 18 to both sides.",
        "type": "choice",
        "choices": [
          {
            "text": "13x = −42",
            "correct": false,
            "feedback": "To remove −18, add 18. −24 + 18 is −6."
          },
          {
            "text": "13x = 6",
            "correct": false,
            "feedback": "Keep the negative sign: −24 + 18 = −6."
          },
          {
            "text": "13x = −6",
            "correct": true,
            "feedback": "Exactly: 4x + 9x − 18 = −24, so 13x = −6."
          }
        ],
        "hint": "First get 13x − 18 = −24.",
        "explanation": "4x + 9x − 18 = −24 → 13x − 18 = −24 → 13x = −6.",
        "equation": "4x + 9(x − 2) = −24"
      },
      {
        "prompt": "Solve for x.",
        "type": "number",
        "answer": -0.46153846153846156,
        "answerText": "−6/13",
        "hint": "Divide −6 by 13. The fraction is already reduced.",
        "explanation": "x = −6/13. Check: x/3 = −2/13 and (3/4)(x − 2) = (3/4)(−32/13) = −24/13. The sum is −26/13 = −2.",
        "equation": "13x = −6",
        "wrongFeedback": "Divide the constant by the coefficient: x = −6/13. The result stays negative.",
        "success": "Berry blend complete! x = −6/13."
      }
    ],
    "solution": "Multiply by 12: 4x + 9(x − 2) = −24 → 13x = −6 → x = −6/13.",
    "takeaway": "Clearing fractions means multiplying every term on both sides by the same number."
  },
  {
    "id": "s2-mystery-door",
    "world": "equations",
    "title": "Locked Locket",
    "skill": "Recognize a contradiction and no solution",
    "display": "5(d − 2) = 3 + 5d − 8",
    "intro": "Does any value open this locket? Watch what happens when the letters cancel.",
    "steps": [
      {
        "prompt": "Simplify both sides.",
        "type": "choice",
        "choices": [
          {
            "text": "5d − 2 = 5d − 5",
            "correct": false,
            "feedback": "The 5 multiplies −2 as well as d, giving −10."
          },
          {
            "text": "5d − 10 = 5d + 5",
            "correct": false,
            "feedback": "The right constants are 3 − 8 = −5."
          },
          {
            "text": "5d − 10 = 5d − 5",
            "correct": true,
            "feedback": "Yes: distribute 5 on the left and combine 3 − 8 on the right."
          }
        ],
        "hint": "5 × (−2) = −10, and 3 − 8 = −5.",
        "explanation": "5(d − 2) = 5d − 10, while 3 + 5d − 8 = 5d − 5."
      },
      {
        "prompt": "Subtract 5d from both sides. What remains?",
        "type": "choice",
        "choices": [
          {
            "text": "d = 5",
            "correct": false,
            "feedback": "Both d terms cancel completely. There is no remaining coefficient to divide by."
          },
          {
            "text": "−10 = −5",
            "correct": true,
            "feedback": "Exactly! The variable disappears and leaves a false statement."
          },
          {
            "text": "−10 = 5",
            "correct": false,
            "feedback": "Subtracting 5d does not change the sign of the constant −5."
          }
        ],
        "hint": "5d − 5d = 0 on both sides.",
        "explanation": "5d − 10 = 5d − 5 → −10 = −5.",
        "equation": "5d − 10 = 5d − 5"
      },
      {
        "prompt": "What is the solution set?",
        "type": "choice",
        "choices": [
          {
            "text": "No solution",
            "correct": true,
            "feedback": "Correct. No number makes −10 equal −5."
          },
          {
            "text": "d = 0",
            "correct": false,
            "feedback": "At d = 0, the original sides are −10 and −5. They still differ."
          },
          {
            "text": "All real numbers",
            "correct": false,
            "feedback": "All real numbers would leave a true statement after the d terms cancel."
          }
        ],
        "hint": "A false statement after the variable cancels means no value works.",
        "explanation": "The two simplified sides differ by 5 for every d, so the equation has no solution.",
        "success": "Locket mystery solved: no solution."
      }
    ],
    "solution": "5d − 10 = 5d − 5 → −10 = −5 → no solution.",
    "takeaway": "When the variable cancels, judge the remaining statement. False means no solution."
  },
  {
    "id": "s2-sign-switch",
    "world": "equations",
    "title": "Endless Sparkles",
    "skill": "Subtract parentheses and recognize infinitely many solutions",
    "display": "2x − (7 − 5x) = 7x − 7",
    "intro": "This sparkle trail may have more than one answer. Flip every sign carefully.",
    "steps": [
      {
        "prompt": "Remove the parentheses on the left.",
        "type": "choice",
        "choices": [
          {
            "text": "2x − 7 − 5x",
            "correct": false,
            "feedback": "Subtracting −5x gives +5x. The outside minus flips both signs."
          },
          {
            "text": "2x − 7 + 5x",
            "correct": true,
            "feedback": "Yes! −(7 − 5x) = −7 + 5x."
          },
          {
            "text": "2x + 7 − 5x",
            "correct": false,
            "feedback": "Multiplying by −1 changes +7 to −7 and −5x to +5x."
          }
        ],
        "hint": "Treat the outside minus as multiplying the whole parentheses by −1.",
        "explanation": "2x − (7 − 5x) = 2x − 7 + 5x = 7x − 7."
      },
      {
        "prompt": "Combine terms and subtract 7x from both sides. What remains?",
        "type": "choice",
        "choices": [
          {
            "text": "x = 0",
            "correct": false,
            "feedback": "The x terms cancel completely; no x term is left to force x to be zero."
          },
          {
            "text": "−7 = 7",
            "correct": false,
            "feedback": "The constant on the right stays −7."
          },
          {
            "text": "−7 = −7",
            "correct": true,
            "feedback": "Correct! This time cancellation leaves a true statement."
          }
        ],
        "hint": "Both simplified sides are the same expression, 7x − 7.",
        "explanation": "7x − 7 = 7x − 7 → −7 = −7."
      },
      {
        "prompt": "What is the solution set over the real numbers?",
        "type": "choice",
        "choices": [
          {
            "text": "Only x = 7",
            "correct": false,
            "feedback": "7 works, but so do 0, −2, 1/2, and every other real number."
          },
          {
            "text": "No solution",
            "correct": false,
            "feedback": "The remaining statement is true, so this is an identity rather than a contradiction."
          },
          {
            "text": "All real numbers: infinitely many solutions",
            "correct": true,
            "feedback": "Exactly! Every real x makes the two expressions equal."
          }
        ],
        "hint": "A true statement after every variable term cancels means every value in the domain works.",
        "explanation": "Both original sides simplify to 7x − 7. Every real value of x satisfies the equation.",
        "success": "Endless sparkles! Infinitely many solutions."
      }
    ],
    "solution": "2x − 7 + 5x = 7x − 7 → −7 = −7 → all real numbers.",
    "takeaway": "When variables cancel, a true statement gives infinitely many solutions; a false one gives none."
  },
  {
    "id": "s2-fraction-bar",
    "world": "equations",
    "title": "Macaron Stack",
    "skill": "Undo operations around a fraction",
    "display": "(5y + 3)/4 − 2 = 6",
    "intro": "Unstack the operations from the outside inward.",
    "steps": [
      {
        "prompt": "Add 2 to both sides. Which equation remains?",
        "type": "choice",
        "choices": [
          {
            "text": "(5y + 3)/4 = 4",
            "correct": false,
            "feedback": "Adding 2 to 6 gives 8, not 4."
          },
          {
            "text": "(5y + 3)/4 = 8",
            "correct": true,
            "feedback": "Yes! Adding 2 cancels the outside −2."
          },
          {
            "text": "5y + 3 = 8",
            "correct": false,
            "feedback": "The division by 4 is still there. Adding 2 only removes the −2."
          }
        ],
        "hint": "The fraction is one whole quantity; first undo the subtraction outside it.",
        "explanation": "(5y + 3)/4 − 2 = 6 → (5y + 3)/4 = 8."
      },
      {
        "prompt": "Multiply both sides by 4, then subtract 3.",
        "type": "choice",
        "choices": [
          {
            "text": "5y = 35",
            "correct": false,
            "feedback": "After multiplying, 5y + 3 = 32. Subtract 3 to get 29."
          },
          {
            "text": "5y = 5",
            "correct": false,
            "feedback": "Multiplying the right side by 4 gives 32 before subtracting 3."
          },
          {
            "text": "5y = 29",
            "correct": true,
            "feedback": "Correct: 5y + 3 = 32, so 5y = 29."
          }
        ],
        "hint": "The fraction bar covers the whole numerator 5y + 3.",
        "explanation": "(5y + 3)/4 = 8 → 5y + 3 = 32 → 5y = 29.",
        "equation": "(5y + 3)/4 = 8"
      },
      {
        "prompt": "Solve for y.",
        "type": "number",
        "answer": 5.8,
        "answerText": "29/5",
        "hint": "Divide 29 by 5. Enter 29/5 or 5.8.",
        "explanation": "y = 29/5 = 5.8. Check: (29 + 3)/4 − 2 = 8 − 2 = 6.",
        "equation": "5y = 29",
        "wrongFeedback": "Divide the constant 29 by the coefficient 5. You can keep the answer as a fraction.",
        "success": "Macarons stacked! y = 29/5."
      }
    ],
    "solution": "(5y + 3)/4 = 8 → 5y + 3 = 32 → 5y = 29 → y = 29/5.",
    "takeaway": "Undo the operations outside the fraction before solving within its numerator."
  },
  {
    "id": "s2-confetti-balance",
    "world": "equations",
    "title": "Confetti Encore",
    "skill": "Distribute negatives on both sides",
    "display": "−6(3 − x) = −3(5x − 2) + 9",
    "intro": "Two bursts of negative signs need careful balancing.",
    "steps": [
      {
        "prompt": "Distribute and combine constants on both sides.",
        "type": "choice",
        "choices": [
          {
            "text": "−18 + 6x = −15x + 15",
            "correct": true,
            "feedback": "Yes! (−6)(−x) = +6x, and (−3)(−2) + 9 = 6 + 9 = 15."
          },
          {
            "text": "−18 − 6x = −15x + 15",
            "correct": false,
            "feedback": "On the left, a negative times −x is positive: (−6)(−x) = +6x."
          },
          {
            "text": "−18 + 6x = −15x + 3",
            "correct": false,
            "feedback": "(−3)(−2) is +6, so the right constants are 6 + 9 = 15."
          }
        ],
        "hint": "Two negative factors make a positive product. Multiply both terms inside each pair of parentheses.",
        "explanation": "−6(3 − x) = −18 + 6x, and −3(5x − 2) + 9 = −15x + 15."
      },
      {
        "prompt": "Add 15x and 18 on both sides. Which equation results?",
        "type": "choice",
        "choices": [
          {
            "text": "9x = 33",
            "correct": false,
            "feedback": "Add 15x to 6x to get 21x. You are adding, not subtracting, the coefficients."
          },
          {
            "text": "21x = −3",
            "correct": false,
            "feedback": "To remove −18 on the left, add 18. The right constant becomes 15 + 18 = 33."
          },
          {
            "text": "21x = 33",
            "correct": true,
            "feedback": "Exactly! 6x + 15x = 21x, and 15 + 18 = 33."
          }
        ],
        "hint": "Move the x terms together, then undo the −18.",
        "explanation": "−18 + 6x = −15x + 15 → 21x = 33.",
        "equation": "−18 + 6x = −15x + 15"
      },
      {
        "prompt": "Solve for x and reduce the fraction.",
        "type": "number",
        "answer": 1.5714285714285714,
        "answerText": "11/7",
        "hint": "x = 33/21. Divide numerator and denominator by 3.",
        "explanation": "x = 33/21 = 11/7. Substitution gives −6(10/7) = −60/7 on the left, and −3(41/7) + 9 = −60/7 on the right.",
        "equation": "21x = 33",
        "wrongFeedback": "Divide 33 by 21, then reduce to 11/7. The answer is positive.",
        "success": "Encore balanced! x = 11/7."
      }
    ],
    "solution": "−18 + 6x = −15x + 15 → 21x = 33 → x = 11/7.",
    "takeaway": "Carry each sign with its term, and simplify each side before collecting the variables."
  },
  {
    "id": "s2-potion-proportion",
    "world": "equations",
    "title": "Rose Potion",
    "skill": "Solve a rational proportion with restrictions",
    "display": "5/(2a) = 9/(12 − a)",
    "intro": "Find the allowed values before cross-multiplying this rosy recipe.",
    "steps": [
      {
        "prompt": "Which values must a avoid?",
        "type": "choice",
        "choices": [
          {
            "text": "a = 2 and a = 12",
            "correct": false,
            "feedback": "The product 2a is zero at a = 0, not at a = 2."
          },
          {
            "text": "a = 0 and a = 12",
            "correct": true,
            "feedback": "Correct! 2a = 0 at a = 0, and 12 − a = 0 at a = 12."
          },
          {
            "text": "a = 0 only",
            "correct": false,
            "feedback": "The right denominator 12 − a is also zero when a = 12."
          }
        ],
        "hint": "Set 2a = 0 and 12 − a = 0 separately.",
        "explanation": "The original equation is defined only for a ≠ 0 and a ≠ 12."
      },
      {
        "prompt": "Cross-multiply. Which equation is correct?",
        "type": "choice",
        "choices": [
          {
            "text": "10a = 9(12 − a)",
            "correct": false,
            "feedback": "Pair each numerator with the opposite denominator, not its own."
          },
          {
            "text": "5(12 − a) = 9a",
            "correct": false,
            "feedback": "Keep the whole denominator 2a: 9 × 2a = 18a."
          },
          {
            "text": "5(12 − a) = 9(2a)",
            "correct": true,
            "feedback": "Yes! Multiply by the nonzero product 2a(12 − a) to clear both denominators."
          }
        ],
        "hint": "Opposite corners: 5 × (12 − a) and 9 × (2a).",
        "explanation": "5/(2a) = 9/(12 − a) → 5(12 − a) = 18a, for allowed values of a."
      },
      {
        "prompt": "Distribute and add 5a to both sides.",
        "type": "choice",
        "choices": [
          {
            "text": "60 = 23a",
            "correct": true,
            "feedback": "Correct: 60 − 5a = 18a becomes 60 = 23a."
          },
          {
            "text": "60 = 13a",
            "correct": false,
            "feedback": "Add 5a to remove −5a from the left: 18a + 5a = 23a."
          },
          {
            "text": "12 = 23a",
            "correct": false,
            "feedback": "Distribute the 5 to 12 too: 5 × 12 = 60."
          }
        ],
        "hint": "First get 60 − 5a = 18a.",
        "explanation": "60 − 5a = 18a → 60 = 23a.",
        "equation": "5(12 − a) = 18a"
      },
      {
        "prompt": "Solve for a. Check that your answer is allowed.",
        "type": "number",
        "answer": 2.608695652173913,
        "answerText": "60/23",
        "hint": "Divide 60 by 23. The answer must differ from 0 and 12.",
        "explanation": "a = 60/23 is allowed. Check: 2a = 120/23 and 12 − a = 216/23. The two original fractions both equal 23/24.",
        "equation": "60 = 23a",
        "wrongFeedback": "Divide the constant by the coefficient: a = 60/23. Then compare with the excluded values 0 and 12.",
        "success": "Rose potion ready! a = 60/23."
      }
    ],
    "solution": "a ≠ 0, 12. 5(12 − a) = 18a → 60 = 23a → a = 60/23.",
    "takeaway": "State denominator restrictions first, then check your solution against them.",
    "note": "The entire product 2a is the left denominator. Both denominators must be nonzero."
  },
  {
    "id": "s2-star-sprint",
    "world": "equations",
    "title": "Moonbeam Dash",
    "skill": "Distribute, combine, and solve with variables on both sides",
    "display": "−9 − 2(5x − 3) + 3x = −2(x − 4) − (x + 2)",
    "intro": "Catch three negative multipliers as you dash through the moonbeams.",
    "steps": [
      {
        "prompt": "Simplify the left side.",
        "type": "choice",
        "choices": [
          {
            "text": "−7x − 15",
            "correct": false,
            "feedback": "(−2)(−3) is +6, so the constants are −9 + 6 = −3."
          },
          {
            "text": "−7x − 3",
            "correct": true,
            "feedback": "Yes: −9 − 10x + 6 + 3x = −7x − 3."
          },
          {
            "text": "−13x − 3",
            "correct": false,
            "feedback": "The variable terms are −10x + 3x = −7x."
          }
        ],
        "hint": "Distribute −2, then combine −10x with +3x and −9 with +6.",
        "explanation": "−9 − 2(5x − 3) + 3x = −9 − 10x + 6 + 3x = −7x − 3."
      },
      {
        "prompt": "Simplify the right side.",
        "type": "choice",
        "choices": [
          {
            "text": "−3x + 6",
            "correct": true,
            "feedback": "Correct: −2x + 8 − x − 2 = −3x + 6."
          },
          {
            "text": "−x + 10",
            "correct": false,
            "feedback": "The outside minus gives −(x + 2) = −x − 2."
          },
          {
            "text": "−3x − 10",
            "correct": false,
            "feedback": "(−2)(−4) is +8. The constants are +8 − 2 = +6."
          }
        ],
        "hint": "Distribute −2 to x − 4 and −1 to x + 2.",
        "explanation": "−2(x − 4) − (x + 2) = −2x + 8 − x − 2 = −3x + 6."
      },
      {
        "prompt": "Add 3x and 3 to both sides.",
        "type": "choice",
        "choices": [
          {
            "text": "−10x = 9",
            "correct": false,
            "feedback": "Adding 3x to −7x gives −4x."
          },
          {
            "text": "−4x = 3",
            "correct": false,
            "feedback": "To cancel −3, add 3. The right side becomes 6 + 3 = 9."
          },
          {
            "text": "−4x = 9",
            "correct": true,
            "feedback": "Yes! −7x + 3x = −4x, and 6 + 3 = 9."
          }
        ],
        "hint": "Use the same two moves on both sides of the equation.",
        "explanation": "−7x − 3 = −3x + 6 → −4x = 9.",
        "equation": "−7x − 3 = −3x + 6"
      },
      {
        "prompt": "Solve for x.",
        "type": "number",
        "answer": -2.25,
        "answerText": "−9/4",
        "hint": "Divide 9 by −4. A positive divided by a negative is negative.",
        "explanation": "x = −9/4 = −2.25. Substitution gives 51/4 on each side of the original equation.",
        "equation": "−4x = 9",
        "wrongFeedback": "The coefficient is −4, including its sign. Divide 9 by −4 to isolate x.",
        "success": "Moonbeam dash complete! x = −9/4."
      }
    ],
    "solution": "−7x − 3 = −3x + 6 → −4x = 9 → x = −9/4.",
    "takeaway": "Simplify each side separately, then collect the variable terms with balanced moves."
  },
  {
    "id": "s2-secret-letter",
    "world": "formulas",
    "title": "Secret Postcard",
    "skill": "Rearrange a formula to isolate s",
    "display": "t = s/6 − 2     Solve for s.",
    "intro": "Decode the letter s with inverse operations, then try your new formula.",
    "steps": [
      {
        "prompt": "Which move undoes the −2?",
        "type": "choice",
        "choices": [
          {
            "text": "t − 2 = s/6",
            "correct": false,
            "feedback": "Undo subtraction by adding 2 to both sides."
          },
          {
            "text": "t = (s + 2)/6",
            "correct": false,
            "feedback": "The −2 is outside the division. Add 2 to the whole equation."
          },
          {
            "text": "t + 2 = s/6",
            "correct": true,
            "feedback": "Yes! Adding 2 cancels the −2 on the right."
          }
        ],
        "hint": "The inverse of subtracting 2 is adding 2.",
        "explanation": "t = s/6 − 2 → t + 2 = s/6."
      },
      {
        "prompt": "How do you undo division by 6?",
        "type": "choice",
        "choices": [
          {
            "text": "Divide both sides by 6",
            "correct": false,
            "feedback": "Dividing again gives s/36. Multiply by 6 to cancel division by 6."
          },
          {
            "text": "Multiply both sides by 6",
            "correct": true,
            "feedback": "Exactly. The whole quantity t + 2 is multiplied by 6."
          },
          {
            "text": "Subtract 6 from both sides",
            "correct": false,
            "feedback": "Subtraction does not undo division. Use multiplication."
          }
        ],
        "hint": "Multiplication and division by the same nonzero number undo each other.",
        "explanation": "6(t + 2) = s.",
        "equation": "t + 2 = s/6"
      },
      {
        "prompt": "Choose the correct formula for s.",
        "type": "choice",
        "choices": [
          {
            "text": "s = 6(t + 2)",
            "correct": true,
            "feedback": "Yes! This is equivalent to s = 6t + 12."
          },
          {
            "text": "s = 6t + 2",
            "correct": false,
            "feedback": "Multiply both t and 2 by 6. The constant becomes 12."
          },
          {
            "text": "s = (t + 2)/6",
            "correct": false,
            "feedback": "To undo s/6, multiply the other side by 6."
          }
        ],
        "hint": "Keep t + 2 in parentheses while multiplying by 6.",
        "explanation": "s = 6(t + 2) = 6t + 12. The coefficient 6 is never zero, so this works for every real t."
      },
      {
        "prompt": "Use your formula: if t = 3, what is s?",
        "type": "number",
        "answer": 30,
        "answerText": "30",
        "hint": "Substitute 3 for t, then calculate 6 × (3 + 2).",
        "explanation": "s = 6(3 + 2) = 30. Check in the original formula: 30/6 − 2 = 5 − 2 = 3.",
        "equation": "s = 6(t + 2)",
        "wrongFeedback": "Calculate inside the parentheses first: 3 + 2 = 5, then multiply 5 by 6.",
        "success": "Postcard decoded! s = 6(t + 2)."
      }
    ],
    "solution": "t + 2 = s/6 → s = 6(t + 2) = 6t + 12. When t = 3, s = 30.",
    "takeaway": "Keep the whole expression together when you multiply, then check with a sample value."
  },
  {
    "id": "s2-cylinder-height",
    "world": "formulas",
    "title": "Sparkle Cylinder",
    "skill": "Isolate h in the cylinder volume formula",
    "display": "V = πr²h     Solve for h.",
    "intro": "Find the height of a cylindrical glitter jar from its volume and radius.",
    "steps": [
      {
        "prompt": "Which entire factor multiplies h?",
        "type": "choice",
        "choices": [
          {
            "text": "πr",
            "correct": false,
            "feedback": "The radius is squared. The coefficient is πr²."
          },
          {
            "text": "πr²",
            "correct": true,
            "feedback": "Correct! V = (πr²) × h."
          },
          {
            "text": "πr²h",
            "correct": false,
            "feedback": "That includes h itself. Identify just the factor beside the variable you want to isolate."
          }
        ],
        "hint": "Everything multiplied by h is its coefficient.",
        "explanation": "The full coefficient of h is πr²."
      },
      {
        "prompt": "When can you divide both sides by πr²?",
        "type": "choice",
        "choices": [
          {
            "text": "When r ≠ 0",
            "correct": true,
            "feedback": "Yes. π is nonzero and r² is nonzero exactly when r is nonzero."
          },
          {
            "text": "Only when V ≠ 0",
            "correct": false,
            "feedback": "The divisor is πr². Its value depends on r, not V."
          },
          {
            "text": "For every r, including r = 0",
            "correct": false,
            "feedback": "At r = 0, the divisor πr² is zero. Division by zero is undefined."
          }
        ],
        "hint": "Check the quantity you plan to put in the denominator.",
        "explanation": "Dividing by πr² is allowed only when r ≠ 0."
      },
      {
        "prompt": "Choose the formula for h when r ≠ 0.",
        "type": "choice",
        "choices": [
          {
            "text": "h = V/(πr)",
            "correct": false,
            "feedback": "Keep the squared radius in the denominator."
          },
          {
            "text": "h = V − πr²",
            "correct": false,
            "feedback": "The coefficient multiplies h, so undo it with division, not subtraction."
          },
          {
            "text": "h = V/(πr²)",
            "correct": true,
            "feedback": "Exactly! Divide V by the entire nonzero coefficient πr²."
          }
        ],
        "hint": "From V = (πr²)h, divide both sides by πr².",
        "explanation": "h = V/(πr²) for r ≠ 0. For example, V = 45π and r = 3 give h = 45π/(9π) = 5."
      },
      {
        "prompt": "Algebra bonus: if r = 0, what does the original formula tell you?",
        "type": "choice",
        "choices": [
          {
            "text": "h must equal 0 for every V",
            "correct": false,
            "feedback": "At r = 0, the right side is zero for every h. It cannot match a nonzero V."
          },
          {
            "text": "Any h if V = 0; no h if V ≠ 0",
            "correct": true,
            "feedback": "Correct! The original formula becomes V = 0, with no h term left."
          },
          {
            "text": "h = V/0",
            "correct": false,
            "feedback": "Division by zero is undefined. Return to the original formula instead."
          }
        ],
        "hint": "Substitute r = 0 into V = πr²h before doing any division.",
        "explanation": "When r = 0, V = π × 0² × h = 0. If V = 0, every real h satisfies the equation; if V ≠ 0, no h does.",
        "success": "Jar formula found! h = V/(πr²) when r ≠ 0."
      }
    ],
    "solution": "Divide by πr²: h = V/(πr²), provided r ≠ 0. At r = 0: any h if V = 0, otherwise no solution.",
    "takeaway": "Divide by the entire coefficient. If it is zero, analyze the original equation instead.",
    "note": "This is a cylinder formula: V = πr²h. For a physical jar, the radius is positive."
  },
  {
    "id": "s2-letter-boutique",
    "world": "formulas",
    "title": "Charm Boutique",
    "skill": "Factor x and handle a zero coefficient",
    "display": "ax − 3x = c     Solve for x.",
    "intro": "Collect the matching x charms into a single factor.",
    "steps": [
      {
        "prompt": "Factor out the shared x.",
        "type": "choice",
        "choices": [
          {
            "text": "(a − 3)x = c",
            "correct": true,
            "feedback": "Correct! Distributing x gives ax − 3x again."
          },
          {
            "text": "(a + 3)x = c",
            "correct": false,
            "feedback": "Keep the subtraction between the coefficients."
          },
          {
            "text": "a(x − 3) = c",
            "correct": false,
            "feedback": "Distributing that expression gives ax − 3a, rather than ax − 3x."
          }
        ],
        "hint": "Both terms have x. The remaining coefficients are a and −3.",
        "explanation": "ax − 3x = (a − 3)x."
      },
      {
        "prompt": "When is dividing by a − 3 allowed?",
        "type": "choice",
        "choices": [
          {
            "text": "When a ≠ 0",
            "correct": false,
            "feedback": "At a = 0, the divisor is −3, which is allowed. The excluded value is 3."
          },
          {
            "text": "For every a",
            "correct": false,
            "feedback": "At a = 3, the coefficient a − 3 is zero."
          },
          {
            "text": "When a ≠ 3",
            "correct": true,
            "feedback": "Exactly! a − 3 must be nonzero."
          }
        ],
        "hint": "Solve a − 3 = 0 to find the value that would make the divisor zero.",
        "explanation": "a − 3 ≠ 0 means a ≠ 3."
      },
      {
        "prompt": "Choose the formula for x when a ≠ 3.",
        "type": "choice",
        "choices": [
          {
            "text": "x = c/a − 3",
            "correct": false,
            "feedback": "Divide by the whole coefficient a − 3. Parentheses matter."
          },
          {
            "text": "x = c/(a − 3)",
            "correct": true,
            "feedback": "Yes! Divide both sides of (a − 3)x = c by a − 3."
          },
          {
            "text": "x = c − a + 3",
            "correct": false,
            "feedback": "The coefficient multiplies x, so use division to isolate it."
          }
        ],
        "hint": "Write the entire coefficient in the denominator.",
        "explanation": "x = c/(a − 3), provided a ≠ 3. For example, a = 5 and c = 14 give x = 7."
      },
      {
        "prompt": "What happens if a = 3?",
        "type": "choice",
        "choices": [
          {
            "text": "Any x if c = 0; no x if c ≠ 0",
            "correct": true,
            "feedback": "Correct! The original equation becomes 3x − 3x = c, or 0 = c."
          },
          {
            "text": "x = 0 for every c",
            "correct": false,
            "feedback": "If c is nonzero, 0 = c is false even at x = 0."
          },
          {
            "text": "No solution even when c = 0",
            "correct": false,
            "feedback": "If c = 0, the equation is 0 = 0, true for every x."
          }
        ],
        "hint": "Substitute a = 3 into the original equation. The x terms cancel.",
        "explanation": "At a = 3, 0 = c. It is an identity when c = 0 and a contradiction when c ≠ 0.",
        "success": "Charms collected! x = c/(a − 3) when a ≠ 3."
      }
    ],
    "solution": "(a − 3)x = c → x = c/(a − 3), for a ≠ 3. At a = 3: any x if c = 0, otherwise no solution.",
    "takeaway": "Factor the target variable first. Check whether the coefficient could equal zero."
  },
  {
    "id": "s2-twin-letter-trail",
    "world": "formulas",
    "title": "Butterfly Letters",
    "skill": "Collect and factor x from both sides",
    "display": "xy + 5 = xz + w     Solve for x.",
    "intro": "Guide the x terms to the same side before unfolding the formula.",
    "steps": [
      {
        "prompt": "Subtract xz and 5 from both sides.",
        "type": "choice",
        "choices": [
          {
            "text": "xy + xz = w + 5",
            "correct": false,
            "feedback": "You are subtracting xz and 5, so both signs are negative in the result."
          },
          {
            "text": "xy − xz = w − 5",
            "correct": true,
            "feedback": "Yes! The x terms are on the left and the remaining terms are on the right."
          },
          {
            "text": "xy − xz = 5 − w",
            "correct": false,
            "feedback": "The original right constant is w. Subtracting 5 gives w − 5."
          }
        ],
        "hint": "The +5 moves out by subtracting 5 from both sides.",
        "explanation": "xy + 5 = xz + w → xy − xz = w − 5."
      },
      {
        "prompt": "Factor x from the left side.",
        "type": "choice",
        "choices": [
          {
            "text": "x(yz) = w − 5",
            "correct": false,
            "feedback": "Factoring a difference leaves a difference of coefficients, not their product."
          },
          {
            "text": "x(y + z) = w − 5",
            "correct": false,
            "feedback": "Keep the minus sign: distributing x must give xy − xz."
          },
          {
            "text": "x(y − z) = w − 5",
            "correct": true,
            "feedback": "Correct! Both terms share the factor x."
          }
        ],
        "hint": "After removing one x from each term, y − z remains.",
        "explanation": "xy − xz = x(y − z).",
        "equation": "xy − xz = w − 5"
      },
      {
        "prompt": "Choose the formula together with its restriction.",
        "type": "choice",
        "choices": [
          {
            "text": "x = (w − 5)/(y − z), when y ≠ z",
            "correct": true,
            "feedback": "Exactly! Divide by y − z only when it is nonzero."
          },
          {
            "text": "x = (w + 5)/(y − z), when y ≠ z",
            "correct": false,
            "feedback": "The numerator is w − 5. Dividing does not change its sign."
          },
          {
            "text": "x = (w − 5)/(y + z), when y ≠ −z",
            "correct": false,
            "feedback": "The coefficient of x is y − z, not y + z."
          }
        ],
        "hint": "Divide by the whole factor multiplying x, and check when that factor is zero.",
        "explanation": "x = (w − 5)/(y − z) for y ≠ z. For example, y = 7, z = 3, and w = 17 give x = 12/4 = 3."
      },
      {
        "prompt": "If y = z, when does the original equation have solutions?",
        "type": "choice",
        "choices": [
          {
            "text": "Only x = 0 works, regardless of w",
            "correct": false,
            "feedback": "At x = 0, the original equation requires 5 = w. The condition still matters."
          },
          {
            "text": "Any x if w = 5; no x if w ≠ 5",
            "correct": true,
            "feedback": "Correct! When y = z, matching variable terms cancel and leave 5 = w."
          },
          {
            "text": "Any x for every value of w",
            "correct": false,
            "feedback": "After the x terms cancel, 5 = w must still be true."
          }
        ],
        "hint": "Set y and z equal in xy + 5 = xz + w, then cancel the identical x terms.",
        "explanation": "If y = z, the original equation reduces to 5 = w. All real x work when w = 5; no x works otherwise.",
        "success": "Butterflies unfolded! x = (w − 5)/(y − z) when y ≠ z."
      }
    ],
    "solution": "xy − xz = w − 5 → x(y − z) = w − 5 → x = (w − 5)/(y − z), for y ≠ z. At y = z: any x if w = 5, otherwise no solution.",
    "takeaway": "Collect the target variable, factor it, then divide by a nonzero coefficient."
  },
  {
    "id": "s2-bookmark-fair",
    "world": "stories",
    "title": "Bookmark Kindness",
    "skill": "Model equal totals using a rate and a fixed donation",
    "display": "At a charity bookmark fair, Nia raises $1.75 per bookmark plus a $24 sponsor donation. Bella raises $2.50 per bookmark and receives no donation. They sell the same number of bookmarks and raise equal totals. How much money does each raise?",
    "intro": "Give both fundraisers one shared bookmark count and match their totals.",
    "steps": [
      {
        "prompt": "Let b be the number of bookmarks each sells. Which expression gives Nia’s total?",
        "type": "choice",
        "choices": [
          {
            "text": "1.75(b + 24)",
            "correct": false,
            "feedback": "The donation is $24, not 24 extra bookmarks. Add it after calculating the sales total."
          },
          {
            "text": "24b + 1.75",
            "correct": false,
            "feedback": "The rate $1.75 multiplies the bookmark count. The $24 is a fixed amount."
          },
          {
            "text": "1.75b + 24",
            "correct": true,
            "feedback": "Yes! Rate × count plus the sponsor donation."
          }
        ],
        "hint": "Total raised = dollars per bookmark × bookmarks + fixed donation.",
        "explanation": "Nia raises 1.75b + 24 dollars. Bella raises 2.50b dollars."
      },
      {
        "prompt": "Which equation says their totals are equal?",
        "type": "choice",
        "choices": [
          {
            "text": "1.75b = 2.50b + 24",
            "correct": false,
            "feedback": "The $24 donation belongs to Nia, so it goes with 1.75b."
          },
          {
            "text": "1.75b + 24 = 2.50b",
            "correct": true,
            "feedback": "Correct! Each side represents one student’s full total."
          },
          {
            "text": "1.75b + 2.50b = 24",
            "correct": false,
            "feedback": "Equal totals means set the two expressions equal, rather than adding their sales."
          }
        ],
        "hint": "Nia’s total = Bella’s total.",
        "explanation": "1.75b + 24 = 2.50b. Subtracting 1.75b gives 24 = 0.75b."
      },
      {
        "prompt": "How many bookmarks does each student sell?",
        "type": "number",
        "answer": 32,
        "answerText": "32",
        "hint": "Divide 24 by 0.75. Bella raises $0.75 more per bookmark.",
        "explanation": "b = 24/0.75 = 32. Bella’s extra $0.75 per bookmark makes up Nia’s $24 donation after 32 bookmarks.",
        "equation": "24 = 0.75b",
        "wrongFeedback": "Use the difference between the rates, $0.75. Divide the $24 head start by $0.75 per bookmark.",
        "unit": "bookmarks each"
      },
      {
        "prompt": "How much money does each student raise?",
        "type": "number",
        "answer": 80,
        "answerText": "80",
        "hint": "Use 32 bookmarks in either full expression. Remember Nia’s donation.",
        "explanation": "Nia raises $56 + $24 = $80. Bella raises $2.50 × 32 = $80. Both totals match.",
        "equation": "Nia: 1.75 × 32 + 24    Bella: 2.50 × 32",
        "wrongFeedback": "32 is the bookmark count. The question asks for dollars: calculate the total using the rate and donation.",
        "success": "Kindness bookmarks complete! Each student raises $80.",
        "unit": "dollars each"
      }
    ],
    "solution": "1.75b + 24 = 2.50b → 24 = 0.75b → b = 32 bookmarks → $80 raised by each student.",
    "takeaway": "A fixed donation is added once. Use the shared count, then answer the requested quantity with its unit.",
    "note": "Both students sell the same number of bookmarks. The $24 donation is added just once."
  },
  {
    "id": "s2-perimeter-party",
    "world": "stories",
    "title": "Rose Garden Borders",
    "skill": "Model equal perimeters and check side lengths",
    "display": "A square garden and a triangular garden have the same perimeter. Each square side is 2x + 3 inches. The triangle sides are x + 7, 2x + 4, and 3x + 7 inches. Find x and the shared perimeter.",
    "intro": "Match the pink garden borders by adding every side.",
    "steps": [
      {
        "prompt": "What is the square’s perimeter?",
        "type": "choice",
        "choices": [
          {
            "text": "4(2x + 3) = 8x + 12",
            "correct": true,
            "feedback": "Yes! There are four equal sides, each measuring 2x + 3."
          },
          {
            "text": "(2x + 3)²",
            "correct": false,
            "feedback": "Squaring the side gives area. Perimeter adds all four sides."
          },
          {
            "text": "8x + 3",
            "correct": false,
            "feedback": "Multiply the whole side by 4, including the +3."
          }
        ],
        "hint": "A square has four copies of the same side length.",
        "explanation": "Square perimeter = 4(2x + 3) = 8x + 12 inches."
      },
      {
        "prompt": "What is the triangle’s perimeter?",
        "type": "choice",
        "choices": [
          {
            "text": "6x + 7",
            "correct": false,
            "feedback": "Include all three constants: 7 + 4 + 7 = 18."
          },
          {
            "text": "3(6x + 18)",
            "correct": false,
            "feedback": "Adding the three side lengths already gives the full perimeter. Do not multiply again."
          },
          {
            "text": "6x + 18",
            "correct": true,
            "feedback": "Correct! x + 2x + 3x = 6x, and 7 + 4 + 7 = 18."
          }
        ],
        "hint": "Add all three expressions, combining variable terms and constants separately.",
        "explanation": "(x + 7) + (2x + 4) + (3x + 7) = 6x + 18 inches."
      },
      {
        "prompt": "Which equation models the equal perimeters?",
        "type": "choice",
        "choices": [
          {
            "text": "2x + 3 = 6x + 18",
            "correct": false,
            "feedback": "The left expression is only one square side. Use all four square sides."
          },
          {
            "text": "8x + 12 = 6x + 18",
            "correct": true,
            "feedback": "Exactly! Each expression represents a full perimeter."
          },
          {
            "text": "8x + 12 + 6x + 18 = 0",
            "correct": false,
            "feedback": "Equal perimeters means setting the two totals equal to each other."
          }
        ],
        "hint": "Square perimeter = triangle perimeter.",
        "explanation": "8x + 12 = 6x + 18. Subtract 6x and 12 to get 2x = 6."
      },
      {
        "prompt": "Solve for x.",
        "type": "number",
        "answer": 3,
        "answerText": "3",
        "hint": "Divide both sides by 2.",
        "explanation": "x = 3. The square side is 2(3) + 3 = 9 inches. The triangle sides are 10, 10, and 16 inches.",
        "equation": "2x = 6",
        "wrongFeedback": "The coefficient 2 multiplies x. Divide 6 by 2 to isolate x."
      },
      {
        "prompt": "What is the shared perimeter?",
        "type": "number",
        "answer": 36,
        "answerText": "36",
        "hint": "Add all sides after substituting x = 3.",
        "explanation": "Both perimeters are 36 inches. The triangle is valid: 10 + 10 > 16, 10 + 16 > 10, and 10 + 16 > 10.",
        "equation": "Square: 4 × 9    Triangle: 10 + 10 + 16",
        "wrongFeedback": "9 inches is one square side, and 3 is x. The perimeter is the sum of all side lengths.",
        "success": "Rose gardens matched! x = 3 and the shared perimeter is 36 inches.",
        "unit": "inches"
      }
    ],
    "solution": "4(2x + 3) = (x + 7) + (2x + 4) + (3x + 7) → 8x + 12 = 6x + 18 → x = 3. Square side: 9 in. Triangle sides: 10, 10, 16 in. Shared perimeter: 36 in.",
    "takeaway": "Perimeter adds every side length. Substitute your answer to verify both totals and the triangle.",
    "geometry": {
      "squareSide": "2x + 3",
      "triangleSides": [
        "x + 7",
        "2x + 4",
        "3x + 7"
      ]
    }
  }
];
