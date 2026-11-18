import type { Projeto } from '../../dados'
import { Chip, ListaChips } from '../../styles'
import { CartaoAlinhado, LinkProjeto, Links } from './styles'

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
      <LinkProjeto href={repositorio} target="_blank" rel="noopener noreferrer">
        Código
      </LinkProjeto>
      {online && (
        <LinkProjeto $principal href={online} target="_blank" rel="noopener noreferrer">
          Site
        </LinkProjeto>
      )}
    </Links>
  </CartaoAlinhado>
)

export default CartaoProjeto
