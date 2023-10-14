import { elysia1, elysia2, elysia3, griseo1 } from "./ImageImport";

const changeRotation = (id: number, objElement: HTMLElement | null) => {
  switch (id) {
    case 1: {
      objElement?.classList.remove("rotateRight");
      objElement?.classList.remove("rotateLeft");
      objElement?.classList.add("rotateTop");
      break;
    }
    case 2: {
      objElement?.classList.remove("rotateLeft");
      objElement?.classList.remove("rotateTop");
      objElement?.classList.add("rotateRight");
      break;
    }
    case 3: {
      objElement?.classList.remove("rotateRight");
      objElement?.classList.remove("rotateLeft");
      objElement?.classList.remove("rotateTop");
      break;
    }
    case 4: {
      objElement?.classList.remove("rotateRight");
      objElement?.classList.remove("rotateTop");
      objElement?.classList.add("rotateLeft");
      break;
    }
    default: {
      objElement?.classList.remove("rotateRight");
      objElement?.classList.remove("rotateLeft");
      objElement?.classList.remove("rotateTop");
      break;
    }
  }
};

export const randomObj = (edgeId: number, objElement: HTMLImageElement) => {
  const randomNumber = Math.floor(Math.random() * 4) + 1;

  switch (randomNumber) {
    case 1: {
      objElement.src = elysia1;
      changeRotation(edgeId, objElement);
      break;
    }
    case 2: {
      objElement.src = elysia2;
      changeRotation(edgeId, objElement);
      break;
    }
    case 3: {
      objElement.src = elysia3;
      changeRotation(edgeId, objElement);
      break;
    }
    case 4: {
      objElement.src = griseo1;
      changeRotation(edgeId, objElement);
      break;
    }
  }
};
