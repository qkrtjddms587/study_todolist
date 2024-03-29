import { useState } from "react";
import ToDoList from "./components/ToDoList";
import { ITheme, ThemeProvider, createGlobalStyle } from "styled-components";
import ModeButton from "./components/ModeButton";
import ThemeButton from "./components/ThemeButton";
import { defaultTheme } from "./styles/theme";

const GlobalStyle = createGlobalStyle<{ $isDark: boolean }>`
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	font-weight: 400;
	line-height: 1.2;
	font-family: 'Source Sans Pro', sans-serif;
	background-color: ${(props) =>
    props.$isDark ? props.theme.bgColor.dark : props.theme.bgColor.light};
	color: ${(props) => props.theme.bgColor.light};
	box-sizing:border-box;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
input {
	border: none;
	padding: 0;
}
`;

function App() {
  const [isDark, setIsDark] = useState(true);
  const [theme, setTheme] = useState<ITheme>(defaultTheme);
  const toggleMode = () => {
    setIsDark(!isDark);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle $isDark={isDark} />
        <ThemeButton isDark={isDark} theme={theme} setTheme={setTheme} />
        <ModeButton isDark={isDark} onClick={toggleMode} />
        <ToDoList isDark={isDark} />
      </ThemeProvider>
    </>
  );
}

export default App;
