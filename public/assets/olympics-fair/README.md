# Case study images

Add screenshots or GIFs to this folder, then update the `IMAGES` object near the top of `src/pages/case-studies/OlympicsFair.jsx`.

The hero uses `1st-hero.gif`, and the data preparation section uses `datasheet.jpeg`. To replace an image, update its path:

```js
hero: '/assets/olympics-fair/hero.png',
```

Each slot displays a labelled placeholder until its path is set. Images keep their natural proportions. Use anonymised notes for the testing slot.

| Slot | Suggested content |
| --- | --- |
| `hero` | Final website on desktop |
| `data` | Annotated Google Sheets dataset |

The charts, narrative outline, and visual direction board are native React components in `src/components/OlympicsVisuals.jsx`, using project data in `src/data/olympics.json`. The exported slide PNGs are retained as references and are no longer displayed on the page.

The final experience embeds the published website directly; no walkthrough image is needed.
