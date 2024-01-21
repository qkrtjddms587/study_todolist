import { useState } from "react";
import Board from "./Board";
import { styled } from "styled-components";

interface IToDos {
  isDark: boolean;
}

const Wrapper = styled.div``;

function ToDos({ isDark }: IToDos) {
  const [toDos, setToDos] = useState([{ text: "a" }, { text: "b" }]);
  return (
    <Wrapper>
      {toDos.map((todo, i) => (
        <Board key={i} isDark={isDark} text={todo.text} />
      ))}
    </Wrapper>
  );
}

export default ToDos;
