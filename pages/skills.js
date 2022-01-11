import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";
import  {GetJavascript, GetGimp, GetHtml, GetCss, GetBlender, GetTailwindcss, GetNextjs, GetArduino, GetMarkdown, GetNodejs, GetReact, GetJava, GetDavinciResolve, GetPython, GetPowershell, GetWord, GetExcel, GetPowerpoint}   from "../components/software_logos";


export default function Skills() {

    const gridStyle = "flex items-center justify-center p-2";

    return (
        
        <Layout >
            <Head>
                <title>Naman Arora | Skills</title>
            </Head>
            <Container>
                <div className="grid grid-cols-3 gap-1 py-10">

                    <div className={gridStyle}><GetJavascript /></div>
                    <div className={gridStyle}><GetJava /></div>
                    <div className={gridStyle}><GetPython /></div>

                    <div className={gridStyle}><GetHtml /></div>
                    <div className={gridStyle}><GetCss /></div>
                    <div className={gridStyle}><GetNodejs /></div>

                    <div className={gridStyle}><GetReact /></div>
                    <div className={gridStyle}><GetNextjs /></div>
                    <div className={gridStyle}><GetTailwindcss /></div>

                    <div className={gridStyle}><GetPowershell /></div>
                    <div className={gridStyle}><GetArduino /></div>
                    <div className={gridStyle}><GetMarkdown /></div>

                    <div className={gridStyle}><GetBlender /> </div>
                    <div className={gridStyle}><GetGimp /></div>
                    <div className={gridStyle}><GetDavinciResolve /></div>

                    <div className={gridStyle}><GetWord /></div>
                    <div className={gridStyle}><GetExcel /></div>
                    <div className={gridStyle}><GetPowerpoint /></div>

                </div>
            </Container>
        </Layout>
    );
}
