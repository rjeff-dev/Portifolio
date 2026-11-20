import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// Ponto de entrada: monta o React dentro da <div id="root"> do index.html.
// O StrictMode só atua em desenvolvimento e ajuda a achar efeitos colaterais indevidos.
// O "!" informa ao TypeScript que o elemento existe (ele é fixo no index.html).
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
