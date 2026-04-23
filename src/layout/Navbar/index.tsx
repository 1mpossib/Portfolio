import { Row, Col } from "antd";
import { Nav, NavItem } from "./styles";
import ThemeToggle from "../../components/ThemeToggle";
import { useTheme } from "../../context/themeContext";

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <Nav $theme={theme}>
      <Row align="middle" justify="space-around">
        <Col span={4}>
          <NavItem href="#hero">Ruan Belmiro</NavItem>
        </Col>

        <Col span={6}>
          <NavItem href="#projects">Projetos</NavItem>
          <NavItem href="#about">Sobre</NavItem>
          <NavItem href="#skills">Tecnologias</NavItem>
          <NavItem href="#contact">Contato</NavItem>
        </Col>

        <Col>
          <ThemeToggle />
        </Col>
      </Row>
    </Nav>
  );
}
