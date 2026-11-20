import styled from 'styled-components'
import { Cartao } from '../../styles'

// O cartão ocupa toda a altura da linha da grade e empurra os links para o rodapé,
// assim "Código" e "Site" ficam sempre alinhados entre os cartões.
export const CartaoAlinhado = styled(Cartao)`
  display: flex;
  flex-direction: column;
  height: 100%;

  p {
    flex: 1 1 auto;
  }
`

export const Links = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 18px;
`

type LinkProps = { $principal?: boolean }

export const LinkProjeto = styled.a<LinkProps>`
  flex: 1 1 0;
  text-align: center;
  padding: 9px 14px;
  border-radius: 9px;
  font-size: 0.93rem;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid ${({ $principal }) => ($principal ? 'transparent' : 'var(--borda)')};
  background: ${({ $principal }) => ($principal ? 'var(--gradiente)' : 'transparent')};
  color: ${({ $principal }) => ($principal ? 'var(--texto-destaque)' : 'var(--texto)')};
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ $principal }) => ($principal ? 'transparent' : 'var(--ciano)')};
    color: ${({ $principal }) => ($principal ? 'var(--texto-destaque)' : 'var(--ciano)')};
    box-shadow: ${({ $principal }) =>
      $principal
        ? '0 0 18px rgba(var(--ciano-rgb), 0.55), 0 0 24px rgba(var(--roxo-rgb), 0.4)'
        : 'var(--brilho-ciano)'};
  }
`
