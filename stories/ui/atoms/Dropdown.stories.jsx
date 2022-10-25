import React from 'react'

import { Dropdown } from '../../../components/ui/atoms/Dropdown'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const config = {
	title: 'Example/Atoms/Dropdown',
	component: Dropdown,
}
export default config

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Dropdown {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	items: [
		'Application process',
		'Programme conditions',
		'Apprenticeship conditions',
	],
}
