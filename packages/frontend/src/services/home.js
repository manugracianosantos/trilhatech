// Dados de exemplo - substitua pela sua lógica de carregamento
        const eventosGerais = [
            {
                id: 1,
                nome: "Tech Conference 2023",
                local: "São Paulo, SP",
                imagem: "../assets/exemplo-evento.jpeg",
                descricao: "O maior evento de tecnologia do ano com palestrantes internacionais e workshops exclusivos."
            },
            {
                id: 2,
                nome: "Dev Week",
                local: "Rio de Janeiro, RJ",
                imagem: "../assets/exemplo-evento.jpeg",
                descricao: "Uma semana intensiva de imersão em desenvolvimento web, com foco em frameworks modernos."
            },
            {
                id: 3,
                nome: "UX Design Summit",
                local: "Online",
                imagem: "../assets/exemplo-evento.jpeg",
                descricao: "Conferência dedicada a experiências do usuário, design thinking e interfaces inovadoras."
            },
            {
                id: 4,
                nome: "Python Conference",
                local: "São Paulo, SP",
                imagem: "../assets/exemplo-evento.jpeg",
                descricao: "Maior evento da comunidade Python brasileira com palestras e workshops."
            },
            {
                id: 5,
                nome: "Startup Weekend",
                local: "Campinas, SP",
                imagem: "../assets/exemplo-evento.jpeg",
                descricao: "54 horas para transformar sua ideia em um modelo de negócio real."
            },
            {
                id: 6,
                nome: "Mobile Development",
                local: "São Paulo, SP",
                imagem: "../assets/exemplo-evento.jpeg",
                descricao: "Tudo sobre desenvolvimento mobile nativo e híbrido para iniciantes e experientes."
            },
            {
                id: 1,
                nome: "Workshop Front-end",
                local: "Campinas, SP",
                imagem: "../assets/exemplo-evento.jpeg",
                descricao: "Aprenda as melhores técnicas de desenvolvimento front-end com experts do mercado."
            },
            {
                id: 2,
                nome: "DevOps Days",
                local: "Hortolândia, SP",
                imagem: "../assets/exemplo-evento.jpeg",
                descricao: "Evento sobre cultura DevOps, automação e entrega contínua."
            },
            {
                id: 3,
                nome: "Cloud Computing",
                local: "Indaiatuba, SP",
                imagem: "../assets/exemplo-evento.jpeg",
                descricao: "Tudo sobre computação em nuvem, AWS, Azure e Google Cloud Platform."
            },
            {
                id: 4,
                nome: "AI & Machine Learning",
                local: "Campinas, SP",
                imagem: "../assets/exemplo-evento.jpeg",
                descricao: "Evento sobre inteligência artificial, machine learning e suas aplicações práticas."
            },
        ];

        

        // Função para renderizar o carrossel de Eventos em Alta
        function renderizarCarrossel(eventos, containerId) {
            const carouselInner = document.getElementById(containerId);
            carouselInner.innerHTML = '';
            
            // Calcular quantos slides precisamos (3 eventos por slide)
            const slidesCount = Math.ceil(eventos.length / 3);
            
            // Gerar indicadores
            const carousel = document.getElementById('carouselEventosAlta');
            let indicatorsHtml = '';
            
            for (let i = 0; i < slidesCount; i++) {
                const isActive = i === 0 ? 'active' : '';
                indicatorsHtml += `<button type="button" data-bs-target="#carouselEventosAlta" data-bs-slide-to="${i}" class="${isActive}" aria-label="Slide ${i+1}"></button>`;
            }
            
            // Adicionar indicadores se não existirem
            if (!carousel.querySelector('.carousel-indicators')) {
                const indicators = document.createElement('div');
                indicators.className = 'carousel-indicators';
                indicators.innerHTML = indicatorsHtml;
                carousel.appendChild(indicators);
            }
            
            // Adicionar slides
            for (let i = 0; i < slidesCount; i++) {
                const isActive = i === 0 ? 'active' : '';
                
                const slide = document.createElement('div');
                slide.className = `carousel-item ${isActive}`;
                
                const row = document.createElement('div');
                row.className = 'row';
                
                // Adicionar até 3 eventos neste slide
                for (let j = 0; j < 3; j++) {
                    const eventIndex = i * 3 + j;
                    if (eventIndex >= eventos.length) break;
                    
                    const evento = eventos[eventIndex];
                    
                    const col = document.createElement('div');
                    col.className = 'col-md-4 mb-4';
                    
                    col.innerHTML = `
                        <div class="event-card big-card p-3 h-100">
                            <img src="${evento.imagem}" class="card-img-top" alt="${evento.nome}">
                            <div class="card-body p-0 pt-3">
                                <h3 class="card-title fs-5">${evento.nome}</h3>
                                <p class="card-text mb-2">
                                    <i class="bi bi-geo-alt"></i> ${evento.local}
                                </p>
                            </div>
                        </div>
                    `;
                    
                    row.appendChild(col);
                }
                
                slide.appendChild(row);
                carouselInner.appendChild(slide);
            }
        }

    // Função para renderizar o segundo carrossel (4 eventos por slide)
    function renderizarSegundoCarrossel(eventos, containerId, carouselId) {
        const carouselInner = document.getElementById(containerId);
        if (!carouselInner) return;

        carouselInner.innerHTML = '';

        // Quantos slides vamos precisar (4 eventos por slide)
        const slidesCount = Math.ceil(eventos.length / 4);

        // Gerar indicadores dinamicamente
        const carousel = document.getElementById(carouselId);
        if (!carousel) return;

        // Remove indicadores antigos
        const oldIndicators = carousel.querySelector('.carousel-indicators');
        if (oldIndicators) oldIndicators.remove();

        let indicatorsHtml = '';
        for (let i = 0; i < slidesCount; i++) {
            const isActive = i === 0 ? 'active' : '';
            indicatorsHtml += `
                <button type="button" data-bs-target="#${carouselId}" 
                        data-bs-slide-to="${i}" 
                        class="${isActive}" 
                        aria-label="Slide ${i + 1}"></button>`;
        }

        // Criar indicadores novos
        const indicators = document.createElement('div');
        indicators.className = 'carousel-indicators';
        indicators.innerHTML = indicatorsHtml;
        carousel.appendChild(indicators);

        // Criar slides
        for (let i = 0; i < slidesCount; i++) {
            const isActive = i === 0 ? 'active' : '';
            const slide = document.createElement('div');
            slide.className = `carousel-item ${isActive}`;

            const row = document.createElement('div');
            row.className = 'row';

            // Adicionar até 4 eventos por slide
            for (let j = 0; j < 4; j++) {
                const eventIndex = i * 4 + j;
                if (eventIndex >= eventos.length) break;

                const evento = eventos[eventIndex];

                const col = document.createElement('div');
                col.className = 'col-12 col-md-6 col-lg-3 mb-4';

                col.innerHTML = `
                    <div class="event-card small-card p-3 h-100">
                        <div class="text-center">
                            <img src="${evento.imagem}" class="img-fluid d-block mx-auto" alt="${evento.nome}">
                        </div>
                        <div class="card-body p-0 pt-3">
                            <h3 class="card-title fs-6">${evento.nome}</h3>
                            <p class="card-text mb-1 small">
                                <i class="bi bi-geo-alt"></i> ${evento.local}
                            </p>
                            <p class="card-text small truncate-text">${evento.descricao}</p>
                        </div>
                    </div>
                `;

                row.appendChild(col);
            }

            slide.appendChild(row);
            carouselInner.appendChild(slide);
        }
    }

document.addEventListener('DOMContentLoaded', function() {
    renderizarCarrossel(eventosGerais, 'carousel-inner-alta');
    renderizarSegundoCarrossel(eventosGerais, 'eventos-rmc', 'carouselRMC'); // Adicione o ID do carousel
});