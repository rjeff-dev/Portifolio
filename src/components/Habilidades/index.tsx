import { habilidades } from '../../dados'
import { Chip, Grade, ListaChips, Secao, TituloSecao } from '../../styles'
import { CartaoHabilidade } from './styles'

// Lista as tecnologias por grupo. Os grupos vêm de dados.ts, então o layout se adapta sozinho.
const Habilidades = () => (
  <Secao id="habilidades">
    <TituloSecao>Tecnologias</TituloSecao>
    <Grade $colunasTablet={2} $colunasDesktop={4}>
      {habilidades.map((grupo) => (
        <CartaoHabilidade key={grupo.titulo}>
          <h3>{grupo.titulo}</h3>
          <ListaChips>
            {grupo.itens.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </ListaChips>
        </CartaoHabilidade>
      ))}
    </Grade>
  </Secao>
)

export default Habilidades
