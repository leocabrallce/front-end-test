import React from 'react'
import PropTypes from 'prop-types'
import { Hero } from '../molecules/Hero'
import { CommitmentCard } from '../molecules/CommitmentCard'
import { ScholarshipValueCard } from '../molecules/ScholarshipValueCard'

export function About({
	about,
	tuition,
	remaining,
	total_value,
	stipend_per_year,
	study_commitment,
	study_commitment_text,
	internship_commitment,
	internship_commitment_text,
}) {
	return (
		<div>
			<div className="my-16 md:my-24">
				<Hero
					description={about}
					picture="/images/about-md.png"
					title="About the apprenticeship"
				/>
			</div>
			<div className="md:grid md:grid-rows-2 md:grid-cols-3 gap-8">
				<div className="mb-10 md:mb-0 md:row-span-2">
					<ScholarshipValueCard
						tuition={tuition}
						total_value={total_value}
						remaining={remaining}
						stipend_per_year={stipend_per_year}
					/>
				</div>
				<div className="mb-10">
					<CommitmentCard
						title="Study Commitment"
						commitment={study_commitment}
						commitment_text={study_commitment_text}
					/>
				</div>
				<div className="mb-10">
					<CommitmentCard
						title="Study Commitment"
						commitment={study_commitment}
						commitment_text={study_commitment_text}
					/>
				</div>
				<div className="col-span-2">
					<div className="flex flex-row w-full justify-center items-center mb-10">
						<hr className="divide-x border-secondary-200 w-full mr-6" />
						<span className="text-secondary-400 font-medium">
							GRADUATION
						</span>
						<hr className="divide-x border-secondary-200 w-full ml-6" />
					</div>
					<CommitmentCard
						title="Internship Commitment"
						commitment={internship_commitment}
						commitment_text={internship_commitment_text}
					/>
				</div>
			</div>
		</div>
	)
}

About.propTypes = {
	about: PropTypes.arrayOf(PropTypes.object).isRequired,
	tuition: PropTypes.number.isRequired,
	remaining: PropTypes.number.isRequired,
	total_value: PropTypes.number.isRequired,
	stipend_per_year: PropTypes.number.isRequired,
	study_commitment: PropTypes.number.isRequired,
	study_commitment_text: PropTypes.string.isRequired,
	internship_commitment: PropTypes.number.isRequired,
	internship_commitment_text: PropTypes.string.isRequired,
}

About.defaultValues = {
	about: [{ data: 'Lorem ipsum' }],
	tuition: 31300,
	remaining: 10000,
	total_value: 41300,
	stipend_per_year: 41300,
	study_commitment: 3,
	study_commitment_text:
		'You will complete 15 modules to graduate. Daily classes are 3 hours, plus coursework to complete in your own time.',
	internship_commitment: 3,
	internship_commitment_text:
		'You will complete 15 modules to graduate. Daily classes are 3 hours, plus coursework to complete in your own time.',
}
