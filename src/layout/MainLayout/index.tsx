import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <Header>
        <p>Navbar</p>
      </Header>

      <Content>{children}</Content>

      <Footer>© 2026 RuanBelmiro</Footer>
    </Layout>
  );
}
