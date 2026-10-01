import type { Profile } from "@/types/portfolio";
// TODO: replace placeholder contact details.
export const profile: Profile = { name:"Aby Adinthya", role:"Full-Stack Developer", email:"adinthyaaby@gmail.com", cvUrl:"/cv.pdf", // TODO: put your CV at public/cv.pdf (or remove cvUrl)
 
  links:[{label:"GitHub",href:"https://github.com/Abyyy123"},{label:"LinkedIn",href:"https://linkedin.com/in/aby-adinthya"}, {label:"Instagram",href:"https://instagram.com/obsycraaaa"}] };
export const nav = ["home","about","projects","skills","journey","contact"] as const;
