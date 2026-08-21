import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap');

  :root {
    --ink: #f7faf8;
    --muted: #9eaaa5;
    --surface: #111815;
    --surface-raised: #18211d;
    --line: rgba(255, 255, 255, 0.09);
    --accent: #c8ff4d;
    --accent-dark: #91c91d;
    --danger: #ff6b6b;
  }

  * { box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    background:
      radial-gradient(circle at 88% 4%, rgba(200, 255, 77, 0.10), transparent 28rem),
      #090e0c;
    color: var(--ink);
    font-family: 'DM Sans', sans-serif;
    margin: 0;
    min-width: 320px;
    -webkit-font-smoothing: antialiased;
  }

  button, input, select { font: inherit; }

  button, [role='button'] { cursor: pointer; }

  :focus-visible {
    outline: 3px solid rgba(200, 255, 77, 0.7);
    outline-offset: 2px;
  }

  ::selection { background: var(--accent); color: #071009; }

  ::-webkit-scrollbar { height: 8px; width: 8px; }
  ::-webkit-scrollbar-thumb { background: #35413b; border-radius: 999px; }
`;
