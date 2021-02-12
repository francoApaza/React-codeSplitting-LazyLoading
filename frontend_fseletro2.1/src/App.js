import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import { container } from 'react-bootstrap';

import { lazy, Suspense} from 'react';

const Menu = lazy(() => import('./Components/Menu/index.js'))
const Rotas = lazy(() => import('./Components/Rotas/rotas.js'))
const Footer = lazy(() => import('./Components/Footer/index'))




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">

        
          <Suspense fallback= { <div class="d-flex justify-content-center mb-3">
            <div class="spinner-border text-primary" role="status"></div></div> }>
              <Menu />
          </Suspense>

          <Suspense fallback= {<div className="text-light bg-primary d-flex justify-content-center"><p>   Carregando... </p></div>}>
              <Rotas />
          </Suspense>


          <Suspense fallback= {<div class="d-flex justify-content-center mt-3"><div class="spinner-grow text-success" role="status"></div></div>}>
              <Footer />
          </Suspense>
    
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
