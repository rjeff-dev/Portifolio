export type Projeto = {
  titulo: string
  descricao: string
  tecnologias: string[]
  repositorio: string
  online?: string // coloque aqui o link do deploy quando tiver
}

export type GrupoHabilidades = { titulo: string; itens: string[] }

export type ItemFormacao = { titulo: string; detalhe: string }

export const contatos = {
  github: 'https://github.com/rjeff-dev',
  linkedin: 'https://www.linkedin.com/in/robjeffersondev/',
  email: 'rob.jefferson.n@gmail.com'
}

export const projetos: Projeto[] = [
  {
    titulo: '🍔 eFood',
    descricao:
      'App de pedidos de comida com consumo de API, carrinho de compras e interface responsiva.',
    tecnologias: ['React', 'TypeScript', 'RTK Query', 'Redux Toolkit'],
    repositorio: 'https://github.com/rjeff-dev/efood-react',
    online: 'https://efood-react-vafx.vercel.app/'
  },
  {
    titulo: '🌌 NV Galaxy',
    descricao:
      'Site de uma loja geek com card games, RPG de mesa, action figures e a Taverna dos Heróis, com slider de imagens e formulário de contato.',
    tecnologias: ['HTML5', 'CSS3', 'JavaScript'],
    repositorio: 'https://github.com/rjeff-dev/Nerull-Void-Galaxy',
    online: 'https://nerull-void-galaxy.vercel.app/'
  }
]

export const habilidades: GrupoHabilidades[] = [
  {
    titulo: 'Front-end',
    itens: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'SASS',
      'Bootstrap',
      'Styled-components',
      'Vite'
    ]
  },
  {
    titulo: 'Estado e APIs',
    itens: ['Redux Toolkit', 'RTK Query', 'REST APIs', 'JSON Server']
  },
  {
    titulo: 'Ferramentas',
    itens: ['Git', 'GitHub', 'VS Code', 'npm', 'ESLint', 'Prettier']
  },
  { titulo: 'Outros', itens: ['Node.js', 'Cypress', 'SQL', 'MySQL'] }
]

export const formacao: ItemFormacao[] = [
  {
    titulo: 'Análise e Desenvolvimento de Sistemas',
    detalhe: 'UNIFOR · cursando · conclusão em 12/2027'
  },
  {
    titulo: 'Gestão de Recursos Humanos',
    detalhe: 'Estácio · concluído em 08/2023'
  },
  {
    titulo: 'Imersões e cursos',
    detalhe: 'Alura (Front-End, IA, Dados com Python) · EBAC (Full Stack Python, IA, Portfólio)'
  }
]
