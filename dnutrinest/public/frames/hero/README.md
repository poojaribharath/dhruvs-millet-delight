# Hero image sequence

Drop the pre-rendered hero frames here as:

```
frame-0001.jpg
frame-0002.jpg
...
frame-0239.jpg
```

- Source: the Figma "Video frames" file (`frame-0002` … `frame-0240`),
  re-indexed to a clean **1-based** sequence (`frame-0001` … `frame-0239`).
- Format: progressive JPEG, ~1600px wide, quality ~72 (aim < ~200 KB each).
- Count is set by `HERO_FRAME_COUNT` in `lib/hero-config.ts` (currently 239).

Until real frames are present, the canvas renders a procedural placeholder so
the scrub is fully functional — no code changes are needed when the frames land.
This is a zero-touch drop-in: the loader auto-detects real vs. placeholder mode
by probing `frame-0001.jpg`.
