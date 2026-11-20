# Portfólio — Roberto Jefferson

Portfólio pessoal de desenvolvedor front-end, publicado na Vercel.

## Tecnologias

React 18 · TypeScript · Vite · styled-components · ESLint · Prettier

## Destaques do código

- **Componentes pequenos e reutilizáveis** (`Hero`, `CartaoProjeto`, `Habilidades`, `BotaoTema`).
- **Conteúdo separado da interface:** projetos, habilidades e formação ficam em `src/dados.ts`, tipados com TypeScript.
- **Responsivo (mobile-first):** celular, tablet e desktop, com grades que mudam de 1 para 2, 3 ou 4 colunas.
- **Tema claro e escuro:** variáveis CSS trocadas por um hook (`useTema`), com escolha salva no `localStorage` e sem "piscar" ao carregar.
- **Acessibilidade:** `aria-label` nos botões de ícone, foco visível no teclado e textos alternativos nas imagens.
- **Qualidade de código:** ESLint (flat config) e Prettier configurados, além do `.editorconfig`.

## Como rodar

```bash
npm install
npm run dev
```

## Scripts

| Comando           | O que faz                          |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Servidor de desenvolvimento (Vite) |
| `npm run build`   | Verifica os tipos e gera o build   |
| `npm run preview` | Visualiza o build localmente       |
| `npm run lint`    | Procura problemas com o ESLint     |
| `npm run format`  | Formata o código com o Prettier    |

## Estrutura

```
src/
├── assets/          # imagens
├── components/      # Hero, CartaoProjeto, Habilidades, BotaoTema
├── hooks/           # useTema
├── styles/          # estilo global e componentes de estilo compartilhados
├── dados.ts         # conteúdo do portfólio (projetos, habilidades, formação)
├── App.tsx          # composição da página
└── main.tsx         # ponto de entrada
```

## Contato

- GitHub: https://github.com/rjeff-dev
- LinkedIn: https://www.linkedin.com/in/robjeffersondev/
- E-mail: rob.jefferson.n@gmail.com
