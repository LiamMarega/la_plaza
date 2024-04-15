import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

ScrollTrigger.create({
  animation: tl,
  trigger: '#main_home',
  start: '0% top',
  pin: true,
  scrub: 0.5,
  end: '+=30%',
});

tl.from('#twitch-embed', {
  yPercent: 40, // Ajustado a 0 para mantener el elemento centrado
  opacity: 0.7,
  //   marginLeft: '18vw',
  width: '70vw',
  scale: 0.7,
  delay: 0.5,
  ease: 'none',
});
tl.from('#twitch-chat', {
  yPercent: 40, // Ajustado a 0 para mantener el elemento centrado
  display: 'none',
  scale: 0.7,
  duration: 0.5,

  ease: 'none',
});
