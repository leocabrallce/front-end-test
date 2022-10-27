import React from 'react'
import PropTypes from 'prop-types'

export function CommitmentCard({ title, commitment, commitment_text }) {
	return (
		<div className="border border-solid border-secondary-200 rounded px-6 py-8">
			<div>
				<div className="text-primary mb-2 text-sm">{title}</div>
				<div className="text-secondary-400 text-2xl font-extralight">
					{commitment} hours / day
				</div>
			</div>
			<hr className="divide-x mt-6 mb-4 w-8" />
			<p className="text-secondary-400 font-extralight">
				{commitment_text}
			</p>
		</div>
	)
}

CommitmentCard.propTypes = {
	title: PropTypes.string.isRequired,
	commitment: PropTypes.number.isRequired,
	commitment_text: PropTypes.string.isRequired,
}

CommitmentCard.defaultProps = {
	title: 'Study commitment',
	commitment: 3,
	commitment_text:
		'You will complete 15 modules to graduate. Daily classes are 3 hours, plus coursework to complete in your own time.',
}
