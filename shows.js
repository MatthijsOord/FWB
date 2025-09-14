// Fetch data from the JSON file
fetch('shows.json')
.then(response => response.json())
.then(shows => {
    const today = new Date();
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate()); // Start of today (midnight)

    // Keep upcoming shows as before (sorted ascending)
    const upcomingShows = shows
        .filter(show => new Date(show.date) >= startOfToday)
        .sort((a, b) => new Date(a.date) - new Date(b.date));

    // Past shows (sorted descending) will be grouped by year
    const pastShows = shows
        .filter(show => new Date(show.date) < startOfToday)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    // Render upcoming (unchanged)
    renderShows(upcomingShows, 'upcoming-shows');

    // Render past grouped by year
    renderPastByYear(pastShows, 'past-shows');
})
.catch(error => console.error('Error loading shows:', error));

// Function to render shows (kept like original – used for upcoming)
function renderShows(shows, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    shows.forEach(show => {
        const showElement = document.createElement('div');
        showElement.className = 'seated-event-row';

        // Check if the show is in the past (defensive, but upcoming list is already filtered)
        const isPastShow = new Date(show.date) < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

        // Render differently for past shows (original behavior kept)
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
                    ${show.link ? `<div class="seated-event-link-cell seated-event-link-cell1"><a class="seated-event-link seated-event-link1" href="${show.link}" target="_blank" rel="noopener noreferrer">${show.buttonName}</a></div>` : ''}
                </div>
            `;
        }

        container.appendChild(showElement);
    });
}

// New: render past shows grouped by year into the 'past-shows' container
function renderPastByYear(pastShows, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Group by year
    const showsByYear = pastShows.reduce((acc, show) => {
        const year = new Date(show.date).getFullYear();
        if (!acc[year]) acc[year] = [];
        acc[year].push(show);
        return acc;
    }, {});

    // Years sorted descending (most recent first)
    const years = Object.keys(showsByYear).map(y => parseInt(y, 10)).sort((a, b) => b - a);

    years.forEach((year, idx) => {
        const yearSection = document.createElement('div');
        yearSection.className = 'year-section';

        const toggle = document.createElement('button');
        toggle.className = 'year-toggle';
        toggle.type = 'button';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = year;

        const yearShows = document.createElement('div');
        yearShows.className = 'year-shows';
        // Open the most recent past year by default (optional)
        if (idx === 0) {
            yearShows.classList.add('open');
            toggle.setAttribute('aria-expanded', 'true');
        }

        // Render shows for this year (use compact past-style by default)
        showsByYear[year].forEach(show => {
            const showElement = document.createElement('div');
            showElement.className = 'seated-event-row';
            showElement.innerHTML = `
                <div class="seated-event-description-cells">
                    <div class="seated-event-date-cell">${new Date(show.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                    <div class="seated-event-venue-cell">
                        <div class="seated-event-venue-name">${show.name}</div>
                        <div class="seated-event-venue-location">${show.location}</div>
                    </div>
                    <div class="seated-event-details-cell">${show.details || ''}</div>
                </div>
                <div class="seated-event-link-cells">
                    ${show.link ? `<div class="seated-event-link-cell seated-event-link-cell1"><a class="seated-event-link seated-event-link1" href="${show.link}" target="_blank" rel="noopener noreferrer">${show.buttonName || 'Info'}</a></div>` : ''}
                </div>
            `;
            yearShows.appendChild(showElement);
        });

        toggle.addEventListener('click', () => {
            const isOpen = yearShows.classList.toggle('open');
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        yearSection.appendChild(toggle);
        yearSection.appendChild(yearShows);
        container.appendChild(yearSection);
    });
}
