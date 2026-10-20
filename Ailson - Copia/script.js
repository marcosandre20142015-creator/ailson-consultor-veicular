// Menu Mobile
const mobileBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Fechar menu mobile ao clicar em um link
document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Accordion FAQ
document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentElement;
    parent.classList.toggle('active');
  });
});

// Envio para WhatsApp
document.getElementById('cotacaoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nome = document.getElementById('nome').value;
  const tipo = document.getElementById('tipo').value;
  const modelo = document.getElementById('modelo').value;
  const telefoneWhatsApp = '5583996376499';

  const mensagem = `Olá Ailson! Gostaria de fazer uma cotação:%0A%0A` +
                   `👤 *Nome:* ${nome}%0A` +
                   `🚗 *Tipo:* ${tipo}%0A` +
                   `🚘 *Modelo/Ano:* ${modelo}`;

  window.open(`https://wa.me/${telefoneWhatsApp}?text=${mensagem}`, '_blank');
});