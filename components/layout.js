//The standard layout for all the pages on the website

import Footer from './footer'
import Meta from './meta'
import Header from './header'

let ab;
let bl;
let ct;
let nh;

function headerType(){
  if(nh){
    return <></>;
  }
  else if(ab){
    return <Header aboutme />;
  }
  else if(bl){
    return <Header blog />;
  }
  else if(ct){
    return <Header contact />;
  }
  else{
    return <Header />;
  }
}

export default function Layout({children, noHeader, aboutme, blog, contact }) {

  ab = aboutme;
  bl = blog;
  ct = contact;
  nh = noHeader;

  return (
    <>
      <Meta />
      {headerType()}
      <div className="min-h-screen">
        
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
