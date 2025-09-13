// Dados de exemplo para os eventos
    const eventos = [
        {
            id: 1,
            titulo: "Workshop de React",
            data: "15/10/2023",
            horario: "14:00 - 17:00",
            descricao: "Aprenda os conceitos básicos de React e construa sua primeira aplicação.",
            local: "Sala de Treinamento - Andar 3"
        },
        {
            id: 2,
            titulo: "Reunião de Planejamento",
            data: "18/10/2023",
            horario: "09:00 - 10:30",
            descricao: "Reunião para planejamento do próximo trimestre.",
            local: "Sala de Reuniões A"
        },
        {
            id: 3,
            titulo: "Palestra sobre IA",
            data: "22/10/2023",
            horario: "19:00 - 21:00",
            descricao: "Palestra com especialistas sobre Inteligência Artificial e suas aplicações.",
            local: "Auditório Principal"
        },
        {
            id: 4,
            titulo: "Treinamento de Segurança",
            data: "25/10/2023",
            horario: "13:30 - 16:00",
            descricao: "Treinamento obrigatório sobre políticas de segurança da informação.",
            local: "Sala de Treinamento - Andar 2"
        },
        {
            id: 5,
            titulo: "Evento de Networking",
            data: "28/10/2023",
            horario: "18:30 - 21:00",
            descricao: "Conecte-se com profissionais da área e expanda sua rede de contatos.",
            local: "Hall Central"
        }
    ];

    // Função para renderizar os eventos
    function renderizarEventos(eventosParaRenderizar) {
        const container = document.getElementById('containerEventos');
        container.innerHTML = '';
        
        if (eventosParaRenderizar.length === 0) {
    container.innerHTML = '<p class="sem-resultados">Nenhum evento encontrado.</p>';
    return;
        }
        
        eventosParaRenderizar.forEach(evento => {
    const card = document.createElement('div');
    card.className = 'card-evento';
    card.innerHTML = `
        <div class="card-titulo">${evento.titulo}</div>
        <div class="card-info">
    <span>${evento.data}</span>
    <span>${evento.horario}</span>
        </div>
        <div class="card-info">
    <span>${evento.local}</span>
        </div>
        <div class="card-descricao">${evento.descricao}</div>
        <button class="btn-adicionar" onclick="adicionarEvento(${evento.id})">Adicionar na agenda</button>
    `;
    container.appendChild(card);
        });
    }

    // Função para adicionar evento à agenda
    function adicionarEvento(id) {
        const evento = eventos.find(e => e.id === id);
        if (evento) {
    alert(`Evento "${evento.titulo}" adicionado à sua agenda!`);
    // Aqui você implementaria a lógica real para adicionar ao Google Calendar
    // Por exemplo, usando a API do Google Calendar
        }
    }

    // Função para filtrar eventos com base na pesquisa
    function filtrarEventos() {
        const termo = document.getElementById('campoPesquisa').value.toLowerCase();
        const eventosFiltrados = eventos.filter(evento => 
    evento.titulo.toLowerCase().includes(termo) ||
    evento.descricao.toLowerCase().includes(termo) ||
    evento.local.toLowerCase().includes(termo)
        );
        
        renderizarEventos(eventosFiltrados);
    }

    // Inicializar a página com todos os eventos
    document.addEventListener('DOMContentLoaded', function() {
        renderizarEventos(eventos);
        
        // Adicionar listener para a barra de pesquisa
        document.getElementById('campoPesquisa').addEventListener('input', filtrarEventos);
    });
