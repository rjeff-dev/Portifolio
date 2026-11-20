import foto from '../../assets/foto.jpg'
import { contatos } from '../../dados'
import { Botao, Botoes } from '../../styles'
import { Apresentacao, Cabecalho, Etiqueta, Foto } from './styles'

// Apresentação principal: diz quem sou, o que busco e leva aos projetos e redes.
const Hero = () => (
  <Cabecalho>
    <Apresentacao>
      <Etiqueta>Aberto a estágio · presencial, híbrido ou remoto</Etiqueta>
      <h1>
        Olá, eu sou o <span>Roberto Jefferson</span>
      </h1>
      <p>
        Desenvolvedor Front-end em formação. Construo interfaces em React e TypeScript, responsivas,
        organizadas e pensadas para quem usa.
      </p>
      <Botoes>
        <Botao $principal href="#projetos">
          Ver projetos
        </Botao>
        <Botao href={contatos.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </Botao>
        <Botao href={contatos.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </Botao>
      </Botoes>
    </Apresentacao>
    {/* width/height reservam o espaço da imagem e evitam "pulos" no layout; alt é para acessibilidade */}
    <Foto src={foto} alt="Foto de Roberto Jefferson" width={220} height={220} />
  </Cabecalho>
)

export default Hero
