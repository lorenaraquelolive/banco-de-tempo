document.addEventListener('DOMContentLoaded', function () {
    const profileButton = document.getElementById('profileButton');
    const profileDropdown = document.getElementById('profileDropdown');

    // Toggle o menu ao clicar no botão
    profileButton.addEventListener('click', function () {
        profileDropdown.classList.toggle('show');
    });

    // Fecha o menu ao clicar fora dele
    window.addEventListener('click', function (event) {
        if (!profileButton.contains(event.target) && !profileDropdown.contains(event.target)) {
            profileDropdown.classList.remove('show');
        }
    });
});
// Espera o DOM estar completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        // Verifica se a URL do link corresponde à URL atual
        if (link.href === window.location.href) {
            link.classList.add('active'); // Adiciona a classe active ao link correspondente
        }

        link.addEventListener('click', function(e) {
            // Remove a classe active de todos os links
            links.forEach(item => {
                item.classList.remove('active');
            });

            // Adiciona a classe active ao link clicado
            this.classList.add('active');
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal"); 
    const btn = document.getElementById("trocarServicoBtn");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

document.addEventListener("DOMContentLoaded", function() { 
    const cadastro_modal = document.getElementById("cadastro_modal"); 
    const cadastrobtn = document.getElementById("cadastrobtn");
    const span = document.getElementsByClassName("close_cadastro")[0];

    cadastrobtn.onclick = function() {
        cadastro_modal.style.display = "block";
    }

    span.onclick = function() {
        cadastro_modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == cadastro_modal) {
            cadastro_modal.style.display = "none";
        }
    }
});


document.addEventListener("DOMContentLoaded", function() { 
    const perfil_modal = document.getElementById("perfil_modal"); 
    const perfilbtn = document.getElementById("perfilbtn");
    const span = document.getElementsByClassName("perfil_close")[0];

    perfilbtn.onclick = function() {
        perfil_modal.style.display = "flex";
    }

    span.onclick = function() {
        perfil_modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == perfil_modal) {
            perfil_modal.style.display = "none";
        }
    }
});