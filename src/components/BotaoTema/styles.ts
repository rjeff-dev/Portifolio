import styled, { keyframes } from 'styled-components'

// Animação de giro: os ícones trocam ao alternar o tema e o novo "entra" rodando.
const girar = keyframes`
  from {
    transform: rotate(-90deg) scale(0.6);
    opacity: 0;
  }
  to {
    transform: rotate(0) scale(1);
    opacity: 1;
  }
`

export const BotaoAlternar = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 50%;
  border: 1px solid var(--borda);
  background: var(--superficie);
  color: var(--ciano);
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--ciano);
    box-shadow: var(--brilho-ciano);
  }
  /* Foco visível só na navegação por teclado (Tab): acessibilidade sem poluir o clique do mouse */

  &:focus-visible {
    outline: 2px solid var(--roxo);
    outline-offset: 3px;
  }

  svg {
    width: 20px;
    height: 20px;
    animation: ${girar} 0.45s ease;
  }
`
