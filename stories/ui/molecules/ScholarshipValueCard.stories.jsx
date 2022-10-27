import React from 'react'

import { ScholarshipValueCard } from '../../../components/ui/molecules/ScholarshipValueCard'

const config = {
	title: 'Example/Molecules/Scholarship Value Card',
	component: ScholarshipValueCard,
}
export default config

const Template = (args) => <ScholarshipValueCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
	title: 'Study commitment',
	primaryText: '3 hours / day',
	secondaryText:
		'You will complete 15 modules to graduate. Daily classes are 3 hours, plus coursework to complete in your own time.',
}
