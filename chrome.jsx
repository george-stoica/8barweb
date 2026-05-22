/* global React */
const { useState, useEffect, useCallback } = React;

const ROUTES = ['home', 'work', 'about', 'contact'];

function useHashRoute() {
  const get = () => {
    const h = (window.location.hash || '#home').replace(/^#/, '').split('?')[0];
    return ROUTES.includes(h) ? h : 'home';
  };
  const [route, setRoute] = useState(get);
  useEffect(() => {
    const onHash = () => {
      setRoute(get());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const go = useCallback((r) => { window.location.hash = '#' + r; }, []);
  return [route, go];
}

function Header({ route }) {
  return (
    <header className="site-header">
      <div className="shell row">
        <a href="#home" className="wordmark" aria-label="8bar — home">
          <span className="num">8</span><span className="word">bar</span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#work" className={route === 'work' ? 'is-active' : ''}>Work</a>
          <a href="#about" className={route === 'about' ? 'is-active' : ''}>About</a>
          <a href="#contact" className={route === 'contact' ? 'is-active' : ''}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell row">
        <div className="col">
          <span className="wordmark" style={{ fontSize: 18 }}>
            <span className="num">8</span><span className="word">bar</span>
          </span>
          <span className="meta">Engineered outcomes.</span>
        </div>
        <div className="col">
          <span className="meta">Contact</span>
          <a className="mono" style={{ fontSize: 14 }} href="mailto:contact@8barsystems.tech">contact@8barsystems.tech</a>
        </div>
        <div className="col" style={{ textAlign: 'right' }}>
          <span className="mono" style={{ fontSize: 12, color: 'var(--steel)' }}>© 8barsystems.tech</span>
        </div>
      </div>
    </footer>
  );
}

window.Header = Header;
window.Footer = Footer;
window.useHashRoute = useHashRoute;
