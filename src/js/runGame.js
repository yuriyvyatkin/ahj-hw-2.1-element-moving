export default function runGame() {
  const holesNumber = 16;
  let remainingHoles = holesNumber;
  let activeHoleIndex = 1;

  const getHole = (index) => document.getElementById(`hole${index}`);
  const deactivateHole = (index) => {
    const activeHole = getHole(index);
    activeHole.className = 'hole';
    activeHole.dataset.visited = 'true';
    remainingHoles -= 1;
  };
  const activateHole = () => {
    activeHoleIndex = Math.floor(1 + Math.random() * holesNumber);
    const activeHole = getHole(activeHoleIndex);
    if (activeHole.dataset.visited === 'true') {
      activateHole();
    } else {
      activeHole.className = 'hole hole_has-mole';
    }
  };

  setInterval(() => {
    deactivateHole(activeHoleIndex);
    if (remainingHoles < 1) {
      return;
    }
    activateHole();
  }, 400);
}
