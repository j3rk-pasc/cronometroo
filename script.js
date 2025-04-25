let intervalo;

function iniciarCronometro() {
    clearInterval(intervalo);
    const dataFutura = new Date("2025-12-19T23:59:59");

    intervalo = setInterval(() => {
        const agora = new Date();
        const diferenca = dataFutura - agora;

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        document.getElementById('timer').textContent = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
    }, 100);
}

iniciarCronometro();