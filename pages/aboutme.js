import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

const card_css = "p-6 lg:p-10 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600";

export default function AboutMe() {
  return (
    <Layout aboutme>
      <Head>
        <title>Naman Arora | About Me</title>
      </Head>
      <Container>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter" >
            Learn About Me
          </h1>
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className="flex flex-wrap items-center justify-around max-w-4xl mt-0 sm:w-full">

              <Link href="/aboutme/academic-achievements">
                <a className={card_css}>
                  <h3 className="text-2xl font-bold">
                    Academic Achievements &rarr;
                  </h3>
                  <p className="mt-4 text-xl">
                    My relevant and best SAT, ACT, and AP Test Scores.
                  </p>
                </a>
              </Link>

              <Link href="/aboutme/work-internships">
                <a className={card_css}>
                  <h3 className="text-2xl font-bold">
                    Work & Internships &rarr;
                  </h3>
                  <p className="mt-4 text-xl">
                    My previous experience in jobs and intenships.
                  </p>
                </a>
              </Link>

              <Link href="/aboutme/extracurricular-activities">
                <a className={card_css}>
                  <h3 className="text-2xl font-bold">
                    Extracurriculars &rarr;
                  </h3>
                  <p className="mt-4 text-xl">
                    The extracurricular activities I partake in and my achievements.
                  </p>
                </a>
              </Link>

              <Link href="/aboutme/hobbies-interests">
                <a className={card_css}>
                  <h3 className="text-2xl font-bold">
                    Hobbies & Interests &rarr;
                  </h3>
                  <p className="mt-4 text-xl">
                    My hobbies and interests that I enjoy in my free time.
                  </p>
                </a>
              </Link>
              
            </div>
          </main>
        </div>
      </Container>
    </Layout>
  );
}
