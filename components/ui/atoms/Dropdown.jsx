import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import gsap from 'gsap'

const chevron = (
	<svg
		width="30"
		height="30"
		viewBox="0 0 30 30"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M19 13L15 17L11 13"
			stroke="#4F469C"
			strokeWidth="1.2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

export const Dropdown = ({ items = [], onClick }) => {
	const optionsRef = useRef()
	const selectedItemRef = useRef()
	const [selected, setSelected] = useState('All')
	const [isOpen, setIsOpen] = useState(false)
	const filterItems = [selected, ...items]

	const toggleDropdown = () => {
		gsap.context(() => {
			gsap.to(optionsRef.current, {
				height: isOpen ? 0 : 'auto',
				duration: 0.35,
				ease: 'power3.inOut',
			})
		}, optionsRef)
		gsap.context(() => {
			gsap.fromTo(
				'svg',
				{ rotation: isOpen ? 180 : 0 },
				{
					rotation: '+=180',
					duration: 0.35,
					ease: 'power3.inOut',
				}
			)
		}, selectedItemRef)

		setIsOpen(!isOpen)
	}
	const handleSelection = (item) => {
		setSelected(item)
		toggleDropdown()
		onClick(item)
	}

	return (
		<div className="absolute right-0 z-10 w-full md:min-w-[200px] cursor-pointer py-2.5 px-5 text-sm font-medium  bg-white rounded-3xl border border-gray-200">
			<div
				ref={selectedItemRef}
				onClick={toggleDropdown}
				className="flex flex-row items-center justify-between w-full text-primary"
			>
				{selected}
				{chevron}
			</div>
			<div ref={optionsRef} className="h-0 overflow-hidden">
				{filterItems.map((item) => (
					<div
						key={item}
						onClick={() => handleSelection(item)}
						className="mt-6 flex flex-row items-center min-h-[30px] text-secondary-400 bg-white hover:text-primary"
					>
						{item}
					</div>
				))}
			</div>
		</div>
	)
}

Dropdown.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string),
}

Dropdown.defaultProps = {
	items: [],
}
