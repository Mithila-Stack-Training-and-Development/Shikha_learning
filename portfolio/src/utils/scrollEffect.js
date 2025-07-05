export const revealOnScroll = () => {
  const reveals = document.querySelectorAll('.reveal');
  for (const reveal of reveals) {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('visible');
    } else {
      reveal.classList.remove('visible');
    }
  }
};
