import { useTema } from '../../hooks/useTema'
import { BotaoAlternar } from './styles'

const IconeSol = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
)

const IconeLua = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
)

const BotaoTema = () => {
  const { tema, alternarTema } = useTema()
  const temaEscuro = tema === 'escuro'
  const descricao = temaEscuro ? 'Ativar tema claro' : 'Ativar tema escuro'

  return (
    <BotaoAlternar type="button" onClick={alternarTema} aria-label={descricao} title={descricao}>
      {temaEscuro ? <IconeSol /> : <IconeLua />}
    </BotaoAlternar>
  )
}

export default BotaoTema
