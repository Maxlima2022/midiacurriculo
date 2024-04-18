// Dados para o gráfico de porcentagem de idiomas (exemplo)
const languageData = {
    labels: ['Português Nativo', 'Espanhol', 'Italiano',],
    datasets: [{
        label: 'Porcentagem de Idiomas',
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1,
        data: [100, 25, 15,] // Porcentagens dos idiomas
    }]
};

// Configurações do gráfico de porcentagem de idiomas
const languageConfig = {
    type: 'pie',
    data: languageData,
};

// Criar o gráfico de porcentagem de idiomas
var languageChart = new Chart(
    document.getElementById('languageChart'),
    languageConfig
);
