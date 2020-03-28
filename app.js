function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const avatar = document.querySelector("#player");

window.addEventListener("keyup", function(e) {
  if (e.key === "ArrowDown" || e.key === "Down") {
    const currTop = extractPosition(avatar.style.top);
    console.log(avatar.style.top);
    avatar.style.top = `${currTop + 50}px`;
    console.log(avatar.style.top);
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    console.log(avatar.style.top);
    const currTop = extractPosition(avatar.style.top);
    console.log(avatar.style.top);
    avatar.style.top = `${currTop - 50}px`;
  } else if (e.key === "ArrowRight" || e.key === "Right") {
    console.log(avatar.style.left);
    const currLeft = extractPosition(avatar.style.left);
    console.log(avatar.style.left);
    avatar.style.left = `${currLeft + 50}px`;
    avatar.style.transform = "scale(1,1)";
  } else if (e.key === "ArrowLeft" || e.key === "Left") {
    console.log(avatar.style.left);
    const currLeft = extractPosition(avatar.style.left);
    console.log(avatar.style.left);
    avatar.style.left = `${currLeft - 50}px`;
    avatar.style.transform = "scale(-1,1)";
  }
});

const extractPosition = position => {
  if (!position) return 100;
  return parseInt(position.slice(0, -2));
};
