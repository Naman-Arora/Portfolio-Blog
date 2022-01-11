import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";
import {
  GetJavascript,
  GetGimp,
  GetHtml,
  GetCss,
  GetBlender,
  GetTailwindcss,
  GetNextjs,
  GetArduino,
  GetMarkdown,
  GetNodejs,
  GetReact,
  GetJava,
  GetDavinciResolve,
  GetPython,
  GetPowershell,
  GetWord,
  GetExcel,
  GetPowerpoint,
} from "../components/software_logos";

export default function Skills() {
  const gridStyle = "flex items-center justify-center p-2 flex-col";
  const pStyle = "font-rslab md:text-xl text-lg font-bold py-2";
  const aStyle = "hover:underline";

  return (
    <Layout>
      <Head>
        <title>Naman Arora | Skills</title>
      </Head>
      <Container>
        <div className="grid grid-cols-3 gap-1 py-10">
          <div className={gridStyle}>
            <GetJavascript />
            <p className={pStyle}><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className={aStyle} target="_blank">JavaScript</a></p>
          </div>
          <div className={gridStyle}>
            <GetJava />
            <p className={pStyle}><a href="https://www.java.com/" className={aStyle} target="_blank">Java</a></p>
          </div>
          <div className={gridStyle}>
            <GetPython />
            <p className={pStyle}><a href="https://www.python.org/" className={aStyle} target="_blank">Python</a></p>
          </div>

          <div className={gridStyle}>
            <GetHtml />
            <p className={pStyle}><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className={aStyle} target="_blank">HTML</a></p>
          </div>
          <div className={gridStyle}>
            <GetCss />
            <p className={pStyle}><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className={aStyle} target="_blank">CSS</a></p>
          </div>
          <div className={gridStyle}>
            <GetNodejs />
            <p className={pStyle}><a href="https://nodejs.org/" className={aStyle} target="_blank">Node JS</a></p>
          </div>

          <div className={gridStyle}>
            <GetReact />
            <p className={pStyle}><a href="https://reactjs.org/" className={aStyle} target="_blank">React</a></p>
          </div>
          <div className={gridStyle}>
            <GetNextjs />
            <p className={pStyle}><a href="https://nextjs.org/" className={aStyle} target="_blank">Next JS</a></p>
          </div>
          <div className={gridStyle}>
            <GetTailwindcss />
            <p className={pStyle}><a href="https://tailwindcss.com/" className={aStyle} target="_blank">TailwindCSS</a></p>
          </div>

          <div className={gridStyle}>
            <GetPowershell />
            <p className={pStyle}><a href="https://docs.microsoft.com/en-us/powershell/" className={aStyle} target="_blank">PowerShell</a></p>
          </div>
          <div className={gridStyle}>
            <GetArduino />
            <p className={pStyle}><a href="https://www.arduino.cc/" className={aStyle} target="_blank">Arduino</a></p>
          </div>
          <div className={gridStyle}>
            <GetMarkdown />
            <p className={pStyle}><a href="https://www.markdownguide.org/" className={aStyle} target="_blank">Markdown</a></p>
          </div>

          <div className={gridStyle}>
            <GetBlender />
            <p className={pStyle}><a href="https://www.blender.org/" className={aStyle} target="_blank">Blender</a></p>
          </div>
          <div className={gridStyle}>
            <GetGimp />
            <p className={pStyle}><a href="https://www.gimp.org/" className={aStyle} target="_blank">GIMP</a></p>
          </div>
          <div className={gridStyle}>
            <GetDavinciResolve />
            <p className={pStyle}><a href="https://www.blackmagicdesign.com/products/davinciresolve/" className={aStyle} target="_blank">DaVinci Resolve</a></p>
          </div>

          <div className={gridStyle}>
            <GetWord />
            <p className={pStyle}><a href="https://www.microsoft.com/en-us/microsoft-365/word-e" className={aStyle} target="_blank">MS Word</a></p>
          </div>
          <div className={gridStyle}>
            <GetExcel />
            <p className={pStyle}><a href="https://www.microsoft.com/en-us/microsoft-365/excel" className={aStyle} target="_blank">MS Excel</a></p>
          </div>
          <div className={gridStyle}>
            <GetPowerpoint />
            <p className={pStyle}><a href="https://www.microsoft.com/en-us/microsoft-365/powerpoint" className={aStyle} target="_blank">MS PowerPoint</a></p>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
