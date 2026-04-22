import { Layout } from "antd";
import Navbar from "../Navbar";

const { Header, Content, Footer } = Layout;

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <Header style={{ padding: 0 }}>
        <Navbar />
      </Header>

      <Content>{children}</Content>

      <Footer>© 2026 RuanBelmiro</Footer>
    </Layout>
  );
}
