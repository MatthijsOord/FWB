class NavBar extends HTMLElement {
    connectedCallback() {
            const activePage = this.getAttribute('active') || 'home';

        this.innerHTML = `
            <nav>
                <ul class='nav-bar'>
                    <li class='logo'><a href='/'><img src='assets/logo.png' alt="Logo of Friends With Benefits"/></a></li>
                    <div class="nav-social">
                        <a href="https://open.spotify.com/artist/0wrNuH6fiaFTd9CepJqjSG" target="_blank" class="nav-icon" aria-label="Spotify">
                            <i class="fab fa-spotify"></i>
                        </a>
                        <a href="https://music.apple.com/ca/artist/roof-rabbit/1847013510" target="_blank" class="nav-icon" aria-label="Apple Music">
                            <i class="fab fa-apple"></i>
                        </a>
                        <a href="https://www.youtube.com/@friendswithbenefitsband" target="_blank" class="nav-icon" aria-label="YouTube">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a href="https://www.instagram.com/fwbband/" target="_blank" class="nav-icon" aria-label="Instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.tiktok.com/@fwbband" target="_blank" class="nav-icon" aria-label="TikTok">
                            <i class="fab fa-tiktok"></i>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61568644762435" target="_blank" class="nav-icon" aria-label="Facebook">
                            <i class="fab fa-facebook"></i>
                        </a>
                    </div>
                    <input type='checkbox' id='check' />
                    <span class="menu font">
                        <li><a class="${activePage === 'home' ? 'active' : ''}" href="/">Home</a></li>
                        <li><a class="${activePage === 'about' ? 'active' : ''}" href="/about">About</a></li>
                        <li><a class="${activePage === 'shows' ? 'active' : ''}" href="/shows">Shows</a></li>
                        <li><a class="${activePage === 'repertoire' ? 'active' : ''}" href="about#repertoire">Repertoire</a></li>
                        <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
                    </span>
                    <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
                </ul>
            </nav>
        `;
    }
}

class PageFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
            <p class="footer-text">
                Voor vragen, email ons op <a href="mailto:info@fwbband.nl" class="footer-link">info@fwbband.nl</a>
            </p>
            <div class="footer-icons">
                <a href="https://open.spotify.com/artist/0wrNuH6fiaFTd9CepJqjSG" target="_blank" class="footer-icon" aria-label="Spotify">
                        <i class="fab fa-spotify"></i>
                    </a>
                    <a href="https://music.apple.com/ca/artist/roof-rabbit/1847013510" target="_blank" class="footer-icon" aria-label="Apple Music">
                        <i class="fab fa-apple"></i>
                    </a>
                    <a href="https://www.youtube.com/@friendswithbenefitsband" target="_blank" class="footer-icon" aria-label="YouTube">
                        <i class="fab fa-youtube"></i>
                    </a>
                    <a href="https://www.instagram.com/fwbband/" target="_blank" class="footer-icon" aria-label="Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.tiktok.com/@fwbband" target="_blank" class="footer-icon" aria-label="TikTok">
                        <i class="fab fa-tiktok"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61568644762435" target="_blank" class="footer-icon" aria-label="Facebook">
                        <i class="fab fa-facebook"></i>
                    </a>
            </div>
        </footer>
        `;
    }   
}

customElements.define('page-footer', PageFooter);
customElements.define('nav-bar', NavBar);