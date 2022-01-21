import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'

export default function Blogs() {
  return (
    <>
      <Layout blog >
        <Head>
          <title>Naman Arora | Blog </title>
        </Head>
        
        <Container>
          <h1 className='text-7xl lg:text-8xl font-bold font-argentum text-orange-400 text-center pb-10'>
            My Blog
          </h1>
          <h2 className='text-3xl font-bold font-rslab text-center'>
            This is a work in progress. Please check it out later.
          </h2>
        </Container>
      </Layout>
    </>
  )
}

