import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Cost } from '../atoms/Cost'

// TODO: Receive other properties
export function ScholarshipValueCard({ value, primaryText, secondaryText }) {
	const intl = useMemo(
		() =>
			new Intl.NumberFormat('sp', {
				style: 'currency',
				currency: 'EUR',
				currencyDisplay: 'symbol',
				trailingZeroDisplay: 'stripIfInteger',
			}),
		[]
	)
	const [formatedValue, setFormatedValue] = useState()

	useEffect(() => {
		setFormatedValue(intl.format(value))
	}, [intl, value])

	return (
		<div className="md:border md:border-solid md:border-secondary-200 rounded px-6 py-8 h-full flex flex-col gap-12 md:gap-0 md:justify-between md:divide-y divide-secondary-200">
			<div>
				<div className="text-primary mb-2 text-sm">
					Scholarship value
				</div>
				<div className="text-secondary-400 md:text-5xl font-extralight">
					{formatedValue}
				</div>
			</div>
			<div className="flex flex-row flex-wrap gap-12 md:pt-24">
				<Cost name="Tuition covered" value={20900} />
				<Cost name="Remaining" value={2000} />
				<Cost name="Living stipend" value={8400} monthly />
			</div>
		</div>
	)
}

ScholarshipValueCard.propTypes = {
	value: PropTypes.number.isRequired,
}

ScholarshipValueCard.defaultProps = {
	value: 31300,
}