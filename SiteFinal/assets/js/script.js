function scrollToSectionServicos() {
    const section = document.getElementById('servicos');
    const sectionPosition = section.offsetTop;
  
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth' // Rola suavemente para a seção
    });
  }


  function scrollToSectionContatos() {
    const section = document.getElementById('contatos');
    const sectionPosition = section.offsetTop;
  
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth' // Rola suavemente para a seção
    });
  }

  function mostrarAlerta() {
    alert('Sua mensaagem foi enviada com sucesso!');
    alert('Iremos te responder o mais breve posssivel!');
  }
  
  function mostrarAlertaPortfolio() {
    alert('Nosso portfólio estará disponivel em breve!');

  }
