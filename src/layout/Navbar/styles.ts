import styled from "styled-components";

interface NavProps {
  $theme: "light" | "dark";
}

export const Nav = styled.div<NavProps>`
  backdrop-filter: blur(10px);
  background-color: ${(props) =>
    props.$theme === "dark"
      ? "rgba(15, 23, 42, 0.8)"
      : "rgba(248, 250, 252, 0.8)"};
  color: ${(props) => (props.$theme === "dark" ? "#f1f5f9" : "#0f172a")};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  border-bottom: 1px solid
    ${(props) =>
      props.$theme === "dark"
        ? "rgba(100, 116, 139, 0.2)"
        : "rgba(100, 116, 139, 0.1)"};
`;

export const NavItem = styled.a`
  margin: 0 16px;
  cursor: pointer;
  position: relative;
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #3b82f6;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    height: 2px;
    width: 0%;
    background: #3b82f6;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;
