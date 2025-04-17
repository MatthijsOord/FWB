// Fetch data from the JSON file
fetch('shows.json')
.then(response => response.json())
.then(shows => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1); // Add one day to today

    // Separate and sort shows
    const upcomingShows = shows.filter(show => new Date(show.date) >= tomorrow).sort((a, b) => new Date(a.date) - new Date(b.date));
    const pastShows = shows.filter(show => new Date(show.date) < tomorrow).sort((a, b) => new Date(b.date) - new Date(a.date));

    // Render shows
    renderShows(upcomingShows, 'upcoming-shows');
    renderShows(pastShows, 'past-shows');
})
.catch(error => console.error('Error loading shows:', error));

// Function to render shows
function renderShows(shows, containerId) {
    const container = document.getElementById(containerId);
    shows.forEach(show => {
        const showElement = document.createElement('div');
        showElement.className = 'seated-event-row';

        // Check if the show is in the past
        const isPastShow = new Date(show.date) < new Date(new Date().setDate(new Date().getDate() + 1));

        // Render differently for past shows
        if (isPastShow) {
            showElement.innerHTML = `
                <div class="seated-event-description-cells">
                    <div class="seated-event-date-cell">${new Date(show.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                    <div class="seated-event-venue-cell">
                        <div class="seated-event-venue-name">${show.name}</div>
                        <div class="seated-event-venue-location">${show.location}</div>
                    </div>
                </div>
            `;
        } else {
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
        }

        container.appendChild(showElement);
    });
}