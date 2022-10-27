import React from 'react'

import { Intro } from '../../../components/ui/organisms/Intro'

const config = {
	title: 'Example/Organisms/Intro',
	component: Intro,
}
export default config

const Template = (args) => <Intro {...args} />

export const Primary = Template.bind({})
Primary.args = {
	name: 'Lorem ipsum',
	description: [{ data: 'Lorem ipsum' }],
	location: { name: 'Lorem ipsum' },
	scholarship_start_date: '2020-11-22 00:00:00',
	application_end_date: '2020-11-22 00:00:00',
	duration: 1,
}
