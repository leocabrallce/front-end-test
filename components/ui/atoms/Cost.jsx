import React from 'react'
import PropTypes from 'prop-types'

export function Cost({ name, value, monthly }) {
	const intl = new Intl.NumberFormat('sp', {
		style: 'currency',
		currency: 'EUR',
		currencyDisplay: 'symbol',
		trailingZeroDisplay: 'stripIfInteger',
	})

	return (
		<div className="flex flex-col">
			<div className="text-primary text-sm">{name}</div>
			<div className="text-secondary-400 font-extralight">
				{monthly ? (
					<span>
						{intl.format(value)} ({intl.format(value / 12)}/month)
					</span>
				) : (
					<span>{intl.format(value)}</span>
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
