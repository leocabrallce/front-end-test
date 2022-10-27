import Head from 'next/head'
import ScholarshipRepository from '../repository/scholarship'
import { Testimonials } from '../components/ui/organisms/Testimonials'
import { Faq } from '../components/ui/organisms/Faq'
import { About } from '../components/ui/organisms/About'
import { Intro } from '../components/ui/organisms/Intro'
import { Navbar } from '../components/ui/organisms/Navbar'

// TODO: Add background gray geometry at the end
// TODO: Use API data
function Home({ data }) {
  const { meta } = data
  const { faqs } = data.scholarship

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <div className='m-12 md:m-48'>
          <Intro />
        </div>
        <div className='m-12 md:mx-48'>
          <About />
        </div>
        <div className='md:mb-32 md:mt-44'>
          <Testimonials />
        </div>
        <div className='m-12 md:mx-36'>
          <Faq items={faqs.items} categories={faqs.categories} />
        </div>
      </main>

    </div>
  )
}

// Handling SSR data with Next
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await ScholarshipRepository.getData()
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Home
