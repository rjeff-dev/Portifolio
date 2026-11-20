import { useCallback, useEffect, useState } from 'react'

// Os dois temas possíveis; o tipo impede valores inválidos em tempo de compilação.
export type Tema = 'escuro' | 'claro'

const CHAVE_STORAGE = 'tema'
// Cor da barra do navegador no celular (<meta name="theme-color">) para cada tema.
const COR_BARRA: Record<Tema, string> = { escuro: '#07070f', claro: '#f5f7fc' }

// O tema inicial já foi definido pelo script do index.html (antes da página carregar)
const obterTemaInicial = (): Tema =>
  document.documentElement.dataset.tema === 'claro' ? 'claro' : 'escuro'

/**
 * Hook que controla o tema claro/escuro.
 *
 * Fluxo:
 * 1. Um script no index.html define `data-tema` no <html> ANTES do React carregar
 *    (evita o "flash" de tema errado ao abrir a página).
 * 2. Este hook lê esse valor como estado inicial.
 * 3. Ao alternar: atualiza o atributo (o CSS troca as variáveis de cor),
 *    a cor da barra do navegador no celular e salva a escolha no localStorage.
 */
export const useTema = () => {
  const [tema, setTema] = useState<Tema>(obterTemaInicial)

  useEffect(() => {
    document.documentElement.dataset.tema = tema
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', COR_BARRA[tema])
  }, [tema])

  const alternarTema = useCallback(() => {
    // A função recebe o valor mais recente do estado, evitando bugs em cliques rápidos.
    setTema((temaAtual) => {
      const proximoTema: Tema = temaAtual === 'escuro' ? 'claro' : 'escuro'
      // Gravar é idempotente (mesmo valor), então rodar duas vezes no StrictMode não causa problema.
      // O try/catch cobre navegadores que bloqueiam o localStorage (ex.: modo privado).
      try {
        localStorage.setItem(CHAVE_STORAGE, proximoTema)
      } catch {
        // sem localStorage (modo privado, por exemplo): o tema vale só nesta visita
      }
      return proximoTema
    })
  }, [])

  return { tema, alternarTema }
}
