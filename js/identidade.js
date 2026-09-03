document.addEventListener("DOMContentLoaded", function () {
    const el = document.querySelector(".slogan");
    if (!el) return;

    // allow custom phrases via data-slogans="Frase1|Frase2|Frase3"
    const fromData = el.dataset.slogans;
    const defaultText = el.textContent.trim();
    const slogans = fromData
        ? fromData.split("|").map(s => s.trim()).filter(Boolean)
        : [
            defaultText,
            "Aprendendo juntos, construindo o futuro.",
            "Criatividade em cada commit.",
            "Do design ao deploy: entregamos valor."
        ];

    el.textContent = "";
    el.classList.add("typing");

    let phraseIndex = 0;
    let charIndex = 0;

    const typingSpeed = 40;
    const deletingSpeed = 25;
    const pauseBetween = 1600;
    const initialDelay = 300;

    function type() {
        const current = slogans[phraseIndex];
        if (charIndex < current.length) {
            charIndex++;
            el.textContent = current.slice(0, charIndex);
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, pauseBetween);
        }
    }

    function erase() {
        const current = slogans[phraseIndex];
        if (charIndex > 0) {
            charIndex--;
            el.textContent = current.slice(0, charIndex);
            setTimeout(erase, deletingSpeed);
        } else {
            phraseIndex = (phraseIndex + 1) % slogans.length;
            setTimeout(type, 300);
        }
    }

    setTimeout(type, initialDelay);
});
