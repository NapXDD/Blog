let w: Worker | undefined;

function startWorker() {
  if (typeof Worker === "undefined") {
    if (typeof w === "undefined") {
      w = new Worker("popAnimation.js");
    }
  }
}

startWorker();
