import { useCallback, useEffect, useState } from 'react'

export type Tema = 'escuro' | 'claro'

const CHAVE_STORAGE = 'tema'
const COR_BARRA: Record<Tema, string> = { escuro: '#07070f', claro: '#f5f7fc' }

// O tema inicial já foi definido pelo script do index.html (antes da página carregar)
const obterTemaInicial = (): Tema =>
  document.documentElement.dataset.tema === 'claro' ? 'claro' : 'escuro'

export const useTema = () => {
  const [tema, setTema] = useState<Tema>(obterTemaInicial)

  useEffect(() => {
    document.documentElement.dataset.tema = tema
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', COR_BARRA[tema])
  }, [tema])

  const alternarTema = useCallback(() => {
    setTema((temaAtual) => {
      const proximoTema: Tema = temaAtual === 'escuro' ? 'claro' : 'escuro'
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
