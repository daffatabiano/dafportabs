import { backend, creator, mobile, web } from "../assets";

const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "UI/UX Designer",
      icon: web,
    },
    {
      title: "Problem Solver",
      icon: mobile,
    },
    {
      title: "Website Designer",
      icon: backend,
    },
    {
      title: "Wordpress Developer",
      icon: creator,
    },
  ];

  export { navLinks, services };