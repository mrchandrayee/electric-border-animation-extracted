# Electric Border Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/electric-border-animation-extracted/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable recreation of the uploaded 6.9-second screen recording.

## What is visible in the video
- Heading: **Electric border animation**
- A small dark navy card with a cyan electric edge/glow moving around its perimeter
- Card text:
  - `VOLTAGE`
  - `DANGER: HIGH FREQUENCY`
  - `SYSTEM ACTIVE`
- Orange rectangular frame around the preview
- Yellow-green framed code panel below the preview

## HTML transcribed from the visible code panel

```html
<div class="electric-card" id="electricCard">
  <div class="card-inner">
    <h2>VOLTAGE</h2>
    <p>DANGER: HIGH FREQUENCY</p>
    <div class="cardbox">SYSTEM ACTIVE</div>
  </div>
</div>
```

The visible recording shows this HTML structure and its text clearly. The full CSS source is not legible in the short recording. The electric border is therefore recreated with a rotating `conic-gradient`, blurred glow layers and CSS animation. It is a runnable visual recreation, not the original source stylesheet.

## Project files
- `index.html` — demo structure and code panel
- `style.css` — dark card, cyan electric border, glow and rotation
- `script.js` — pause/resume, speed control and copy HTML
- `README.md` — extraction notes and run instructions

## Run locally
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Open `index.html` in a browser or run with Live Server.
4. Use **Pause effect** to stop the electric border.
5. Adjust **Electric speed** to change the rotation duration.
6. Click **Copy HTML** to copy the visible HTML structure.

No npm packages or external libraries are required.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
