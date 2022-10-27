import React from 'react'
import PropTypes from 'prop-types'

export function CommitmentCard({ title, primaryText, secondaryText }) {
	return (
		<div>
			<div>
				<div>Study commitment</div>
				<div>3 hours / day</div>
			</div>
			<hr className="divide-x" />
			<div>
				You will complete 15 modules to graduate. Daily classes are 3
				hours, plus coursework to complete in your own time.
			</div>
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
