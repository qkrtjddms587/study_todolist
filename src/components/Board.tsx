import { styled } from "styled-components";

interface IBoard {
  text: string;
  isDark: boolean;
}

const Wrapper = styled.div<{ $isDark: boolean }>`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => props.theme.boardColor};
  margin: 20px 0;
  border: 1px solid
    ${(props) =>
      props.$isDark ? props.theme.bgColor.dark : props.theme.bgColor.light};
  box-shadow: 3px 3px 1px 1px ${(props) => props.theme.shadowColor};
`;

function Board({ text, isDark }: IBoard) {
  return <Wrapper $isDark={isDark}>{text}</Wrapper>;
}

export default Board;
