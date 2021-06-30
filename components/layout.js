import Head from "next/head";
import { Layout, BackTop } from "antd";
import HeaderLayout from "./layout/header";
import { useEffect } from "react";
const { Header, Content } = Layout;
import { motion } from "framer-motion";
const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};
export default function LayoutPage({
  children,
  title = "This is the default title",
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial='initial'
      animate='animate'
    >
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter"
          rel="stylesheet"
        />
      </Head>
      <Layout className="mainLayout">
        <Header>
          <HeaderLayout></HeaderLayout>
        </Header>
      </Layout>
      <Content>
        {children}
        <BackTop>
          <div style={style}>Top</div>
        </BackTop>
      </Content>
    </motion.div>
  );
}
