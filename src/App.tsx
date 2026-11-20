import styled from 'styled-components'
import BotaoTema from './components/BotaoTema'
import CartaoProjeto from './components/CartaoProjeto'
import Habilidades from './components/Habilidades'
import Hero from './components/Hero'
import { contatos, formacao, projetos } from './dados'
import {
  Botao,
  Botoes,
  breakpoints,
  Container,
  EstiloGlobal,
  Grade,
  Navegacao,
  Secao,
  TituloSecao
} from './styles'

// Cada bloco abaixo estiliza só o que é específico desta página; o que se repete fica em /styles.
const SobreMim = styled(Secao)`
  p {
    color: var(--texto-suave);
    max-width: 68ch;
    margin: 0 0 14px;
  }
`

const ListaFormacao = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;

  li {
    background: var(--superficie);
    border: 1px solid var(--borda);
    border-radius: 12px;
    padding: 14px 18px;
  }

  strong {
    overflow-wrap: anywhere;
  }

  small {
    color: var(--texto-suave);
    display: block;
  }
`

const Rodape = styled.footer`
  padding: 50px 0 60px;
  text-align: center;
  color: var(--texto-suave);
  /* Seletor de componente: altera o Botoes apenas dentro do rodapé */

  ${Botoes} {
    justify-content: center;
    margin-top: 18px;
  }

  small {
    display: block;
    margin-top: 34px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 60px 0 70px;
  }
`

/**
 * Composição da página: apenas organiza as seções na ordem em que aparecem.
 * A lógica e o estilo de cada parte ficam nos próprios componentes.
 */
const App = () => (
  <>
    {/* Aplica o estilo global (cores, fontes, reset) uma única vez */}
    <EstiloGlobal />
    <Container>
      <Navegacao>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#habilidades">Skills</a>
        <a href="#contato">Contato</a>
        <BotaoTema />
      </Navegacao>

      <Hero />

      <SobreMim id="sobre">
        <TituloSecao>Sobre mim</TituloSecao>
        <p>
          Sou estudante de Análise e Desenvolvimento de Sistemas na UNIFOR (conclusão em 12/2027) e
          formado em Gestão de Recursos Humanos. Minha transição para a tecnologia é movida por
          prática: estudo todos os dias, faço imersões e cursos e coloco tudo em projetos.
        </p>
        <p>
          Minha experiência com atendimento, vendas e negociação me deu comunicação, organização e
          responsabilidade, qualidades que levo para o trabalho em equipe e para entender o que o
          usuário realmente precisa.
        </p>
      </SobreMim>

      <Secao id="projetos">
        <TituloSecao>Projetos</TituloSecao>
        {/* 2 colunas no desktop porque são 2 projetos; no celular vira 1 coluna */}
        <Grade $colunasTablet={2} $colunasDesktop={2}>
          {/* key estável (título) em vez do índice: o React identifica corretamente cada item */}
          {projetos.map((projeto) => (
            <CartaoProjeto key={projeto.titulo} {...projeto} />
          ))}
        </Grade>
      </Secao>

      <Habilidades />

      <Secao>
        <TituloSecao>Formação</TituloSecao>
        <ListaFormacao>
          {formacao.map((item) => (
            <li key={item.titulo}>
              <strong>{item.titulo}</strong>
              <small>{item.detalhe}</small>
            </li>
          ))}
        </ListaFormacao>
      </Secao>

      <Rodape id="contato">
        <TituloSecao>Vamos conversar?</TituloSecao>
        <p>Busco estágio em Desenvolvimento de Software / Front-end.</p>
        <Botoes>
          <Botao $principal href={`mailto:${contatos.email}`}>
            {contatos.email}
          </Botao>
          <Botao href={contatos.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Botao>
          <Botao href={contatos.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </Botao>
        </Botoes>
        <small>© 2026 Roberto Jefferson · Fortaleza, CE</small>
      </Rodape>
    </Container>
  </>
)

export default App
