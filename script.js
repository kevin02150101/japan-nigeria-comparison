// Charts
document.addEventListener('DOMContentLoaded', function() {
    // Bar chart for rates
    const ratesCtx = document.getElementById('ratesChart').getContext('2d');
    new Chart(ratesCtx, {
        type: 'bar',
        data: {
            labels: ['Birth Rate', 'Death Rate', 'Infant Mortality'],
            datasets: [{
                label: 'Japan',
                data: [6, 13, 2], // From World Bank 2023
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }, {
                label: 'Nigeria',
                data: [33, 12, 60], // From World Bank 2023
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Line chart for population growth
    const popCtx = document.getElementById('populationChart').getContext('2d');
    new Chart(popCtx, {
        type: 'line',
        data: {
            labels: ['2000', '2005', '2010', '2015', '2020', '2024'], // Years
            datasets: [{
                label: 'Japan',
                data: [126800000, 127500000, 128000000, 127000000, 126500000, 123975371], // Dummy historical, real 2024 from World Bank
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.1)',
                tension: 0.1
            }, {
                label: 'Nigeria',
                data: [122800000, 141000000, 158500000, 182200000, 206100000, 232679478], // Dummy historical, real 2024 from World Bank
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.1)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Maps
    // Japan Map
    const japanMap = L.map('japanMap').setView([36.2048, 138.2529], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(japanMap);

    // Add markers for major cities in Japan
    L.marker([35.6762, 139.6503]).addTo(japanMap).bindPopup('Tokyo'); // Tokyo
    L.marker([34.6937, 135.5023]).addTo(japanMap).bindPopup('Osaka'); // Osaka
    L.marker([35.0116, 135.7681]).addTo(japanMap).bindPopup('Kyoto'); // Kyoto

    // Nigeria Map
    const nigeriaMap = L.map('nigeriaMap').setView([9.0820, 8.6753], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(nigeriaMap);

    // Add markers for major cities in Nigeria
    L.marker([6.5244, 3.3792]).addTo(nigeriaMap).bindPopup('Lagos'); // Lagos
    L.marker([9.0765, 7.3986]).addTo(nigeriaMap).bindPopup('Abuja'); // Abuja
    L.marker([12.0022, 8.5919]).addTo(nigeriaMap).bindPopup('Kano'); // Kano
});
