import React from 'react'
import PropTypes from 'prop-types'
import { Hero } from '../molecules/Hero'
import { CommitmentCard } from '../molecules/CommitmentCard'
import { ScholarshipValueCard } from '../molecules/ScholarshipValueCard'

// TODO: Use API data
export function About(props) {
	const hero = {
		picture: '/images/about-md.png',
		title: 'About the apprenticeship',
		description:
			'Our scholarships are designed to give talented and driven young people from any background access to top-class education, experience and network. We offer a fully-funded master’s degree alongside an apprenticeship and a guaranteed job upon graduation.',
	}
	return (
		<div>
			<div className='my-24'>
				<Hero {...hero} />
			</div>
			<div className="grid grid-rows-2 grid-cols-3 gap-8">
				<div className="row-span-2">
					<ScholarshipValueCard />
				</div>
				<div>
					<CommitmentCard />
				</div>
				<div>
					<CommitmentCard />
				</div>
				<div className="col-span-2">
					<div className="flex flex-row w-full justify-center items-center mb-10">
						<hr className="divide-x border-secondary-200 w-full mr-6" />
						<span className="text-secondary-400 font-medium">
							GRADUATION
						</span>
						<hr className="divide-x border-secondary-200 w-full ml-6" />
					</div>
					<CommitmentCard />
				</div>
			</div>
		</div>
	)
}

About.propTypes = {}

About.defaultValues = {}
