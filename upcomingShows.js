// Fetch data from the JSON file
fetch('shows.json')
    .then(response => response.json())
    .then(shows => {
        const today = new Date();

        // Filter and sort the upcoming shows
        const upcomingShows = shows
            .filter(show => new Date(show.date) >= today && show.details !== "Private event") // Skip private events
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .slice(0, 3); // Get the first 3 upcoming shows

        // Render the upcoming shows
        renderUpcomingShows(upcomingShows);
    })
    .catch(error => console.error('Error loading shows:', error));

// Function to render the upcoming shows
function renderUpcomingShows(shows) {
    const container = document.getElementById('upcoming-shows');
    if (!container) {
        console.error('Error: Element with id "upcoming-shows" not found.');
        return;
    }

    container.innerHTML = ''; // Clear any existing content

    shows.forEach(show => {
        const showElement = document.createElement('div');
        showElement.className = 'seated-event-row';

        showElement.innerHTML = `
            <div class="seated-event-description-cells">
                <div class="seated-event-date-cell">${new Date(show.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                <div class="seated-event-venue-cell">
                    <div class="seated-event-venue-name">${show.name}</div>
                    <div class="seated-event-venue-location">${show.location}</div>
                </div>
                <div class="seated-event-details-cell">${show.details}</div>
            </div>
            <div class="seated-event-link-cells">
                ${show.link ? `<div class="seated-event-link-cell seated-event-link-cell1"><a class="seated-event-link seated-event-link1" href="${show.link}" target="_blank">${show.buttonName}</a></div>` : ''}
            </div>
        `;

        container.appendChild(showElement);
    });
}
