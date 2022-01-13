//The standard layout for all the pages on the website

import Footer from './footer'
import Meta from './meta'
import Header from './header'

let ab;
let bl;
let ct;
let nh;
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
  else if(nh){
    return <Header noHome />;
  }
  else{
    return <Header />;
  }
}

export default function Layout({children, noHeader, aboutme, blog, contact, noHome }) {

  ab = aboutme;
  bl = blog;
  ct = contact;
  nhd = noHeader;
  nh = noHome;

  return (
    <>
      <Meta />
      {headerType()}
      <div className={noHome ? "min-h-full" :"min-h-screen" } /*className='min-h-screen'*/>
        
        <main>{children}</main>
      </div>
        <div /*className={noHome ? "lg:bottom-0 lg:fixed lg:w-screen": ""}*/>
          <Footer />
        </div>
    </>
  )
}
