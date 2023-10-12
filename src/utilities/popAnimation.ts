interface pos {
  x: number;
  y: number;
  id: number;
  start: number;
}

let width = window.innerWidth;
let height = window.innerHeight;

document.addEventListener("scroll", () => {
  width = window.innerWidth;
  height = window.innerHeight;
});

let elapsed = 0;
const duration = 3000;
let frame = 0;
let velocity = 100 / 90;

const screenPos = {
  top: {
    id: 1,
    length: width,
    start: -100,
  },
  right: {
    id: 2,
    length: height,
    start: width,
  },
  bottom: {
    id: 3,
    length: width,
    start: height,
  },
  left: {
    id: 4,
    length: height,
    start: -100,
  },
};

let popAnimation = setInterval(() => {}, 0);
const object = document.querySelector<HTMLElement>(".lmao");

const animation = (pos: pos) => {
  elapsed += 1000 / 60;
  if (elapsed < duration) {
    switch (pos.id) {
      case 1: {
        if (frame <= 89) {
          if (object) {
            object.style.left = `${pos.x}px`;
            object.style.top = `${pos.start + velocity}px`;
            pos.start += velocity;
          }
        } else if (frame > 89) {
          if (object) {
            object.style.left = `${pos.x}px`;
            object.style.top = `${pos.start - velocity}px`;
            pos.start -= velocity;
          }
        }
        break;
      }
      case 2: {
        if (frame <= 89) {
          if (object) {
            object.style.top = `${pos.y}px`;
            object.style.left = `${pos.start - velocity}px`;
            pos.start -= velocity;
          }
        } else if (frame > 89 && frame < 180) {
          if (object) {
            object.style.left = `${pos.start + velocity}px`;
            object.style.top = `${pos.y}px`;
            pos.start += velocity;
          }
        }
        break;
      }
      case 3: {
        if (frame <= 89) {
          if (object) {
            object.style.left = `${pos.x}px`;
            object.style.top = `${pos.start - velocity}px`;
            pos.start -= velocity;
          }
        } else if (frame > 89 && frame < 180) {
          if (object) {
            object.style.left = `${pos.x}px`;
            object.style.top = `${pos.start + velocity}px`;
            pos.start += velocity;
          }
        }
        break;
      }
      case 4: {
        if (frame <= 89) {
          if (object) {
            object.style.left = `${pos.start + velocity}px`;
            object.style.top = `${pos.y}px`;
            pos.start += velocity;
          }
        } else if (frame > 89) {
          if (object) {
            object.style.left = `${pos.start - velocity}px`;
            object.style.top = `${pos.y}px`;
            pos.start -= velocity;
          }
        }
        break;
      }
    }
    frame++;
  } else if (elapsed >= duration) {
    clearInterval(popAnimation);
    elapsed = 0;
    frame = 0;
    if (object) {
      object.style.left = `-100%`;
      object.style.top = `-100%`;
    }
  }
};

const spawnFuntion = () => {
  const randomNumber = Math.floor(Math.random() * 4) + 1;
  switch (randomNumber) {
    case 1: {
      const randomLength = Math.floor(Math.random() * width - 300) + 300;
      const pos = {
        x: randomLength,
        y: 0,
        id: randomNumber,
        start: screenPos.top.start,
      };
      popAnimation = setInterval(() => animation(pos), 1000 / 60);
      break;
    }
    case 2: {
      const randomLength = Math.floor(Math.random() * height - 300) + 300;
      const pos = {
        x: width,
        y: randomLength,
        id: randomNumber,
        start: screenPos.right.start,
      };
      popAnimation = setInterval(() => animation(pos), 1000 / 60);
      break;
    }
    case 3: {
      const randomLength = Math.floor(Math.random() * width - 300) + 300;
      const pos = {
        x: randomLength,
        y: height,
        id: randomNumber,
        start: screenPos.bottom.start,
      };
      popAnimation = setInterval(() => animation(pos), 1000 / 60);
      break;
    }

    case 4: {
      const randomLength = Math.floor(Math.random() * height - 300) + 300;
      const pos = {
        x: 0,
        y: randomLength,
        id: randomNumber,
        start: screenPos.left.start,
      };
      popAnimation = setInterval(() => animation(pos), 1000 / 60);
      break;
    }
  }
};

spawnFuntion();
setInterval(() => spawnFuntion(), 5000);
