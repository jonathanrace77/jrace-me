import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const tlTitle = gsap.timeline();
const tlAboutPic = gsap.timeline();
const tlAboutText = gsap.timeline();
const tlSkillBar = gsap.timeline();
const tlProjectsTitle = gsap.timeline();
const tlExtraSkills = gsap.timeline();
const tlContact = gsap.timeline();

var staggerTime = 0.3;

const animations = () => {
  // tlTitle.from("#about-title", {
  //   scrollTrigger: {
  //     trigger: "#about-title",
  //     start: "bottom bottom",
  //     markers: false,
  //   },
  //   opacity: 0,
  //   x: "-50px",
  // });

  // tlAboutPic.from(".jonathan-box-left-gsap", {
  //   scrollTrigger: {
  //     trigger: ".about-jonathan-box-left",
  //     start: "bottom bottom",
  //     markers: false,
  //   },
  //   opacity: 0,
  //   x: "-50px",
  //   stagger: staggerTime,
  // });

  // tlAboutText.from(".about-jonathan-box-right-gsap", {
  //   scrollTrigger: {
  //     trigger: ".about-jonathan-box-left",
  //     start: "bottom bottom",
  //     markers: false,
  //   },
  //   opacity: 0,
  //   y: "50px",
  //   stagger: staggerTime,
  // });

  // tlSkillBar.to(".about-skill-bar-fill-design", {
  //   scrollTrigger: {
  //       trigger: "#experienced-about-skill-box",
  //       start: "center bottom",
  //       markers: false,
  //     },
  //   width: "100%",
  // });

  // tlExtraSkills.from("#extra-tech-skills-gsap", {
  //   scrollTrigger: {
  //     trigger: "#experienced-about-skill-box",
  //     start: "bottom bottom",
  //     markers: false,
  //   },
  //   opacity: 0,
  //   y: "50px",
  // });

  // tlTitle.from("#projects-title", {
  //   scrollTrigger: {
  //     trigger: "#projects-title",
  //     start: "bottom bottom",
  //     markers: false,
  //   },
  //   opacity: 0,
  //   x: "-50px",
  //   ease: "back.out(1.7)"
  // });

  // tlProjectsTitle.from(".project", {
  //   scrollTrigger: {
  //     trigger: "#projects-title",
  //     start: "bottom center",
  //     markers: false,
  //   },
  //   opacity: 0,
  //   y: "50px",
  //   stagger: staggerTime,
  //   ease: "back.out(1.7)"
  // });

  // tlTitle.from("#contact-title", {
  //   scrollTrigger: {
  //     trigger: "#contact-title",
  //     start: "bottom bottom",
  //     markers: false,
  //   },
  //   opacity: 0,
  //   x: "-50px",
  //   ease: "back.out(1.7)"
  // });

  // tlContact.from(".contact-form-gsap", {
  //   scrollTrigger: {
  //     trigger: "#contact-title",
  //     start: "bottom bottom",
  //     markers: false,
  //   },
  //   opacity: 0,
  //   y: "50px",
  //   stagger: staggerTime
  // });
  
  
};

// Exporting the component
export default animations;