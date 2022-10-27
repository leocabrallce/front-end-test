import React from 'react'
import PropTypes from 'prop-types'
import { Cost } from '../atoms/Cost'

export function ScholarshipValueCard({ value, primaryText, secondaryText }) {
	const intl = new Intl.NumberFormat('sp', {
		style: 'currency',
		currency: 'EUR',
		currencyDisplay: 'symbol',
		trailingZeroDisplay: 'stripIfInteger',
	})

	// TODO: Adjust hr margin
	return (
		<div className="border border-solid border-secondary-200 rounded px-6 py-8">
			<div>
				<div className="text-primary mb-2 text-sm">
					Scholarship value
				</div>
				<div className="text-secondary-400 text-5xl font-extralight">
					{intl.format(31300)}
				</div>
			</div>
			<hr className="divide-x mt-6 mb-12" />
			<div className="flex flex-row flex-wrap gap-12">
				<Cost name="Tuition covered" value={20900} />
				<Cost name="Tuition covered" value={20900} />
				<Cost name="Tuition covered" value={20900} monthly />
			</div>
		</div>
	)
}

ScholarshipValueCard.propTypes = {
	title: PropTypes.string.isRequired,
	primaryText: PropTypes.string.isRequired,
	secondaryText: PropTypes.string.isRequired,
}

ScholarshipValueCard.defaultProps = {
	title: 'Study commitment',
	primaryText: '3 hours / day',
	secondaryText:
		'You will complete 15 modules to graduate. Daily classes are 3 hours, plus coursework to complete in your own time.',
}
