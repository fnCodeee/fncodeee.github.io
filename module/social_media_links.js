import social_media from "../api/socialMediaDatas.js";

const typed = new Typed(".typed-text", {
  strings: [
    "Server Side Web Apps",
    "Interactive Web Apps",
    "IoT project",
    "Cool UIs with Tailwind",
    "Backend with Node.js",
  ],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  loop: true,
});

const links = document.getElementById("link__");

for (let i = 0; i < social_media.length; i++) {
  const a = document.createElement("a");
  a.href = social_media[i].link;
  a.target = "_blank";

  a.innerHTML = social_media[i].code;
  links.appendChild(a);
}
