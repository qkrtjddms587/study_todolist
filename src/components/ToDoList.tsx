import { useState } from "react";
import { styled } from "styled-components";
import Header from "./Header";
import ToDos from "./ToDos";

const Wrapper = styled.div`
  width: 50%;
  height: 100vh;
  margin: 0 auto;
`;

interface IToDo {
  [key: string]: string;
}

interface IToDoList {
  isDark: boolean;
}

function ToDoList({ isDark }: IToDoList) {
  const [categorys, setCategorys] = useState(["할 일", "진행중", "완료"]);
  return (
    <Wrapper>
      <Header isDark={isDark} />
      <ToDos isDark={isDark} />
    </Wrapper>
  );
}

export default ToDoList;
