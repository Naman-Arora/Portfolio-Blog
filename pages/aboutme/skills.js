import Layout from "/components/layout";
import Head from "next/head";
import Container from "/components/container";
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
} from "/components/software_logos";

export default function Skills() {
  const gridStyle =
    "flex items-center justify-center p-2 flex-col bg-zinc-700 rounded-lg my-4 mx-8";
  const pStyle = "font-rslab md:text-xl text-lg font-bold pb-2  text-center ";
  const aStyle = "hover:underline";

  return (
    <Layout>
      <Head>
        <title>Naman Arora | Skills</title>
      </Head>
      <Container>
        <div className="grid grid-cols-3 gap-1 py-10">
          <div className={gridStyle}>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              className={aStyle}
              target="_blank"
            >
              <div className="pt-2">
                <GetJavascript />
              </div>
              <p className={pStyle}>JavaScript</p>
            </a>
          </div>
          <div className={gridStyle}>
            <a href="https://www.java.com/" className={aStyle} target="_blank">
              <div className="pt-2">
                <GetJava />
              </div>
              <p className={pStyle}>Java</p>
            </a>
          </div>
          <div className={gridStyle}>
            <a
              href="https://www.python.org/"
              className={aStyle}
              target="_blank"
            >
              <div className="pt-2">
                <GetPython />
              </div>
              <p className={pStyle}>Python</p>
            </a>
          </div>

          <div className={gridStyle}>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              className={aStyle}
              target="_blank"
            >
              <div className="pt-2">
                <GetHtml />
              </div>
              <p className={pStyle}>HTML</p>
            </a>
          </div>
          <div className={gridStyle}>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              className={aStyle}
              target="_blank"
            >
              <div className="pt-2">
                <GetCss />
              </div>
              <p className={pStyle}>CSS</p>
            </a>
          </div>
          <div className={gridStyle}>
            <a href="https://nodejs.org/" className={aStyle} target="_blank">
              <div className="pt-2">
                <GetNodejs />
              </div>
              <p className={pStyle}>Node JS</p>
            </a>
          </div>

          <div className={gridStyle}>
            <a href="https://reactjs.org/" className={aStyle} target="_blank">
              <GetReact />
              <p className={pStyle}>React</p>
            </a>
          </div>
          <div className={gridStyle}>
            <a href="https://nextjs.org/" className={aStyle} target="_blank">
              <div className="pt-2">
                <GetNextjs />
              </div>
              <p className={pStyle}>Next JS</p>
            </a>
          </div>
          <div className={gridStyle}>
            <a
              href="https://tailwindcss.com/"
              className={aStyle}
              target="_blank"
            >
              <div className="pt-2">
                <GetTailwindcss />
              </div>
              <p className={pStyle}>TailwindCSS</p>
            </a>
          </div>

          <div className={gridStyle}>
            <a
              href="https://docs.microsoft.com/en-us/powershell/"
              className={aStyle}
              target="_blank"
            >
              <div className="pt-2">
                <GetPowershell />
              </div>
              <p className={pStyle}>PowerShell</p>
            </a>
          </div>
          <div className={gridStyle}>
            <a
              href="https://www.arduino.cc/"
              className={aStyle}
              target="_blank"
            >
              <div className="pt-2">
                <GetArduino />
              </div>
              <p className={pStyle}>Arduino</p>
            </a>
          </div>
          <div className={gridStyle}>
            <a
              href="https://www.markdownguide.org/"
              className={aStyle}
              target="_blank"
            >
              <div className="pt-2">
                <GetMarkdown />
              </div>
              <p className={pStyle}>Markdown</p>
            </a>
          </div>

          <div className={gridStyle}>
            <a
              href="https://www.blender.org/"
              className={aStyle}
              target="_blank"
            >
              <div className="pt-2">
                <GetBlender />
              </div>
              <p className={pStyle}>Blender</p>
            </a>
          </div>
          <div className={gridStyle}>
            <a href="https://www.gimp.org/" className={aStyle} target="_blank">
              <div className="pt-2">
                <GetGimp />
              </div>
              <p className={pStyle}>GIMP</p>
            </a>
          </div>
          <div className={gridStyle}>
            <a
              href="https://www.blackmagicdesign.com/products/davinciresolve/"
              className={aStyle}
              target="_blank"
            >
              <div className="pl-1 lg:pl-5 pt-2">
                <GetDavinciResolve />
              </div>
              <p className={pStyle}>DaVinci Resolve</p>
            </a>
          </div>

          <div className={gridStyle}>
            <a
              href="https://www.microsoft.com/en-us/microsoft-365/word-e"
              className={aStyle}
              target="_blank"
            >
              <div className="pt-2">
                <GetWord />
              </div>
              <p className={pStyle}>Word</p>
            </a>
          </div>
          <div className={gridStyle}>
            <a
              href="https://www.microsoft.com/en-us/microsoft-365/excel"
              className={aStyle}
              target="_blank"
            >
              <div className="pt-2">
                <GetExcel />
              </div>
              <p className={pStyle}>Excel</p>
            </a>
          </div>
          <div className={gridStyle}>
            <a
              href="https://www.microsoft.com/en-us/microsoft-365/powerpoint"
              className={aStyle}
              target="_blank"
            >
              <div className="pt-2">
                <GetPowerpoint />
              </div>
              <p className={pStyle}>PowerPoint</p>
            </a>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
