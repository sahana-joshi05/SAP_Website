const placementScroller = document.querySelector('#achievementScroller');

if (placementScroller && placementScroller.children.length) {
  const cards = [...placementScroller.children];
  const track = document.createElement('div');
  track.className = 'achievement-track';
  [...cards, ...cards].forEach((card) => track.appendChild(card.cloneNode(true)));
  placementScroller.replaceChildren(track);
}
