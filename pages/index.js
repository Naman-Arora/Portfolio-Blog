import Layout from "../components/layout";
import Container from "../components/container";
//import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Index() {
  return (
    <Layout atHome>
      <Head>
        <title>Naman Arora</title>
      </Head>

      <Container>
        <div className="flex flex-col lg:flex-col ">
          <div className="">
            <h3 className="font-baron text-6xl text-center pr-52">Hi, I'm</h3>
            <h1 className="font-baron text-8xl text-center ">
              <span className="bg-gradient-to-r from-liyel to-ora bg-clip-text text-transparent">NAMAN</span> <br />{" "}
              <span className="tracking-wide bg-gradient-to-r from-liyel to-ora bg-clip-text text-transparent">ARORA</span>
            </h1>
          </div>
          <div className="lg:px-20 lg:pt-20 pt-16 pb-24">
            <span className="text-2xl md:text-3xl font-rslab ">
              A senior at the{" "}
              <a
                href="https://cpast.conroeisd.net/"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                Academy of Science and Technology
              </a>{" "}
              at the{" "}
              <a
                href="https://twcp.conroeisd.net/"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                Woodlands College Park High School
              </a>
              . I'm 16 years old and live in Houston, Texas. I am intrested in pursuing a degree in Computer Science and Engineering, as I enjoy coding and building circuits. A few of my hobbies are traveling, website developing,  gaming, making visual media, and playing tennis.
            </span>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
