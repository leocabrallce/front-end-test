import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'

export function Cost({ name, value, monthly }) {
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
	const [formatedMonthlyValue, setFormatedMonthlyValue] = useState()

	useEffect(() => {
		setFormatedValue(intl.format(value))
		setFormatedMonthlyValue(intl.format(value / 12))
	}, [intl, value])

	return (
		<div className="flex flex-col">
			<div className="text-primary text-sm">{name}</div>
			<div className="text-secondary-400 font-extralight">
				{monthly ? (
					<span>
						{formatedValue} ({formatedMonthlyValue}/month)
					</span>
				) : (
					<span>{formatedValue}</span>
				)}
			</div>
		</div>
	)
}

Cost.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
}

Cost.defaultValues = {
	name: 'Tuition covered',
	value: 20900,
}
