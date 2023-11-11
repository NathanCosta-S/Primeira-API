const gerarUmConselho = document.querySelector(".advice-update");
const numeroDoConselho = document.querySelector(".advice-id");
const UmConselho = document.querySelector(".advice-description");

async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await response.json();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    numeroDoConselho.innerHTML = adviceId;
    UmConselho.innerHTML = adviceText;
}

gerarUmConselho.addEventListener("click", getAdvice);

getAdvice();


