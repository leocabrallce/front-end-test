import React from 'react'

import { Testimonials } from '../../../components/ui/organisms/Testimonials'

const config = {
	title: 'Example/Organisms/Testimonials',
	component: Testimonials,
}
export default config

const Template = (args) => <Testimonials {...args} />

export const Primary = Template.bind({})
Primary.args = {
	testimonials: [
		{
			picture: '/images/testimonial-avatar.png',
			name: 'Irene Pereyra',
			title: "Interaction Design Fellow '19",
			linkedin: 'https://linkedin.com',
			statement:
				'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.',
			category: 'Education',
			subcategory: 'B.A. Visual Design',
		},
		{
			picture: '/images/testimonial-avatar.png',
			name: 'Irene Pereyra',
			title: "Interaction Design Fellow '19",
			linkedin: 'https://linkedin.com',
			statement:
				'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.',
			category: 'Education',
			subcategory: 'B.A. Visual Design',
		},
		{
			picture: '/images/testimonial-avatar.png',
			name: 'Irene Pereyra',
			title: "Interaction Design Fellow '19",
			linkedin: 'https://linkedin.com',
			statement:
				'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.',
			category: 'Education',
			subcategory: 'B.A. Visual Design',
		},
	],
}
