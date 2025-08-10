/* script.js
   Funcionalidades do hub pessoal: troca de tema, colapsar seções e fato aleatório.
*/

// Recupera tema salvo ou usa dark como padrão
const body = document.body;
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.className = savedTheme;
}

// Alterna entre temas claro/escuro
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light');
        body.classList.toggle('dark');
        localStorage.setItem('theme', body.className);
    });
}

// Botões de ver/ocultar das seções
const toggleButtons = document.querySelectorAll('.toggle-btn');
toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const cards = btn.parentElement.nextElementSibling;
        cards.classList.toggle('hidden');
        btn.textContent = cards.classList.contains('hidden') ? 'Ver' : 'Ocultar';
    });
});

// Array com fatos aleatórios
const facts = [
    'Os polvos têm três corações.',
    'O mel nunca estraga.',
    'Bananas são frutos do tipo baga.',
    'A Torre Eiffel pode ser 15 cm mais alta no verão.',
    'O nariz humano pode distinguir mais de um trilhão de odores.'
];

// Exibe um fato aleatório
const factText = document.getElementById('fato-text');
if (factText) {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factText.textContent = facts[randomIndex];
}

// Ano atual no rodapé
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
