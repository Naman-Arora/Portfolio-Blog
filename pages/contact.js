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
        <div className="lg:pb-52">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-argentum text-orange-400 text-center pt-4 pb-8">
            Contact Me
          </h1>
          <h2 className="text-3xl md:text-4xl text-center pb-4 font-lato font-bold">Please contact me for more information.</h2>
          <div className="flex flex-col items-center justify-center">
            <ul className="text-3xl font-lato">
              <li className="py-6">
                <a
                  href="mailto:namanarora166@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Email Me &rarr;
                </a>
              </li>
              <li className="pb-6">
                Direct message me on{" "}
                <a
                  href="https://twitter.com/RealNamanArora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Twitter &rarr;
                </a>
              </li>
              <li>
                Connect with me on{" "}
                <a
                  href="https://www.linkedin.com/in/namarora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  LinkedIn &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
