import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";
import  {GetJavascript, GetGimp, GetHtml, GetCss, GetBlender, GetTailwindcss, GetNextjs, GetArduino, GetMarkdown, GetNodejs, GetReact, GetJava, GetDavinciResolve}   from "../components/software_logos";

export default function Skills() {

    return (
        <Layout >
            <Head>
                <title>Naman Arora | Skills</title>
            </Head>
            <Container>
                <div>
                    <GetJavascript />
                    <GetGimp />
                    <GetHtml />
                    <GetCss />
                    <GetBlender />
                    <GetTailwindcss />
                    <GetNextjs />
                    <GetArduino />
                    <GetMarkdown />
                    <GetNodejs />
                    <GetReact />
                    <GetJava />
                    <GetDavinciResolve />
                </div>
            </Container>
        </Layout>
    );
}
