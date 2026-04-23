import { Layout, theme } from "antd";
import Navbar from "../Navbar";

const { Header, Content, Footer } = Layout;
const { useToken } = theme;

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { token } = useToken();

  return (
    <Layout style={{ transition: "all 0.3s" }}>
      <Header style={{ padding: 0, boxShadow: token.boxShadow }}>
        <Navbar />
      </Header>

      <Content>{children}</Content>

      <Footer style={{ textAlign: "center" }}>© 2026 RuanBelmiro</Footer>
    </Layout>
  );
}
