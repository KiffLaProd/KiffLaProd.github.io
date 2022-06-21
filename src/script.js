const sr = ScrollReveal();

sr.reveal(".imagehead", {
  origin: "left",
  scale: "0.5",
  distance: "500px",
  duration: 2000,
  opacity: 0.2,
});
sr.reveal(".imageheadanim", {
  origin: "right",
  scale: "0.5",
  distance: "500px",
  duration: 2000,
  opacity: 0.2,
});

$(".brand-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

console.log(openModalButtons);

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.className[button.className.length - 3]);
    if (button.className[button.className.length - 2] === "b") {
      let modalvar = ".m" + button.className[button.className.length - 1];
      let modal = document.querySelector("" + modalvar + "");
      modal.classList.add("active");
      overlay.classList.add("active");
    } else {
      let modalvar = ".m1" + button.className[button.className.length - 1];
      let modal = document.querySelector("" + modalvar + "");
      modal.classList.add("active");
      overlay.classList.add("active");
    }
  });
});
closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

const btn = document.querySelector("#btn");
const btnText = document.querySelector("#btnText");

btn.onclick = () => {
  btnText.innerHTML = "Merci";
  btn.classList.add("active");
};
