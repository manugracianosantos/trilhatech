// ../services/profile.js

// Dados do usuário (simulando um banco de dados)
let userData = JSON.parse(localStorage.getItem('userData')) || {
    name: "User Name",
    email: "user@example.com",
    password: "password123",
    area: "Área da tecnologia",
    profileImage: "../assets/semperfil.jpeg",
    bannerImage: "../assets/banner-profile.png"
};

// Dados de eventos recomendados (simulando banco de dados)
let recommendedEvents = JSON.parse(localStorage.getItem('recommendedEvents')) || [
    {
        id: 1,
        name: "Tech Conference 2023",
        location: "São Paulo, SP",
        image: "../assets/exemplo-evento.jpeg",
        link: "https://techconference.com.br"
    },
    {
        id: 2,
        name: "Workshop de Programação",
        location: "Campinas, SP",
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        link: "https://workshopprogramacao.com.br"
    },
    {
        id: 3,
        name: "Feira de Startups",
        location: "São Paulo, SP",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        link: "https://feirastartups.com.br"
    },
    {
        id: 4,
        name: "Meetup de Design",
        location: "Campinas, SP",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        link: "https://meetupdesign.com.br"
    }
];

// Função para carregar os dados do usuário na página
function loadUserData() {
    document.getElementById('nome').value = userData.name;
    document.getElementById('email').value = userData.email;
    document.getElementById('senha').value = userData.password;
    document.querySelector('.names-info h1').textContent = userData.name;
    document.querySelector('.names-info h2').textContent = userData.area;
    
    // Carregar imagens
    document.querySelector('.banner').src = userData.bannerImage;
    document.querySelector('.foto-de-perfil').src = userData.profileImage;
}

// Função para salvar as alterações do perfil
function saveProfileChanges() {
    userData.name = document.getElementById('nome').value;
    userData.email = document.getElementById('email').value;
    userData.password = document.getElementById('senha').value;
    
    // Atualizar no localStorage
    localStorage.setItem('userData', JSON.stringify(userData));
    
    // Atualizar na interface
    document.querySelector('.names-info h1').textContent = userData.name;
    
    // Mostrar mensagem de sucesso
    alert("Alterações salvas com sucesso!");
}

// Função para gerar os cards de eventos recomendados
function generateEventCards() {
    const eventsContainer = document.querySelector('.lado-recomendacoes');
    
    // Limpar eventos existentes (exceto o título)
    const events = eventsContainer.querySelectorAll('.card-links');
    events.forEach(event => {
        if (!event.classList.contains('title-only')) {
            event.remove();
        }
    });
    
    // Adicionar cada evento
    recommendedEvents.forEach(event => {
        const eventCard = document.createElement('a');
        eventCard.className = 'card-links';
        eventCard.href = event.link;
        eventCard.target = "_blank";
        
        eventCard.innerHTML = `
            <div class="card-rec">
                <img src="${event.image}" alt="Foto do evento" class="foto-evento">
                <div class="infos-side">
                    <div class="title-row">    
                        <h1>${event.name}</h1>
                        <img src="../assets/icon-seta.png" alt="Icon de seta" class="icon-seta">
                    </div>
                    <div class="row">
                        <img src="../assets/localizacao-icon.png" alt="Icon de Localização">
                        <h2>${event.location}</h2>
                    </div>
                    <a href="${event.link}" class="link-evento">${event.link}</a>
                </div>
            </div>
        `;
        
        eventsContainer.appendChild(eventCard);
    });
}

// Função para alterar a imagem de perfil
function changeProfileImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                userData.profileImage = e.target.result;
                document.querySelector('.foto-de-perfil').src = e.target.result;
                localStorage.setItem('userData', JSON.stringify(userData));
            };
            reader.readAsDataURL(file);
        }
    };
    
    input.click();
}

// Função para alterar a imagem do banner
function changeBannerImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                userData.bannerImage = e.target.result;
                document.querySelector('.banner').src = e.target.result;
                localStorage.setItem('userData', JSON.stringify(userData));
            };
            reader.readAsDataURL(file);
        }
    };
    
    input.click();
}

// Função para inicializar a página
function initializeProfilePage() {
    // Carregar dados do usuário
    loadUserData();
    
    // Gerar cards de eventos
    generateEventCards();
    
    // Adicionar evento de clique ao botão de salvar
    document.querySelector('.btn-edit').addEventListener('click', saveProfileChanges);
    
    // Adicionar evento de clique para mudar a foto de perfil
    document.querySelector('.foto-de-perfil').addEventListener('click', changeProfileImage);
    
    // Adicionar evento de clique para mudar o banner
    document.querySelector('.banner').addEventListener('click', changeBannerImage);
    
    // Adicionar tooltips para as imagens
    document.querySelector('.foto-de-perfil').title = "Clique para alterar a foto de perfil";
    document.querySelector('.banner').title = "Clique para alterar o banner";
}

// Inicializar a página quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initializeProfilePage);