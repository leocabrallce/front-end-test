import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Cost } from '../atoms/Cost'

export function ScholarshipValueCard({
	tuition,
	remaining,
	total_value,
	stipend_per_year,
}) {
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
		setFormatedValue(intl.format(total_value))
	}, [intl, total_value])

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
				<Cost name="Tuition covered" value={tuition} />
				<Cost name="Remaining" value={remaining} />
				<Cost name="Living stipend" value={stipend_per_year} monthly />
			</div>
		</div>
	)
}

ScholarshipValueCard.propTypes = {
	tuition: PropTypes.number.isRequired,
	remaining: PropTypes.number.isRequired,
	total_value: PropTypes.number.isRequired,
	stipend_per_year: PropTypes.number.isRequired,
}

ScholarshipValueCard.defaultProps = {
	tuition: 31300,
	remaining: 10000,
	total_value: 41300,
	stipend_per_year: 41300,
}
