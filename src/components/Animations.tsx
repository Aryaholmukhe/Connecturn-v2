// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);


// const Animations = () => {
//     const canvasRef = useRef(null);
//     const images = [];
  
//     useEffect(() => {
//       const canvas = canvasRef.current;
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       const context = canvas.getContext('2d');
//       const frameCount = 179;
  
//       const currentFrame = (index) => `/blenderImg/${(index + 1).toString()}.jpg`;
  
//       let ball = { frame: 0 };
  
//       for (let i = 0; i < frameCount; i++) {
//         const img = new Image();
//         img.src = currentFrame(i);
//         images.push(img);
//       }
  
//       gsap.to(ball, {
//         frame: frameCount - 1,
//         snap: 'frame',
//         ease: 'none',
//         scrollTrigger: {
//           scrub: 0.01,
//           pin: canvas,
//           end: '500%',
//         },
//         onUpdate: render,
//       });
  
//       let tl = gsap.timeline({
//         scrollTrigger: {
//           start: 'top',
//           end: '+=500%',
//           scrub: 1,
//         },
//       });
  
//       const texts = gsap.utils.toArray('.title');
//       texts.forEach((text, index) => {
//         tl.from(text, { autoAlpha: 0, duration: 2 }).to(text, { autoAlpha: 0, duration: 2 }, '>+=1');
//       });
  
//       canvas.onloadedmetadata = function () {
//         tl.to(canvas, { currentTime: canvas.duration, duration: () => tl.duration() }, 0);
//       };
  
//       gsap.to('.scroll-info', {
//         scrollTrigger: {
//           trigger: '.scroll-info',
//           scrub: true,
//           start: 'bottom 80%',
//           end: 'bottom 70%',
//         },
//         opacity: 0,
//       });
  
//       // Add more animations as needed...
  
//       images[0].onload = render;
  
//       function render() {
//         context.canvas.width = images[0].width;
//         context.canvas.height = images[0].height;
  
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         context.drawImage(images[ball.frame], 0, 0);
//       }
//     }, []);
  
//     return <canvas ref={canvasRef} className="canvas" />;
//   };
  
//   export default Animations;
  