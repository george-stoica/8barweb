/* global React, ReactDOM, useHashRoute, Header, Footer, HomePage, WorkPage, AboutPage, ContactPage */

const { useEffect } = React;

function App() {
  const [route, go] = useHashRoute();

  useEffect(() => {
    document.body.dataset.route = route;
  }, [route]);

  let page;
  if (route === 'work') page = <WorkPage />;
  else if (route === 'about') page = <AboutPage />;
  else if (route === 'contact') page = <ContactPage />;
  else page = <HomePage go={go} />;

  return (
    <>
      <Header route={route} />
      <div key={route}>{page}</div>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
