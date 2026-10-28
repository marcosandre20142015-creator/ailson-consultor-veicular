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

function enviarCotacaoWhatsApp(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const veiculo = document.getElementById('veiculo').value;
    const ano = document.getElementById('ano').value;
    const tipo = document.getElementById('tipo').value;

    const telefone = "5583996428510"; // WhatsApp do Ailson

    const mensagem = `Olá, Ailson! Gostaria de fazer uma cotação de proteção veicular:%0A%0A` +
        `👤 *Nome:* ${encodeURIComponent(nome)}%0A` +
        `🚗 *Veículo:* ${encodeURIComponent(veiculo)}%0A` +
        `📅 *Ano:* ${encodeURIComponent(ano)}%0A` +
        `📋 *Uso:* ${encodeURIComponent(tipo)}`;

    window.open(`https://wa.me/${telefone}?text=${mensagem}`, '_blank');
}

// --- CARROSSEL DE ASSOCIADOS FUNCIONAL ---
window.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('associatesCarousel');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (carousel && nextBtn && prevBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      carousel.scrollBy({ left: 370, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      carousel.scrollBy({ left: -370, behavior: 'smooth' });
    });
  }
});