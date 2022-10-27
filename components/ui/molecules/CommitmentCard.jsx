import React from 'react'
import PropTypes from 'prop-types'

export function CommitmentCard({ title, primaryText, secondaryText }) {
	return (
		<div className='border border-solid border-secondary-200 rounded px-6 py-8'>
			<div>
				<div className='text-primary mb-2 text-sm'>Study commitment</div>
				<div className='text-secondary-400 text-2xl font-extralight'>3 hours / day</div>
			</div>
			<hr className="divide-x mt-6 mb-4 w-8" />
			<p className='text-secondary-400 font-extralight'>
				You will complete 15 modules to graduate. Daily classes are 3
				hours, plus coursework to complete in your own time.
			</p>
		</div>
	)
}

CommitmentCard.propTypes = {
	title: PropTypes.string.isRequired,
	primaryText: PropTypes.string.isRequired,
	secondaryText: PropTypes.string.isRequired,
}

CommitmentCard.defaultProps = {
	title: 'Study commitment',
	primaryText: '3 hours / day',
	secondaryText:
		'You will complete 15 modules to graduate. Daily classes are 3 hours, plus coursework to complete in your own time.',
}
