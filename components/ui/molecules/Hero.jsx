import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

export function Hero({ picture, title, description }) {
	return (
		<div className="flex flex-row flex-wrap md:flex-nowrap justify-around items-center gap-16 md:gap-36 mx-6">
			<div className="min-w-[252px] min-h-[252px] md:min-w-[440px] md:min-h-[440px]">
				<div className="relative flex items-center justify-center min-w-[334px] min-h-[334px] md:min-w-[440px] md:min-h-[440px]">
					<div className="w-[252px] h-[252px] md:w-[380px] md:h-[380px]">
						<Image
							src={picture}
							width={380}
							height={380}
							alt="About"
							className="rounded-full"
						/>
					</div>
					<div className="absolute top-0 -z-10">
						<Image
							src="/images/pattern-3.png"
							width={440}
							height={440}
							alt="About background"
							className="min-w-[440px] min-h-[440px]"
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-12">
				<div className="text-primary text-5xl">{title}</div>
				<div className="text-secondary-400 text-xl font-light">
					{description}
				</div>
			</div>
		</div>
	)
}

Hero.propTypes = {
	picture: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}

Hero.defaultValues = {
	picture: '/images/about-md.png',
	title: 'About the apprenticeship',
	description:
		'Our scholarships are designed to give talented and driven young people from any background access to top-class education, experience and network. We offer a fully-funded master’s degree alongside an apprenticeship and a guaranteed job upon graduation.',
}
