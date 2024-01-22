//-------------- CANVAS OBJECT --------------//
const addBg = () => {
  const canvas = document.getElementById("js-bg-animation");
  const ctx = canvas.getContext("2d");
  ctx.globalCompositeOperation = "lighter";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = ['#f1a60f', '#b05318', '#b4d5e4', '#224c62'];
  function generateRandomGradient() {
    const dimension = Math.random() * 100;
    return {
      x: Math.abs(Math.random() * canvas.width - dimension),
      y: Math.random() * canvas.height,
      color: colors[Math.floor(Math.random() * 4)],
      dimension: dimension,
      speedX: (Math.random() - 0.5) * 2, // Random horizontal speed
      speedY: (Math.random() - 0.5) * 2 // Random vertical speed
    };
  }

  const gradients = [];
  // Create initial gradients
  for (let i = 0; i < 70; i++) {
    gradients.push(generateRandomGradient());
  }

  //-------------- ANIMATION PING PONG SQUARES --------------//

  function animation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const gradient of gradients) {
      gradient.x += gradient.speedX;
      gradient.y += gradient.speedY;

      if (gradient.x < 0) {
        gradient.speedX *= -1;
      }

       if (gradient.x > canvas.width - (gradient.dimension)) {
        gradient.speedX *= -1;
      }

      if (gradient.y < 0 || gradient.y > canvas.height) {
        gradient.speedY *= -1;
      }

      const color = `${gradient.color}`;


      ctx.fillStyle = color;

      ctx.fillRect(
        gradient.x,
        gradient.y,
        gradient.dimension,
        gradient.dimension
      ); // Adjust size as needed
    }
    requestAnimationFrame(animation);
  }

  animation();
}

export default addBg;
