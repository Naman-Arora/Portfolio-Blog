import { useMediaQuery } from 'react-responsive'
import Image from "next/image"

let dim = 120;

function devices(){
  
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptopDevice = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  isMobileDevice && (dim = 60);
  isTabletDevice && (dim = 90);
  isLaptopDevice && (dim = 120);

}

export function GetJavascript() {
  // 1
  //color: #F7DF1E\
  //devices();
  
  return (
    <Image
      src="/logos/javascript.svg"
      alt="Javascript"
      height={dim}
      width={dim}
    />
  );
}

export function GetGimp() {
  // 2
  //devices();
  //color: #5C5543
  return <Image src="/logos/gimp.svg" alt="GIMP" height={dim} width={dim} />;
}

export function GetHtml() {
  // 3
  //devices();
  //color: #E34F26
  return <Image src="/logos/html5.svg" alt="HTML 5" height={dim} width={dim} />;
}

export function GetCss() {
  // 4
  //devices();
  //color: #1572B6
  return <Image src="/logos/css3.svg" alt="CSS 3" height={dim} width={dim} />;
}

export function GetBlender() {
  // 5
  //devices();
  //color: #F5792A
  return (
    <Image src="/logos/blender.svg" alt="Blender" height={dim} width={dim} />
  );
}

export function GetTailwindcss() {
  // 6
  //devices();
  //color: #06B6D4
  return (
    <Image
      src="/logos/tailwindcss.svg"
      alt="Tailwind CSS"
      height={dim}
      width={dim}
    />
  );
}

export function GetNextjs() {
  // 7
  //devices();
  //color: #000000
  return (
    <Image src="/logos/nextdotjs.svg" alt="NEXT JS" height={dim} width={dim} />
  );
}

export function GetNodejs() {
  // 8
  //devices();
  //color: #339933
  return (
    <Image src="/logos/nodedotjs.svg" alt="Node JS" height={dim} width={dim} />
  );
}

export function GetArduino() {
  // 9
  //devices();
  //color: #00979D
  return (
    <Image src="/logos/arduino.svg" alt="Arduino" height={dim} width={dim} />
  );
}

export function GetReact() {
  // 10
  //devices();
  //color: #61DAFB
  return <Image src="/logos/react.svg" alt="React" height={dim} width={dim} />;
}

export function GetMarkdown() {
  // 11
  //devices();
  //color: #000000
  return (
    <Image src="/logos/markdown.svg" alt="Markdown" height={dim} width={dim} />
  );
}

export function GetJava() {
  // 12
  //devices();
  //color: #007396
  return <Image src="/logos/java.svg" alt="Java" height={dim} width={dim} />;
}

export function GetDavinciResolve() {
  // 13
  //devices();
  return (
    //check later
    <Image
      src="/logos/davinci_resolve.svg"
      alt="DaVinci Resolve"
      height={dim}
      width={dim}
    />
  );
}

export function GetPython() {
  // 14
  //color: #3776AB
  //devices();
  return (
    //check later
    <Image
      src="/logos/python.svg"
      alt="Python"
      height={dim}
      width={dim}
    />
  );
}

export function GetPowershell() {
  // 15
  //color: #5391FE
  //devices();
  return (
    //check later
    <Image
      src="/logos/powershell.svg"
      alt="Powershell"
      height={dim}
      width={dim}
    />
  );
}

export function GetWord() {
  // 16
  //color: #2B579A
  //devices();
  return (
    //check later
    <Image
      src="/logos/microsoftword.svg"
      alt="Microsoft Word"
      height={dim}
      width={dim}
    />
  );
}

export function GetExcel() {
  // 16
  //color: #217346
  //devices();
  return (
    //check later
    <Image
      src="/logos/microsoftexcel.svg"
      alt="Microsoft Excel"
      height={dim}
      width={dim}
    />
  );
}

export function GetPowerpoint() {
  // 16
  //color: #B7472A
  //devices();
  return (
    //check later
    <Image
      src="/logos/microsoftpowerpoint.svg"
      alt="Microsoft Powerpoint"
      height={dim}
      width={dim}
    />
  );
}
