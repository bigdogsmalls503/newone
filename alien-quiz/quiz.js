
// Save answers and tally archetypes
const MAP = {
  "Zorgon-5": "Scaldrak",
  "Nebulon Prime": "Nebulor",
  "Kelp-77": "Crysalin",
  "Xarthos": "Mechari",
  "Slimy": "Scaldrak",
  "Crystalline": "Crysalin",
  "Scaly": "Scaldrak",
  "Metallic": "Mechari",
  "Plasma painting": "Mechari",
  "Meteor surfing": "Nebulor",
  "Comet chasing": "Nebulor",
  "Moon cheese sculpting": "Crysalin",
  "Telepathy": "Crysalin",
  "Scent signals": "Scaldrak",
  "Tentacle gestures": "Scaldrak",
  "Laser chirps": "Mechari",
  "Miniature black hole": "Nebulor",
  "Slime lizard": "Scaldrak",
  "Void cat": "Crysalin",
  "Quantum hamster": "Mechari",
  "Astro noodles": "Nebulor",
  "Nebula puffs": "Nebulor",
  "Frozen comet juice": "Crysalin",
  "Galaxy gummies": "Mechari",
  "Triangular": "Mechari",
  "Orb-shaped": "Nebulor",
  "Cube": "Mechari",
  "Wavy blob": "Scaldrak",
  "Photon slingshot": "Nebulor",
  "Anti-gravity whip": "Mechari",
  "Neutron blade": "Scaldrak",
  "Telekinetic boomerang": "Crysalin",
  "Wormhole surfing": "Nebulor",
  "Star-skating": "Nebulor",
  "Cosmic scooter": "Mechari",
  "Warp bubbles": "Crysalin",
  "GRZZZT!": "Mechari",
  "Whooooop!": "Nebulor",
  "YAK-YAK!": "Scaldrak",
  "FZZZ-BOOM!": "Crysalin"
};

function saveAnswer(e, key, nextPage) {
  e.preventDefault();
  const form = e.target;
  const value = form.querySelector('input[name="answer"]:checked')?.value;
  if (!value) return;

  // Persist selected answers
  const answers = JSON.parse(localStorage.getItem('alien_answers') || '{}');
  answers[key] = value;
  localStorage.setItem('alien_answers', JSON.stringify(answers));

  // Tally archetypes
  const tallies = JSON.parse(localStorage.getItem('alien_tally') || '{}');
  const archetype = MAP[value];
  if (archetype) {
    tallies[archetype] = (tallies[archetype] || 0) + 1;
  }
  localStorage.setItem('alien_tally', JSON.stringify(tallies));

  // Navigate
  window.location.href = nextPage;
}

function computeResult() {
  const tallies = JSON.parse(localStorage.getItem('alien_tally') || '{}');
  const entries = Object.entries(tallies);
  if (entries.length === 0) return null;
  entries.sort((a,b) => b[1]-a[1]);
  return entries[0][0]; // top archetype
}

function resetQuiz() {
  localStorage.removeItem('alien_answers');
  localStorage.removeItem('alien_tally');
}
