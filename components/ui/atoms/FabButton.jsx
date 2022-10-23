import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import gsap from 'gsap'

const minus = (
	<path
		d="M24.592 24.5681H28.84V23.2241H24.592H23.248H19V24.5681H23.248H24.592Z"
		fill="white"
	/>
)
const plus = (
	<path
		d="M24.592 28.816V24.568H28.84V23.224H24.592V19H23.248V23.224H19V24.568H23.248V28.816H24.592Z"
		fill="#959595"
	/>
)
const radius = 23.5
const strokeDash = 2 * Math.PI * radius

export const FabButton = ({ active = false, onClick }) => {
	const ref = useRef()
	const [isActive, setIsActive] = useState(active)
	const icon = isActive ? minus : plus

	const handleMouseEnter = () => {
		if (isActive) return

		gsap.context(() => {
			gsap.fromTo(
				ref.current,
				{ rotation: 0 },
				{
					rotation: '+=360',
					ease: 'power3.inOut',
				}
			)
			gsap.fromTo(
				'.overlay-border',
				{ strokeDasharray: strokeDash, strokeDashoffset: strokeDash },
				{
					strokeDashoffset: 0,
					ease: 'power3.inOut',
				}
			)
			gsap.to('path', { fill: '#685DC5', ease: 'power3.inOut' })
		}, ref)
	}

	const handleMouseLeave = () => {
		if (isActive) return

		gsap.context(() => {
			gsap.fromTo(
				ref.current,
				{ rotation: 0 },
				{ rotation: '+=360', ease: 'power3.inOut' }
			)
			gsap.fromTo(
				'.overlay-border',
				{ strokeDasharray: strokeDash },
				{
					strokeDashoffset: 148,
					ease: 'power3.inOut',
				}
			)
			gsap.to('path', { fill: '#959595', ease: 'power3.inOut' })
		}, ref)
	}

	const handleClick = () => {
		gsap.context(() => {
			gsap.fromTo(
				ref.current,
				{ rotation: 0 },
				{ rotation: '+=360', ease: 'power3.inOut' }
			)

			if (isActive) {
				gsap.fromTo(
					'.inner-white-circle',
					{ r: 0 },
					{ r: radius, ease: 'power4.out' }
				)
				gsap.to('path', { fill: '#685DC5', ease: 'power3.inOut' })
			} else {
				gsap.fromTo(
					'.inner-white-circle',
					{ r: radius },
					{ r: 0, ease: 'power4.out' }
				)
				gsap.to('path', { fill: 'white', ease: 'power3.inOut' })
			}
		}, ref)

		setIsActive(!isActive)
		onClick()
	}

	return (
		<svg
			ref={ref}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleClick}
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="cursor-pointer"
		>
			<circle cx="24" cy="24" r={radius} stroke="#DADADA" />
			<circle cx="24" cy="24" r={radius} fill="#685DC5" />
			<g transform="translate(24, 24)">
				<circle
					className="inner-white-circle"
					cx="0"
					cy="0"
					r={isActive ? 0 : radius}
					fill="white"
				/>
			</g>
			<circle
				className="overlay-border"
				cx="24"
				cy="24"
				r={radius}
				stroke="#685DC5"
				strokeDasharray={strokeDash}
				strokeDashoffset={strokeDash}
			/>
			{icon}
		</svg>
	)
}

FabButton.propTypes = {
	/**
	 * Is this button on active state?
	 */
	active: PropTypes.bool,
	/**
	 * Optional click handler
	 */
	onClick: PropTypes.func,
}

FabButton.defaultProps = {
	active: false,
	onClick: undefined,
}
