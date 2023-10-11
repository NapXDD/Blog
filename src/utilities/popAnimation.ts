interface pos {
  x: number;
  y: number;
  id: number;
}

const width = window.innerWidth;
const height = window.innerHeight;

let elapsed = 0;
const duration = 3000;
let frame = 0;
let start = -100;
let velocity = 1500 / 100;

const screenPos = {
  top: {
    id: 1,
    length: width,
  },
  right: {
    id: 2,
    length: height,
  },
  bottom: {
    id: 3,
    length: width,
  },
  left: {
    id: 4,
    length: height,
  },
};

let popAnimation = setInterval(() => {}, 0);
const object = document.querySelector(".lmao");

const animation = (pos: pos) => {
  elapsed += 1000 / 60;

  if (elapsed < duration) {
    console.log(`pop frame ${frame}`);
    switch (pos.id) {
      case 2:
      case 3:
      case 4:
      case 1: {
        if (frame <= 89) {
          object.style.left = `${start + velocity}px`;
          object.style.top = `100px`;
          start += velocity;
        } else if (frame > 89) {
          object.style.left = `${start - velocity}px`;
          object.style.top = `100px`;
          start -= velocity;
        }
      }
    }
    frame++;
  } else if (elapsed >= duration) {
    clearInterval(popAnimation);
    elapsed = 0;
    frame = 0;
    object.style.left = `-100%`;
    object.style.top = `-100%`;
  }
};

const spawnFuntion = () => {
  const randomNumber = Math.floor(Math.random() * 4) + 1;
  switch (randomNumber) {
    case 1: {
      const randomLength =
        Math.floor(Math.random() * screenPos.top.length - 10) + 10;
      const pos = { x: randomLength, y: 0, id: randomNumber };
      popAnimation = setInterval(() => animation(pos), 1000 / 60);
      break;
    }
    case 3: {
      const randomLength = Math.floor(Math.random() * width - 10) + 10;
      const pos = { x: randomLength, y: height, id: randomNumber };
      popAnimation = setInterval(() => animation(pos), 1000 / 60);
      break;
    }
    case 2: {
      const randomLength =
        Math.floor(Math.random() * screenPos.right.length - 10) + 10;
      const pos = { x: width, y: randomLength, id: randomNumber };
      popAnimation = setInterval(() => animation(pos), 1000 / 60);
      break;
    }
    case 4: {
      const randomLength =
        Math.floor(Math.random() * screenPos.left.length - 10) + 10;
      const pos = { x: 0, y: randomLength, id: randomNumber };
      popAnimation = setInterval(() => animation(pos), 1000 / 60);
      break;
    }
  }
};

setInterval(() => spawnFuntion(), 7000);
