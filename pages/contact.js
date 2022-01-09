import Layout from "../components/layout"
import Head from "next/head"
import  {GetJavascript, GetGimp, GetHtml, GetCss, GetBlender, GetTailwindcss, GetNextjs, GetArduino, GetMarkdown, GetNodejs, GetReact_logo}   from "../components/software_logos"

export default function Contact(){

    //const js = useJavascript();

    return(
        <Layout contact>
            <Head>
                <title>
                    Naman Arora | Contact Me
                </title>
            </Head>
            
            {/*<GetJavascript />
            <GetHtml />
            <GetHtml></GetHtml>
            <GetHtml></GetHtml>
            <GetHtml></GetHtml>
            <GetHtml></GetHtml>
            <GetHtml></GetHtml>
            <GetHtml></GetHtml>
            <GetHtml></GetHtml>*/}
            
        </Layout>
    )
}