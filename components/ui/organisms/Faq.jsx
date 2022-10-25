import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { FaqItem } from '../molecules/FaqItem'
import { Dropdown } from '../atoms/Dropdown'

export const Faq = ({ items, categories }) => {
	// TODO: remove default values
	items = items || [
		{
			type: 'Application process',
			question:
				'What happens once I conduct the interview with Harbour.Space?',
			answer: [
				{
					type: 'paragraph',
					data: 'We will compile your results to present to the University’s Board of Admissions and the company. If your profile is selected, you will be informed about the next steps via email.',
				},
			],
		},
		{
			type: 'Application process',
			question: 'When will I know the outcome of my application?',
			answer: [
				{
					type: 'paragraph',
					data: 'After your interview with the Admissions Office, you will be notified about whether you’re moving to the next stage of the application process within the next 10 calendar days. If there are any changes in the timeline, you will be informed by your Admissions Officer.',
				},
			],
		},
		{
			type: 'Programme conditions',
			question:
				'How many hours will I dedicate to the classes, homework and internship?',
			answer: [
				{
					type: 'paragraph',
					data: 'Harbour.Space programmes are designed for full-time, year-round intensive study, divided into a 3-week module format, one subject at a time.',
				},
				{
					type: 'paragraph',
					data: 'Classes are scheduled for three hours a day, five days a week, for a total of 48 contact hours including examinations, which means that studying requires active participation and maximum concentration.',
				},
				{
					type: 'paragraph',
					data: 'Lectures are held every day either in the morning or in the afternoon, and the final candidate is expected to spend 4-6 hours a day on their internship.',
				},
				{
					type: 'paragraph',
					data: 'Please be aware that you will have to coordinate your weekly schedule with the company and University.',
				},
			],
		},
		{
			type: 'Programme conditions',
			question:
				"Can I start by studying/working remotely if I'm not able to be physically present?",
			answer: [
				{
					type: 'paragraph',
					data: 'Since all of our classes are designed to be delivered in a hybrid format (online and offline), online classes will still be an option for the 2020-2021 academic year until further notice. Whether working remotely is possible or not has to be discussed with the company.',
				},
			],
		},
		{
			type: 'Apprenticeship conditions',
			question: 'Will I sign an internship contract?',
			answer: [
				{
					type: 'paragraph',
					data: 'Yes. Either you will sign an internship contract directly with the company or a three-party agreement between the company, the University and yourself.',
				},
			],
		},
		{
			type: 'Application process',
			question: 'Is the application fee refundable?',
			answer: [
				{
					type: 'paragraph',
					data: 'The application fee for Harbour.Space is a non-refundable sum of 125€. This fee guarantees that we maintain the highest possible standard of assessment and screening process. Ultimately, you are applying to a highly competitive Apprenticeship opportunity.',
				},
			],
		},
		{
			type: 'Apprenticeship conditions',
			question: 'Will I be provided with accommodation?',
			answer: [
				{
					type: 'paragraph',
					data: 'No. Students are expected to find their own accommodation. We can also recommend some student organizations that could help you with finding accommodation.',
				},
				{
					type: 'paragraph',
					data: 'Here are some websites and apps that may help you find a room or a flat: Badi, Idealista, Fotocasa, Facebook groups.',
				},
			],
		},
		{
			type: 'Apprenticeship conditions',
			question: 'Will I get aa visa?',
			answer: [
				{
					type: 'paragraph',
					data: 'All students from non-European Union countries, non-European Economic Area member state countries and not from the Swiss Confederation must obtain a student visa. The student visa allows the holder to remain in Spain in order to seek studies, research, and internship programmes.',
				},
			],
		},
		{
			question: 'What happens if I can’t arrive for the starting date?',
			answer: [
				{
					type: 'paragraph',
					data: 'In general the company sets the earliest starting date, which can be found at the top of the website. As the university has a rolling admissions policy, enrollment to the class is possible every 3 weeks. Therefore, the starting date can be flexible.',
				},
			],
			type: 'Apprenticeship conditions',
		},
		{
			type: 'Apprenticeship conditions',
			question: 'Is my living allowance negotiable?',
			answer: [
				{
					type: 'paragraph',
					data: 'If you’re selected for the apprenticeship by the company, you’ll have the time to talk and agree on this number with the company itself.',
				},
			],
		},
	]
	categories = categories || [
		'Application process',
		'Programme conditions',
		'Apprenticeship conditions',
	]

	const [faqItems, setFaqItems] = useState(items)

	const filterFaqItems = (type) => {
		const result =
			type === 'All' ? items : items.filter((item) => item.type === type)
		setFaqItems(result)
	}

	return (
		<div className="md:divide-y">
			<div className="flex flex-col md:flex-row pb-12 justify-between md:items-center">
				<h2 className="basis-1/2 text-primary text-[48px]">
					Frequently asked
					<br />
					questions
				</h2>
				<div className="basis-1/4 w-full relative my-6">
					<Dropdown items={categories} onClick={filterFaqItems} />
				</div>
			</div>
			<div className="divide-y">
				{faqItems.map((item) => (
					<FaqItem
						key={item.question}
						type={item.type}
						question={item.question}
						answer={item.answer}
					/>
				))}
			</div>
		</div>
	)
}

Faq.propTypes = {
	/**
	 * An array with each Question / Answer
	 */
	items: PropTypes.arrayOf(
		PropTypes.shape({
			/**
			 * Type / Topic of the question
			 */
			type: PropTypes.string.isRequired,
			/**
			 * The question text
			 */
			question: PropTypes.string.isRequired,
			/**
			 * The answer array. Each array object should contain the text of each paragraph
			 */
			answer: PropTypes.arrayOf(
				PropTypes.shape({
					type: PropTypes.oneOf(['paragraph']),
					data: PropTypes.string.isRequired,
				})
			).isRequired,
		})
	).isRequired,
	/**
	 * The list of available categories for the list to be filtered
	 */
	categories: PropTypes.arrayOf(PropTypes.string),
}

Faq.defaultProps = {
	items: [
		{
			type: 'Application process',
			question:
				'What happens once I conduct the interview with Harbour.Space?',
			answer: [
				{
					type: 'paragraph',
					data: 'We will compile your results to present to the University’s Board of Admissions and the company. If your profile is selected, you will be informed about the next steps via email.',
				},
			],
		},
		{
			type: 'Apprenticeship conditions',
			question: 'Will I sign an internship contract?',
			answer: [
				{
					type: 'paragraph',
					data: 'Yes. Either you will sign an internship contract directly with the company or a three-party agreement between the company, the University and yourself.',
				},
			],
		},
	],
	categories: ['Application process', 'Apprenticeship conditions'],
}
