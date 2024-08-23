/*window.addEventListener("load", function () {
    let container = document.querySelector(".image-row");
  
    let scrollAmount = 0;
  
    function slideImages() {
      scrollAmount += 2;
      container.scroll(scrollAmount, 0);
      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }
    }
  
    let slideInterval = setInterval(slideImages, 60);
  
    container.addEventListener("mouseenter", function () {
      clearInterval(slideInterval);
    });
  
    container.addEventListener("mouseleave", function () {
      slideInterval = setInterval(slideImages, 50);
    });
  });

  */


/*window.addEventListener("load", function () {
    let container = document.querySelector(".image-row");
  
    let scrollAmount = 0;
  
    function slideImages() {
      scrollAmount += 2;
      container.scroll(scrollAmount, 0);
      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }
    }
  
    let slideInterval = setInterval(slideImages, 60);
  
    container.addEventListener("mouseenter", function () {
      clearInterval(slideInterval);
    });
  
    container.addEventListener("mouseleave", function () {
      slideInterval = setInterval(slideImages, 50);
    });
  });

  */

  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const nomeError = document.getElementById("nome-error");
    const emailError = document.getElementById("email-error");
    const sugestoesTextarea = document.getElementById("sugestoes");
    const sugestoesError = document.getElementById("sugestoes-error");

    function validateNome() {
        const nome = nomeInput.value.trim();
        if (nome === "") {
            nomeError.textContent = "O campo Nome não pode estar vazio.";
            nomeError.style.display = "block";
            return false;
        }
        if (!/^[a-zA-Z\s]+$/.test(nome)) {
            nomeError.textContent = "O campo Nome deve conter apenas letras e espaços.";
            nomeError.style.display = "block";
            return false;
        }
        if (nome.length < 2 || nome.length > 50) {
            nomeError.textContent = "O campo Nome deve ter entre 2 e 50 caracteres.";
            nomeError.style.display = "block";
            return false;
        }
        nomeError.style.display = "none";
        return true;
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            emailError.textContent = "O campo E-mail não pode estar vazio.";
            emailError.style.display = "block";
            return false;
        }
        if (!emailRegex.test(email)) {
            emailError.textContent = "Por favor, insira um e-mail válido.";
            emailError.style.display = "block";
            return false;
        }
        emailError.style.display = "none";
        return true;
    }

    function validateSugestoes() {
        const texto = sugestoesTextarea.value.trim();
        const palavras = texto.split(/\s+/); 
        const maxPalavras = 10;

        if (texto.length > 80) {
            sugestoesError.textContent = "A sugestão deve ter no máximo 80 caracteres.";
            sugestoesError.style.display = "block";
            return false;
        } else if (palavras.length > maxPalavras) {
            sugestoesError.textContent = `A sugestão deve ter no máximo ${maxPalavras} palavras.`;
            sugestoesError.style.display = "block";
            return false;
        } else {
            sugestoesError.style.display = "none";
            return true;
        }
    }

    nomeInput.addEventListener("input", validateNome);
    emailInput.addEventListener("input", validateEmail);
    sugestoesTextarea.addEventListener("input", validateSugestoes);

    form.addEventListener("submit", function(event) {
        const isNomeValid = validateNome();
        const isEmailValid = validateEmail();
        const isSugestoesValid = validateSugestoes();

        if (!isNomeValid || !isEmailValid || !isSugestoesValid) {
            event.preventDefault();
        }
    });
});

document.querySelector('.more-options-button').addEventListener('click', function() {
  const moreApps = document.querySelector('.more-apps');
  moreApps.classList.toggle('hidden'); 
});


