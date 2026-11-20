import styled from 'styled-components'
import { breakpoints, Botoes } from '../../styles'

// Mobile: foto em cima, texto centralizado | Desktop: texto à esquerda, foto à direita
// Abordagem mobile-first: os estilos base valem para o celular e as media queries
// (min-width) acrescentam regras para tablet e desktop.
export const Cabecalho = styled.header`
  padding: 24px 0 32px;
  display: flex;
  /* No celular a foto aparece em cima, mas no HTML o texto vem primeiro (melhor para SEO e leitores de tela) */
  flex-direction: column-reverse;
  align-items: center;
  gap: 28px;
  text-align: center;

  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 56px;
    padding: 56px 0 40px;
    text-align: left;
  }
`

export const Apresentacao = styled.div`
  flex: 1 1 auto;

  h1 {
    font-size: clamp(2rem, 8vw, 3.6rem);
    margin: 18px 0 14px;

    span {
      /* Texto com degradê: o fundo é recortado no formato das letras */
      background: var(--gradiente);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }

  p {
    max-width: 60ch;
    color: var(--texto-suave);
    font-size: 1.05rem;
    margin: 0 auto 26px;
  }

  ${Botoes} {
    justify-content: center;
  }

  @media (min-width: ${breakpoints.desktop}) {
    p {
      margin: 0 0 26px;
      font-size: 1.1rem;
    }

    ${Botoes} {
      justify-content: flex-start;
    }
  }
`

export const Etiqueta = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border: 1px solid var(--roxo);
  border-radius: 99px;
  color: var(--texto-suave);
  box-shadow: 0 0 12px rgba(var(--roxo-rgb), 0.3);
  font-size: 0.82rem;
  background: var(--superficie);
`

// A foto cresce a cada breakpoint (160px, 200px e 250px).
export const Foto = styled.img`
  flex: 0 0 auto;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--fundo);
  box-shadow:
    0 0 0 3px var(--ciano),
    0 0 28px rgba(var(--ciano-rgb), 0.4),
    0 0 46px rgba(var(--roxo-rgb), 0.35);
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow:
      0 0 0 3px var(--roxo),
      0 0 34px rgba(var(--roxo-rgb), 0.55),
      0 0 50px rgba(var(--ciano-rgb), 0.35);
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 250px;
    height: 250px;
  }
`
