import { useEffect, useState } from "react";
import { css, keyframes, styled } from "styled-components";

interface IThemeButton {
  isDark: boolean;
}

const openThemeAnimation = keyframes`
    0% {
        transform: scaleX(0);
    }
    100% {
        transform : scaleX(1);
    }
`;

const closeThemeAnimation = keyframes`
    0% {
        transform : scaleX(1);
    }
    100% {
        transform: scaleX(0);
    }
`;

const Wrapper = styled.div<{ $isDark: boolean }>`
  display: flex;
  position: fixed;
  bottom: 20px;
  left: 20px;
`;

const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Themes = styled.div<{ $isOpen: boolean }>`
  margin-left: 110px;
  position: absolute;
  display: flex;
  transform-origin: left center;
  ${(props) =>
    props.$isOpen
      ? css`
          animation: ${openThemeAnimation} 0.5s ease-in-out;
        `
      : css`
          animation: ${closeThemeAnimation} 0.5s ease-in-out;
        `}
`;

const Theme = styled.div<{ $isDark: boolean }>`
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${(props) =>
    props.$isDark ? props.theme.bgColor.light : props.theme.bgColor.dark};
  color: ${(props) =>
    props.$isDark ? props.theme.bgColor.dark : props.theme.bgColor.light};
  transition: transform 0.1s linear;
  &:active {
    transform: translate(5px, 5px);
  }
`;

const ThemeElement = styled.div`
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background-color: ${(props) => props.theme.boardColor};
`;

function ThemeButton({ isDark }: IThemeButton) {
  const [isOpenTheme, setIsOpenTheme] = useState(false);
  const [isDelay, setIsDelay] = useState(false);
  const toggleArrowClick = () => {
    setIsOpenTheme(!isOpenTheme);
    if (isDelay) {
      setTimeout(() => setIsDelay(!isDelay), 500);
    } else {
      setIsDelay(!isDelay);
    }
  };

  return (
    <Wrapper $isDark={isDark}>
      <ButtonWrapper>
        <Theme $isDark={isDark} onClick={toggleArrowClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </Theme>
        {isDelay && (
          <Themes $isOpen={isOpenTheme}>
            <Theme $isDark={isDark}>
              <ThemeElement />
            </Theme>
            <Theme $isDark={isDark}>
              <ThemeElement />
            </Theme>
            <Theme $isDark={isDark}>
              <ThemeElement />
            </Theme>
            <Theme $isDark={isDark}>
              <ThemeElement />
            </Theme>
          </Themes>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
}

export default ThemeButton;
