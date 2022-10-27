import React from 'react'
import PropTypes from 'prop-types'
import { CommitmentCard } from '../molecules/CommitmentCard'
import { ScholarshipValueCard } from '../molecules/ScholarshipValueCard'

export function About(props) {
	return (
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
				<div className="flex flex-row w-full justify-center items-center mb-8">
					<hr className="divide-x border-secondary-200 w-full mr-6" />
					<span className="text-secondary-400 font-medium">
						GRADUATION
					</span>
					<hr className="divide-x border-secondary-200 w-full ml-6" />
				</div>
				<CommitmentCard />
			</div>
		</div>
	)
}

About.propTypes = {}

About.defaultValues = {}
