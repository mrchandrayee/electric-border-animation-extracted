const card = document.getElementById("electricCard");
const toggleButton = document.getElementById("toggleButton");
const speedControl = document.getElementById("speedControl");
const speedValue = document.getElementById("speedValue");
const copyButton = document.getElementById("copyButton");
const htmlCode = document.getElementById("htmlCode");

let isRunning = true;

toggleButton.addEventListener("click", () => {
  isRunning = !isRunning;
  card.classList.toggle("paused", !isRunning);
  toggleButton.textContent = isRunning ? "Pause effect" : "Resume effect";
  toggleButton.setAttribute("aria-pressed", String(isRunning));
});

speedControl.addEventListener("input", () => {
  const seconds = Number(speedControl.value);
  document.documentElement.style.setProperty("--electric-speed", `${seconds}s`);
  speedValue.value = `${seconds}s`;
});

card.addEventListener("pointerenter", () => {
  card.style.setProperty("--hover-glow", "1");
  card.style.filter = "brightness(1.15)";
});
card.addEventListener("pointerleave", () => {
  card.style.filter = "none";
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(htmlCode.textContent);
    copyButton.textContent = "Copied!";
  } catch {
    copyButton.textContent = "Copy unavailable";
  }
  window.setTimeout(() => { copyButton.textContent = "Copy HTML"; }, 1300);
});
