import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

export function Intro({
	name,
	description,
	location,
	scholarship_start_date,
	application_end_date,
	duration,
}) {
	return (
		<div className="flex flex-row flex-wrap-reverse md:flex-nowrap gap-16 md:gap-24">
			<div className="md:basis-1/2 flex flex-col gap-12 relative">
				<div className="hidden md:block text-primary text-5xl">
					{name}
				</div>

				<div className="text-secondary-800 font-medium">
					A fully funded work-study program to launch your tech career
				</div>

				{description.map((paragraph, index) => (
					<p key={index} className="text-secondary-400 font-light">
						{paragraph.data}
					</p>
				))}

				<div className="text-secondary-400 font-light">
					<span className="text-secondary-800 font-medium">
						Position:{' '}
					</span>
					Marketing Performance
				</div>

				<div>
					<button
						type="button"
						className="text-white bg-primary font-medium rounded-full text-sm px-6 py-3 text-center mr-2 mb-2"
					>
						Apply Now
					</button>
				</div>

				<div className="absolute right-0 -top-20 -z-10">
					<Image
						src="/images/icon-interaction-design.png"
						width={206}
						height={206}
						alt="About background"
					/>
				</div>
			</div>
			<div className="md:basis-1/2 flex flex-col gap-6 relative">
				<div className="md:hidden text-primary text-5xl">{name}</div>
				<div className="flex flex-col-reverse md:flex-row md:gap-8 items-start md:items-center">
					<Image
						src="/images/zeptolab.png"
						alt="Zeptolab logo"
						width={80}
						height={80}
					/>
					<div className="flex flex-row items-center md:flex-col gap-2">
						<div className="text-secondary-400 font-thin text-sm">
							Powered by:
						</div>
						<div className="text-secondary-400 font-light text-lg">
							Zeptolab
						</div>
					</div>
				</div>
				<div className="border border-solid border-secondary-200 rounded px-8 py-6 bg-white">
					<div className="text-primary mb-2 text-sm">
						Application closes in
					</div>
					<div className="font-thin text-xl md:text-2xl text-secondary-400 ">
						6 Day : 22 Hrs : 56 Min : 13 Seg
					</div>
				</div>
				<div className="border border-solid border-secondary-200 rounded px-8 py-6 grid grid-cols-2 gap-12 bg-white">
					<div>
						<div className="text-primary mb-2 text-sm">
							Location
						</div>
						<div className="text-secondary-400 font-light">
							{location.name}
						</div>
					</div>
					<div>
						<div className="text-primary mb-2 text-sm">
							Duration
						</div>
						<div className="text-secondary-400 font-light">
							{duration > 1
								? `${duration} Years`
								: `${duration} Year`}
						</div>
					</div>
					<div>
						<div className="text-primary mb-2 text-sm">
							Start date
						</div>
						<div className="text-secondary-400 font-light">
							{new Date(scholarship_start_date).toDateString()}
						</div>
					</div>
					<div>
						<div className="text-primary mb-2 text-sm">
							End date
						</div>
						<div className="text-secondary-400 font-light">
							{new Date(application_end_date).toDateString()}
						</div>
					</div>
				</div>

				<div className="hidden md:block absolute -bottom-36 -right-36 -z-10">
					<Image
						src="/images/pattern-1.png"
						width={560}
						height={257}
						alt="About background"
						className="min-w-[560px] min-h-[257px]"
					/>
				</div>
			</div>
		</div>
	)
}

Intro.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.arrayOf(PropTypes.object).isRequired,
	location: PropTypes.object.isRequired,
	scholarship_start_date: PropTypes.string.isRequired,
	application_end_date: PropTypes.string.isRequired,
	duration: PropTypes.number.isRequired,
}

Intro.defaultValues = {
	name: 'Lorem ipsum',
	description: [{ data: 'Lorem ipsum' }],
	location: { name: 'Lorem ipsum' },
	scholarship_start_date: "2020-11-22 00:00:00",
	application_end_date: "2020-11-22 00:00:00",
	duration: 1,
}
