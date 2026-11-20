import type { Projeto } from '../../dados'
import { Chip, ListaChips } from '../../styles'
import { CartaoAlinhado, LinkProjeto, Links } from './styles'

// Card de um projeto. Recebe os dados por props, então serve para qualquer projeto de dados.ts.
const CartaoProjeto = ({ titulo, descricao, tecnologias, repositorio, online }: Projeto) => (
  <CartaoAlinhado>
    <h3>{titulo}</h3>
    <p>{descricao}</p>
    <ListaChips>
      {tecnologias.map((tecnologia) => (
        <Chip key={tecnologia}>{tecnologia}</Chip>
      ))}
    </ListaChips>
    <Links>
      {/* rel="noopener noreferrer" impede que a página aberta controle esta aba (segurança) */}
      <LinkProjeto href={repositorio} target="_blank" rel="noopener noreferrer">
        Código
      </LinkProjeto>
      {/* Renderização condicional: o botão só existe quando há site no ar */}
      {online && (
        <LinkProjeto $principal href={online} target="_blank" rel="noopener noreferrer">
          Site
        </LinkProjeto>
      )}
    </Links>
  </CartaoAlinhado>
)

export default CartaoProjeto
