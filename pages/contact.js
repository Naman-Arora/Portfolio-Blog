import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";

export default function Contact() {
  return (
    <Layout contact>
      <Head>
        <title>Naman Arora | Contact Me</title>
      </Head>

      <Container>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-argentum text-orange-400">
            Contact Me
          </h1>
        </div>
      </Container>
    </Layout>
  );
}
