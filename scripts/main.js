// SCROLL TO TOP
document.addEventListener("DOMContentLoaded", function (event) {

    const button = document.querySelector('#back-to-top');

    button.addEventListener('click', function () {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY < 200) {
            button.style.opacity = "0";
        } else {
            button.style.opacity = "1";
        }
    });

});

// Toast za poslatu poruku u kontakt formi
const toastMsg = document.querySelector('.toast')

function toast() {
    toastMsg.classList.replace('hide', 'show')
    setTimeout(() => {
        toastMsg.classList.replace('show', 'hide')

    }, 2000);
}

// Reset kontakt forme i modal kontakt forme
const kontaktForma = document.querySelector("#form-contact")
const kontaktFormaBtn = document.querySelector('.send-dugme')
if (kontaktForma) {
    kontaktForma.addEventListener('submit', toast)
    kontaktForma.addEventListener('submit', resetForm)
}

function resetForm() {
    setTimeout(() => {
        kontaktForma.reset();
    }, 1000);
}
// Racuna visinu navigacije
function countNavSize() {
    let nav = document.querySelector(".navbar");
    let navSize = nav.offsetHeight;
    scrollSpyOffset(navSize);
    scrollNavOffset(navSize);
}

function scrollSpyOffset(navSize) {
    const body = document.querySelector("body");
    body.setAttribute("data-bs-offset", `${navSize}`);
}

function scrollNavOffset(navSize) {
    const html = document.querySelector("html");
    html.style.scrollPaddingTop = `${navSize - 1}px`;
}
countNavSize();
