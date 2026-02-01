const cards = {
  telegram: document.getElementById('card3d'),
  github: document.getElementById('card-github'),
  vk: document.getElementById('card-vk')
};

const rotationSettings = {
  telegram: { rotY: 28, rotX: 22, z: 40, speed: 1.0 },
  github:   { rotY: 25, rotX: 25, z: 38, speed: 1.1 },
  vk:       { rotY: 22, rotX: 30, z: 35, speed: 0.85 }
};

function updateCards(e) {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  let mouseX = (e.clientX - centerX) / centerX;
  let mouseY = (centerY - e.clientY) / centerY;

  Object.entries(cards).forEach(([key, card]) => {
    if (!card) return;

    const settings = rotationSettings[key];

    const rotY = mouseX * settings.rotY;
    const rotX = mouseY * settings.rotX;

    card.style.transform = `
      rotateX(${rotX}deg)
      rotateY(${rotY}deg)
      translateZ(${settings.z}px)
      scale(${1 + Math.abs(mouseX * mouseY) * 0.08})
    `;
  });
}

document.addEventListener('mousemove', updateCards);

document.addEventListener('mouseleave', () => {
  Object.values(cards).forEach(card => {
    if (card) {
      card.style.transform = `
        rotateX(0deg)
        rotateY(0deg)
        translateZ(0px)
        scale(1)
      `;
    }
  });
});
