import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";
import Layout from "../components/layouts/Layout.jsx";
const Heading = styled.h1`
  color: red;
`;
const Nosotros = () => {
  return (
    <div>
      <Layout>
        <Heading>Nosotros</Heading>
      </Layout>
    </div>
  );
};

export default Nosotros;
