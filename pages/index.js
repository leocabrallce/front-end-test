import Head from 'next/head'
import ScholarshipRepository from '../repository/scholarship'
import { Testimonials } from '../components/ui/organisms/Testimonials'
import { Faq } from '../components/ui/organisms/Faq'
import { About } from '../components/ui/organisms/About'

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

      <main>
        <div className='mx-48'>
          <About />
        </div>
        <div className='mb-32 mt-44'>
          <Testimonials />
        </div>
        <div className='mx-36'>
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
