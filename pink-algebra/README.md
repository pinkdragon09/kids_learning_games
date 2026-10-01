# Alice’s Algebra Arcade — Set 2

Set 2 has 14 fresh missions and 52 guided steps at the same level: 8 equations, 4 formula challenges, and 2 word problems. Includes no solution and infinitely many solutions, fractions, denominator restrictions, formula special cases, a bookmark fundraiser, and equal garden perimeters.

## Story finales

Each of the 14 missions unlocks its own illustrated story ending with a short animation tied to its title and theme. Replay animation plays the scene again. Restart exercise remains available at every step. Reduced-motion preferences show a still illustration. Existing Set 2 progress is preserved.

The illustration atlas was created with built-in imagegen and saved as `dist/ending-atlas.png`. The exact prompt is in `story-art-prompt.txt`. The standalone HTML embeds the atlas and all three game scripts.

## Play

Open `../Alice-Algebra-Arcade.html` with Google Chrome for the updated self-contained game. The original question set is saved in `../Alice-Algebra-Arcade-Set-1.html` and `sets/set-1.js`.

To serve the current game locally, run from the workspace:

```sh
python3 -m http.server 8834 --bind 127.0.0.1 --directory pink-algebra/dist
```

Then open `http://127.0.0.1:8834` in Chrome.

## Restart and resume

- Restart exercise resets that exercise at any step and preserves earned gems.
- Redo this step resets the current step.
- Numbered step buttons let Alice practice or revisit any step; all steps must be completed to earn a gem.
- Start a new adventure resets the current set after a confirmation inside the game.
- Each set has its own progress record. Set 2 starts fresh and does not overwrite the original set’s browser storage.
- File and server versions use separate browser storage. Fonts fall back to system fonts without internet.

## Verification

All 14 Set 2 missions and all 52 answer checks passed in Chrome. Independent exact arithmetic and content reviews verified transformations, choice flags, numeric solutions, formula restrictions, fundraiser totals, and triangle inequalities. Perimeter diagrams take their labels from the current question data. All 14 story scenes and replay animations were checked in Chrome; the completion flow unlocks the finale and focuses its heading. The updated standalone file includes the same verified assets and questions as the local game.
