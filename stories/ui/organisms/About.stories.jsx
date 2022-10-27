import React from 'react'

import { About } from '../../../components/ui/organisms/About'

const config = {
	title: 'Example/Organisms/About',
	component: About,
}
export default config

const Template = (args) => <About {...args} />

export const Primary = Template.bind({})
Primary.args = {
	about: [{ data: 'Lorem ipsum' }],
	tuition: 31300,
	remaining: 10000,
	total_value: 41300,
	stipend_per_year: 41300,
	study_commitment: 3,
	study_commitment_text:
		'You will complete 15 modules to graduate. Daily classes are 3 hours, plus coursework to complete in your own time.',
	internship_commitment: 3,
	internship_commitment_text:
		'You will complete 15 modules to graduate. Daily classes are 3 hours, plus coursework to complete in your own time.',
}
