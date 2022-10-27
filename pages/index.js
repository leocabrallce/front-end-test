import Head from 'next/head'
import ScholarshipRepository from '../repository/scholarship'
import { Testimonials } from '../components/ui/organisms/Testimonials'
import { Faq } from '../components/ui/organisms/Faq'
import { About } from '../components/ui/organisms/About'
import { Intro } from '../components/ui/organisms/Intro'
import { Navbar } from '../components/ui/organisms/Navbar'
import { BottomBar } from '../components/ui/organisms/BottomBar'

function Home({ data }) {
  const { meta } = data
  const {
    faqs,
    name,
    description,
    location,
    scholarship_start_date,
    application_end_date,
    duration,
    about,
    tuition,
    remaining,
    total_value,
    stipend_per_year,
    study_commitment,
    study_commitment_text,
    internship_commitment,
    internship_commitment_text,

  } = data.scholarship

  const footer = [
    {
      name: 'Zeptolab',
      content: 'Marketing Performance',
    },
    {
      name: 'Zeptolab',
      content: 'Marketing Performance',
    },
    {
      name: 'Zeptolab',
      content: 'Marketing Performance',
    },
    {
      name: 'Zeptolab',
      content: 'Marketing Performance',
    },
    {
      name: 'Zeptolab',
      content: 'Marketing Performance',
    },
    {
      name: 'Zeptolab',
      content: 'Marketing Performance',
    },
  ]

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
          <Intro
            name={name}
            description={description}
            location={location}
            scholarship_start_date={scholarship_start_date}
            application_end_date={application_end_date}
            duration={duration}
          />
        </div>
        <div className='m-12 md:mx-48'>
          <About
            about={about}
            tuition={tuition}
            remaining={remaining}
            total_value={total_value}
            stipend_per_year={stipend_per_year}
            study_commitment={study_commitment}
            study_commitment_text={study_commitment_text}
            internship_commitment={internship_commitment}
            internship_commitment_text={internship_commitment_text}
          />
        </div>
        <div className='md:mb-32 md:mt-44'>
          <Testimonials />
        </div>
        <div className='m-12 md:mx-36'>
          <Faq items={faqs.items} categories={faqs.categories} />
        </div>
      </main>

      <BottomBar items={footer} />

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
