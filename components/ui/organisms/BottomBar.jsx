import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

export function BottomBar({ items }) {
	return (
		<div className="hidden md:flex z-10 sticky bottom-0 flex-row justify-between items-center py-4 px-4 md:px-12 bg-white border border-secondary-200">
			{items.map((item, index) => (
				<div key={index} className="flex flex-col">
					<div className="text-secondary-400 font-bold text-xs">
						{item.name}
					</div>
					<div className="text-secondary-400 font-extralight text-xs">
						{item.content}
					</div>
				</div>
			))}
		</div>
	)
}

BottomBar.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
	})).isRequired,
}

BottomBar.defaultValues = {
	items: [
		{
			name: 'Zeptolab',
			content: 'Marketing Performance',
		},
		{
			name: 'Zeptolab',
			content: 'Marketing Performance',
		},
		{
			name: 'Zeptolab',
			content: 'Marketing Performance',
		},
		{
			name: 'Zeptolab',
			content: 'Marketing Performance',
		},
	],
}
