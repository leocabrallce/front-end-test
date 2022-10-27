import React from 'react'

import { Dropdown } from '../../../components/ui/atoms/Dropdown'

const config = {
	title: 'Example/Atoms/Dropdown',
	component: Dropdown,
}
export default config

const Template = (args) => <Dropdown {...args} />

export const Default = Template.bind({})
Default.args = {
	items: [
		'Application process',
		'Programme conditions',
		'Apprenticeship conditions',
	],
}
