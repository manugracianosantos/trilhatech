        // Dados de exemplo - substitua pela sua lógica de carregamento
        const eventos = [
            {
                id: 1,
                nome: "Tech Conference 2023",
                local: "São Paulo, SP",
                data: "15 Out 2023, 09:00",
                imagem: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                descricao: "O maior evento de tecnologia do ano com palestrantes internacionais e workshops exclusivos.",
                link: "https://exemplo.com/tech-conference"
            },
            {
                id: 2,
                nome: "Dev Week",
                local: "Rio de Janeiro, RJ",
                data: "22 Out 2023, 14:00",
                imagem: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                descricao: "Uma semana intensiva de imersão em desenvolvimento web, com foco em frameworks modernos.",
                link: "https://exemplo.com/dev-week"
            },
            {
                id: 3,
                nome: "UX Design Summit",
                local: "Online",
                data: "05 Nov 2023, 10:00",
                imagem: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                descricao: "Conferência dedicada a experiências do usuário, design thinking e interfaces inovadoras.",
                link: "https://exemplo.com/ux-summit"
            },
            {
                id: 4,
                nome: "Python Conference",
                local: "São Paulo, SP",
                data: "12 Nov 2023, 08:30",
                imagem: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                descricao: "Maior evento da comunidade Python brasileira com palestras e workshops.",
                link: "https://exemplo.com/python-conf"
            }
        ];
// Função para gerar os cards de eventos recomendados
function generateEventCards(listaEventos) {
    const eventsContainer = document.getElementById('eventos-lista');
    eventsContainer.innerHTML = ''; // Limpa antes de renderizar

    listaEventos.forEach(evento => {
        const eventCard = document.createElement('div');
        eventCard.className = 'card-rec';

        eventCard.innerHTML = `
            <div class="card-search">
                <img src="${evento.imagem}" alt="Foto do evento" class="foto-evento">
                <div class="infos-side">
                    <div class="title-row">    
                        <h1>${evento.nome}</h1>
                        <img src="../assets/icon-seta.png" alt="Icon de seta" class="icon-seta">
                    </div>
                    <a href="${evento.link}" class="link-evento" target="_blank">${evento.link}</a>
                    </div>
                </div>
                <div class="button">
                    <button class="buttonAdd" onclick="adicionarNaAgenda(${evento.id})">
                         Adicionar na agenda
                    </button>
                </div>
                </div>
            </div>
        `;

        eventsContainer.appendChild(eventCard);
    });
}

        // Função para adicionar evento na agenda
        function adicionarNaAgenda(id) {
            const evento = eventos.find(e => e.id === id);
            if (evento) {
                alert(`Evento "${evento.nome}" adicionado à sua agenda!`);
                // Aqui você implementaria a integração com a API do Google Calendar
            }
        }

// Função para filtrar eventos
function filtrarEventos() {
    const termo = document.getElementById('search-input').value.toLowerCase();
    const eventosFiltrados = eventos.filter(evento => 
        evento.nome.toLowerCase().includes(termo) ||
        evento.local.toLowerCase().includes(termo) ||
        evento.descricao.toLowerCase().includes(termo)
    );
    renderizarEventos(eventosFiltrados);
}


        // Inicializar a página
        document.addEventListener('DOMContentLoaded', function() {
            generateEventCards(eventos);
            
            // Adicionar evento de pesquisa
            document.getElementById('search-input').addEventListener('input', filtrarEventos);
            
            // Adicionar evento de clique nos cards (exceto nos botões)
            document.getElementById('eventos-lista').addEventListener('click', function(e) {
                if (!e.target.closest('button')) {
                    const card = e.target.closest('.card-rec');
                    if (card) {
                        const link = card.querySelector('.link-evento');
                        if (link) {
                            window.open(link.href, '_blank');
                        }
                    }
                }
            });
        });
