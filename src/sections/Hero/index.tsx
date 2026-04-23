import { Row, Col, Button, Divider, Typography } from "antd";
import { StyledSection, StyledDiv } from "./styles";
import { DownloadOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

export default function Hero() {
  return (
    <StyledSection id="hero">
      <Row align="middle">
        <Col>
          <Text type="secondary">Olá, eu sou o</Text>

          <Title level={1}>Ruan Belmiro</Title>

          <Title level={1}>Front-End Developer</Title>
          <Divider />

          <Paragraph type="secondary">
            Desenvolvedor Front-End focado em performance, organização de código
            e boas práticas.
          </Paragraph>

          <StyledDiv>
            <Button size="large" type="primary">
              Ver Projetos
            </Button>

            <Button size="large" type="primary" icon={<DownloadOutlined />}>
              Download CV
            </Button>
          </StyledDiv>
        </Col>
      </Row>
      <Divider />
    </StyledSection>
  );
}
