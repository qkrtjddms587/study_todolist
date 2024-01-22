import { styled } from "styled-components";

const Wrapper = styled.div<{ $isDark: boolean }>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 3rem;
  gap: 0.7rem;
  padding: 20px 0;
  border-bottom: 3px solid
    ${(props) =>
      props.$isDark ? props.theme.bgColor.light : props.theme.bgColor.dark};
  user-select: none;
`;

const Category = styled.div<{ $isDark: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.7rem;
  background-color: ${(props) => props.theme.boardColor};
  box-shadow: 3px 3px 1px 1px ${(props) => props.theme.shadowColor};
  transition: all 0.1s linear;
  &:active {
    transform: translate(3px, 3px);
    box-shadow: none;
  }
`;

interface IHeader {
  isDark: boolean;
}

function Header({ isDark }: IHeader) {
  const categoties = ["계 획", "진행중", "완 료", "+"];
  return (
    <Wrapper $isDark={isDark}>
      {categoties.map((category) => (
        <Category $isDark={isDark} key={category}>
          {category}
        </Category>
      ))}
    </Wrapper>
  );
}

export default Header;
