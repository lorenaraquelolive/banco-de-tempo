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

