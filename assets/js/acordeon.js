
const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

acordeonTriggers.forEach((trigger) => {
    const acordeon = trigger.parentElement;

    // Alterna ao clicar no botão ou no ícone dentro dele
    trigger.addEventListener('click', (event) => {
        // Garante que clique no ícone também funcione
        if (event.target === trigger || trigger.contains(event.target)) {
            acordeon.classList.toggle('open');
        }
    });

    // Alterna ao clicar em qualquer parte do acordeon quando estiver aberto
    acordeon.addEventListener('click', (event) => {
        if (acordeon.classList.contains('open') && !trigger.contains(event.target)) {
            acordeon.classList.remove('open');
        }
    });
});


       