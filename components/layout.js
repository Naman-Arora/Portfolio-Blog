//The standard layout for all the pages on the website

import Footer from './footer'
import Meta from './meta'
import Header from './header'

let ab;
let bl;
let ct;
let ah;
let nhd;

function headerType(){
  if(nhd){
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
  else if(ah){
    return <Header atHome />;
  }
  else{
    return <Header />;
  }
}

function footerType(){
  if(ah){
    return <Footer atHome />
  }
  else {
    return <Footer />
  }
}

export default function Layout({children, noHeader, aboutme, blog, contact, atHome }) {

  ab = aboutme;
  bl = blog;
  ct = contact;
  nhd = noHeader;
  ah = atHome;

  return (
    <>
      <div className={atHome || contact ? "h-screen" :"" }>
        <Meta />
        {headerType()}
        <div className={atHome || contact ? "" :"min-h-screen" } /*className='min-h-screen'*/>
        
          <main>{children}</main>
        </div>
            {footerType()}
      </div>
    </>
  )
}
