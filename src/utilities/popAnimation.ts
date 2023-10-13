interface pos {
  x: number;
  y: number;
  id: number;
  start: number;
}

let width = window.innerWidth;
let height = window.innerHeight;

let elapsed = 0;
const duration = 1000;
const halfFrame = ((duration / 1000) * 60) / 2;
const fullFrame = (duration / 1000) * 60;
let frame = 0;
let velocity = 95 / halfFrame;
const spawnDuration = 4000;

let popAnimation = setInterval(() => {}, 0);
const object = document.querySelector<HTMLElement>(".lmao");

const animation = (pos: pos) => {
  elapsed += 1000 / 60;
  if (elapsed < duration) {
    switch (pos.id) {
      case 1: {
        if (frame <= halfFrame) {
          if (object) {
            object.style.left = `${pos.x}px`;
            object.style.top = `${pos.start + velocity}px`;
            pos.start += velocity;
          }
        } else if (frame > halfFrame) {
          if (object) {
            object.style.left = `${pos.x}px`;
            object.style.top = `${pos.start - velocity}px`;
            pos.start -= velocity;
          }
        }
        break;
      }
      case 2: {
        if (frame <= halfFrame) {
          if (object) {
            object.style.top = `${pos.y}px`;
            object.style.left = `${pos.start - velocity}px`;
            pos.start -= velocity;
          }
        } else if (frame > halfFrame && frame < 180) {
          if (object) {
            object.style.left = `${pos.start + velocity}px`;
            object.style.top = `${pos.y}px`;
            pos.start += velocity;
          }
        }
        break;
      }
      case 3: {
        if (frame <= halfFrame) {
          if (object) {
            object.style.left = `${pos.x}px`;
            object.style.top = `${pos.start - velocity}px`;
            pos.start -= velocity;
          }
        } else if (frame > halfFrame && frame < fullFrame) {
          if (object) {
            object.style.left = `${pos.x}px`;
            object.style.top = `${pos.start + velocity}px`;
            pos.start += velocity;
          }
        }
        break;
      }
      case 4: {
        if (frame <= halfFrame) {
          if (object) {
            object.style.left = `${pos.start + velocity}px`;
            object.style.top = `${pos.y}px`;
            pos.start += velocity;
          }
        } else if (frame > halfFrame) {
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
  let width = window.innerWidth;
  let height = window.innerHeight;
  const randomNumber = Math.floor(Math.random() * 4) + 1;
  switch (randomNumber) {
    case 1: {
      const randomLength = Math.floor(Math.random() * (width - 300)) + 300;
      const pos = {
        x: randomLength,
        y: 0,
        id: randomNumber,
        start: -100,
      };
      popAnimation = setInterval(() => animation(pos), 1000 / 60);
      break;
    }
    case 2: {
      const randomLength = Math.floor(Math.random() * (height - 300)) + 300;
      const pos = {
        x: width,
        y: randomLength,
        id: randomNumber,
        start: width,
      };
      popAnimation = setInterval(() => animation(pos), 1000 / 60);
      break;
    }
    case 3: {
      const randomLength = Math.floor(Math.random() * (width - 300)) + 300;
      const pos = {
        x: randomLength,
        y: height,
        id: randomNumber,
        start: height,
      };
      popAnimation = setInterval(() => animation(pos), 1000 / 60);
      break;
    }

    case 4: {
      const randomLength = Math.floor(Math.random() * (height - 300)) + 300;
      const pos = {
        x: 0,
        y: randomLength,
        id: randomNumber,
        start: -100,
      };
      popAnimation = setInterval(() => animation(pos), 1000 / 60);
      break;
    }
  }
};

spawnFuntion();
setInterval(() => spawnFuntion(), spawnDuration);
