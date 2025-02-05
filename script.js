document.addEventListener('DOMContentLoaded', function() {
    // Function to show the units
    window.showUnits = function() {
        // Show the cards section
        document.getElementById('units-cards').style.display = 'block';

        // Hide the hero section
        document.querySelector('.hero-section').style.display = 'none';

        // Fetch data and display units cards
        fetch('https://676fb2f2b353db80c32350e9.mockapi.io/api/UnitsMeasurements/UnitsMeasurements')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('unit-cards-container');
            data.forEach(unit => {
                const card = document.createElement('div');
                card.classList.add('col-md-4');
                card.innerHTML = `
                    <div class="feature-box" data-aos="fade-up">
                        <img src="${unit.icon}" alt="${unit.unit}" class="img-fluid mb-3">
                        <h4>${unit.unit}</h4>
                        <p>${unit.description}</p>
                        <button class="btn btn-outline-light" onclick="showDefinition('${unit.id}')">Show Definition</button>
                        <button class="btn btn-outline-light mt-2" onclick="showPremium('${unit.id}')">Premium</button>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    };
});
