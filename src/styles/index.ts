import styled, { createGlobalStyle } from 'styled-components'

// Pontos de quebra da responsividade (mobile-first): celular < 768px < tablet < 1100px < desktop.
export const breakpoints = {
  tablet: '768px',
  desktop: '1100px'
}

// Paleta neon (ciano e roxo), inspirada no site da Nerull Void Galaxy
export const EstiloGlobal = createGlobalStyle`
  /* Tema escuro (padrão). Todas as cores vêm de variáveis CSS: trocar de tema é só trocar os valores, sem reescrever componentes. */
  :root {
    --fundo: #07070f;
    --superficie: #0f1020;
    --texto: #eaf6ff;
    --texto-suave: #9aa6c4;
    --ciano: #00e5ff;
    --roxo: #b026ff;
    /* Cores em RGB puro: permitem brilhos com transparência, ex.: rgba(var(--ciano-rgb), 0.4) */
    --ciano-rgb: 0, 229, 255;
    --roxo-rgb: 176, 38, 255;
    --destaque: var(--ciano);
    --texto-destaque: #07070f;
    --borda: #26284d;
    --brilho-ciano: 0 0 18px rgba(var(--ciano-rgb), 0.45);
    --brilho-roxo: 0 0 18px rgba(var(--roxo-rgb), 0.5);
    --gradiente: linear-gradient(135deg, var(--ciano), var(--roxo));
    color-scheme: dark;
    box-sizing: border-box;
    /* Respeita as áreas seguras de celulares (notch e barra do sistema), junto com viewport-fit=cover */
    padding-top: env(safe-area-inset-top, 0px);
    padding-bottom: env(safe-area-inset-bottom, 0px);
  }

  /* Tema claro: ativado pelo botão de sol/lua (atributo data-tema no <html>) */
  :root[data-tema='claro'] {
    --fundo: #f5f7fc;
    --superficie: #ffffff;
    --texto: #12142a;
    --texto-suave: #4d5573;
    --ciano: #0e7490;
    --roxo: #9333ea;
    --ciano-rgb: 14, 116, 144;
    --roxo-rgb: 147, 51, 234;
    --texto-destaque: #ffffff;
    --borda: #dde1f0;
    color-scheme: light;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: env(safe-area-inset-top, 0px);
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    color: var(--texto);
    font: 16px/1.65 Inter, system-ui, sans-serif;
    overflow-x: hidden;
    background-color: var(--fundo);
    background-image:
      radial-gradient(ellipse 60% 40% at 0% 0%, rgba(var(--roxo-rgb), 0.18), transparent 70%),
      radial-gradient(ellipse 50% 40% at 100% 20%, rgba(var(--ciano-rgb), 0.12), transparent 70%);
    background-repeat: no-repeat;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3 {
    font-family: 'Space Grotesk', Inter, sans-serif;
    line-height: 1.15;
    margin: 0;
  }

  a {
    color: var(--ciano);
    transition: color 0.25s ease, text-shadow 0.25s ease;
  }

  ::selection {
    background: var(--roxo);
    color: #fff;
  }
`

// Centraliza o conteúdo e limita a largura; o espaçamento lateral aumenta em telas maiores.
export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 18px;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 0 32px;
  }
`

// Menu: centralizado no celular e alinhado à direita a partir do tablet.
export const Navegacao = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px 22px;
  padding: 16px 0;
  font-size: 0.95rem;

  a {
    position: relative;
    color: var(--texto-suave);
    text-decoration: none;
    padding: 2px 0;
    /* Sublinhado animado: cresce da esquerda via transform, que é leve para o navegador animar */

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background: var(--gradiente);
      box-shadow: var(--brilho-ciano);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }

    &:hover {
      color: var(--ciano);
      text-shadow: 0 0 10px rgba(var(--ciano-rgb), 0.6);
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    justify-content: flex-end;
    padding: 20px 0;
  }
`

export const Secao = styled.section`
  padding: 32px 0;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 44px 0;
  }
`

export const TituloSecao = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.8rem;
    margin-bottom: 24px;
  }
`

type GradeProps = {
  $colunasTablet?: number
  $colunasDesktop?: number
}

// Mobile: 1 coluna | Tablet: 2 colunas | Desktop: 3 colunas (padrão)
export const Grade = styled.div<GradeProps>`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(${({ $colunasTablet = 2 }) => $colunasTablet}, 1fr);
  }

  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(${({ $colunasDesktop = 3 }) => $colunasDesktop}, 1fr);
  }
`

// Base de todos os cards. O hover sobe o card com brilho roxo para indicar interatividade.
export const Cartao = styled.article`
  background: var(--superficie);
  border: 1px solid var(--borda);
  border-radius: 14px;
  padding: 20px;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &:hover {
    border-color: var(--roxo);
    box-shadow: var(--brilho-roxo);
    transform: translateY(-3px);
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 8px;
  }

  p {
    color: var(--texto-suave);
    margin: 0 0 14px;
    font-size: 0.97rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 22px;
  }
`

export const ListaChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

// Etiqueta de tecnologia (React, TypeScript...).
export const Chip = styled.span`
  font-size: 0.8rem;
  padding: 3px 10px;
  border-radius: 99px;
  background: rgba(var(--ciano-rgb), 0.06);
  border: 1px solid rgba(var(--ciano-rgb), 0.25);
  color: var(--texto-suave);
  transition:
    color 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    color: var(--ciano);
    border-color: var(--ciano);
    box-shadow: 0 0 10px rgba(var(--ciano-rgb), 0.35);
  }
`

export const Botoes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

// Botão/link com dois visuais: "principal" (degradê) e secundário (contorno), escolhidos por prop.
type BotaoProps = { $principal?: boolean }

export const Botao = styled.a<BotaoProps>`
  flex: 1 1 140px;
  text-align: center;
  /* Quebra textos longos (como o e-mail) para não estourar a tela no celular */
  overflow-wrap: anywhere;
  padding: 11px 20px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 500;
  border: 1px solid ${({ $principal }) => ($principal ? 'transparent' : 'var(--borda)')};
  color: ${({ $principal }) => ($principal ? 'var(--texto-destaque)' : 'var(--texto)')};
  background: ${({ $principal }) => ($principal ? 'var(--gradiente)' : 'var(--superficie)')};
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease,
    text-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ $principal }) =>
      $principal
        ? '0 0 22px rgba(var(--ciano-rgb), 0.55), 0 0 30px rgba(var(--roxo-rgb), 0.4)'
        : 'var(--brilho-ciano)'};
    border-color: ${({ $principal }) => ($principal ? 'transparent' : 'var(--ciano)')};
    color: ${({ $principal }) => ($principal ? 'var(--texto-destaque)' : 'var(--ciano)')};
  }

  @media (min-width: ${breakpoints.tablet}) {
    flex: 0 0 auto;
  }
`
