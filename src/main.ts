import { waitForElement } from "./utility.ts";

console.log("VideoInfiniteChrome extension loaded.");

waitForElement<HTMLElement>("yt-button-renderer#confirm-button").then((el) => {
  el.click();
  console.log("Confirm button clicked!");

  const grandParent = el.parentElement?.parentElement;
  if (grandParent) {
    grandParent.remove();
    console.log("Grandparent removed!");
  } else {
    console.log("Grandparent not found.");
  }

  const video = document.querySelector<HTMLVideoElement>("video");
  if (video && video.paused) {
    video.play();
    console.log("Video continued!");
  } else {
    console.log("Video not found or already playing.");
  }
});
