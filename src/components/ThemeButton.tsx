import { useEffect, useState } from "react";
import { ITheme, css, keyframes, styled } from "styled-components";
import { colors } from "../styles/theme";

interface IThemeButton {
  isDark: boolean;
  setTheme: Function;
  theme: ITheme;
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

const ThemeElement = styled.div<{ color: string; theme: ITheme }>`
  width: ${(props) =>
    props.theme.boardColor === props.color ? "90%" : "100%"};
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

function ThemeButton({ isDark, setTheme, theme }: IThemeButton) {
  const [isOpenTheme, setIsOpenTheme] = useState(false);
  const [throttle, setThrottle] = useState(false);
  const clickedToggleArrow = () => {
    if (throttle) return;
    if (!throttle) {
      setThrottle(true);
      setIsOpenTheme(!isOpenTheme);
      setTimeout(() => setThrottle(false), 500);
    }
  };
  const clickedThemeElement = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const selectColor = target.attributes[0].nodeValue;
    setTheme((prev: ITheme): ITheme => {
      return { ...prev, boardColor: selectColor || "" };
    });
  };
  return (
    <Wrapper $isDark={isDark}>
      <ButtonWrapper>
        <Theme $isDark={isDark} onClick={clickedToggleArrow}>
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
        {(!isOpenTheme && !throttle) || (
          <Themes $isOpen={isOpenTheme}>
            {colors.map((color) => (
              <Theme $isDark={isDark}>
                <ThemeElement
                  key={color}
                  color={color}
                  theme={theme}
                  onClick={clickedThemeElement}
                />
              </Theme>
            ))}
          </Themes>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
}

export default ThemeButton;
