interface pos {
  x: number;
  y: number;
  id: number;
  start: number;
}

const width = window.innerWidth;
const height = window.innerHeight;

let elapsed = 0;
const duration = 3000;
let frame = 0;
let start = 100;
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
    start: 100,
  },
  left: {
    id: 4,
    length: height,
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
            object.style.left = `${width - velocity}px`;
            object.style.top = `${pos.y}px`;
            start -= velocity;
          }
        } else if (frame > 89) {
          if (object) {
            object.style.left = `${width + velocity}px`;
            object.style.top = `${pos.y}px`;
            start += velocity;
          }
        }
      }
      // case 3: {
      //   if (frame <= 89) {
      //     if (object) {
      //       object.style.left = `${pos.x}}px`;
      //       object.style.top = `${height + start - velocity}px`;
      //       start -= velocity;
      //     }
      //   } else if (frame > 89) {
      //     if (object) {
      //       object.style.left = `${pos.x}px`;
      //       object.style.top = `${height + start + velocity}px`;
      //       start -= velocity;
      //     }
      //   }
      // }
      // case 4: {
      //   if (frame <= 89) {
      //     if (object) {
      //       object.style.left = `${start + velocity}px`;
      //       object.style.top = `${pos.y}px`;
      //       start += velocity;
      //     }
      //   } else if (frame > 89) {
      //     if (object) {
      //       object.style.left = `${start - velocity}px`;
      //       object.style.top = `${pos.y}px`;
      //       start -= velocity;
      //     }
      //   }
      // }
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
  const randomNumber = Math.floor(Math.random() * 1) + 2;
  switch (randomNumber) {
    case 1: {
      const randomLength = Math.floor(Math.random() * width - 30) + 30;
      const pos = {
        x: randomLength,
        y: 0,
        id: randomNumber,
        start: screenPos.top.start,
      };
      popAnimation = setInterval(() => animation(pos), 1000 / 60);
      break;
    }
    case 3: {
      const randomLength = Math.floor(Math.random() * width - 10) + 10;
      const pos = {
        x: randomLength,
        y: height,
        id: randomNumber,
        start: screenPos.bottom.start,
      };
      popAnimation = setInterval(() => animation(pos), 1000 / 60);
      break;
    }
    case 2: {
      const randomLength = Math.floor(Math.random() * height - 10) + 10;
      const pos = {
        x: width,
        y: randomLength,
        id: randomNumber,
        start: screenPos.right.start,
      };
      popAnimation = setInterval(() => animation(pos), 1000 / 60);
      break;
    }
    case 4: {
      const randomLength =
        Math.floor(Math.random() * screenPos.left.length - 10) + 10;
      const pos = { x: 0, y: randomLength, id: randomNumber, start: -100 };
      popAnimation = setInterval(() => animation(pos), 1000 / 60);
      break;
    }
  }
};

// setInterval(() => spawnFuntion(), 5000);
if (object) {
  object.style.top = `${100}px`;
  object.style.left = `${width}px`;
}
