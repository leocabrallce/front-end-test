import React from 'react'

import { Hero } from '../../../components/ui/molecules/Hero'

const config = {
	title: 'Example/Molecules/Hero',
	component: Hero,
}
export default config

const Template = (args) => <Hero {...args} />

export const Primary = Template.bind({})
Primary.args = {
	picture: '/images/about-md.png',
	title: 'About the apprenticeship',
	description:
		'Our scholarships are designed to give talented and driven young people from any background access to top-class education, experience and network. We offer a fully-funded master’s degree alongside an apprenticeship and a guaranteed job upon graduation.',
}
