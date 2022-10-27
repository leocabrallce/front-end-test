import Head from 'next/head'
import { Testimonials } from '../components/ui/organisms/Testimonials'
import { Faq } from '../components/ui/organisms/Faq'
import ScholarshipRepository from '../repository/scholarship'

// TODO: Add background gray geometry at the end
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
        <div className='mb-32 mt-44'>
          <Testimonials />
        </div>
        <div className='mx-12'>
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
