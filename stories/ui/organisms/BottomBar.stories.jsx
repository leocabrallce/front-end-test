import React from 'react'

import { BottomBar } from '../../../components/ui/organisms/BottomBar'

const config = {
	title: 'Example/Organisms/BottomBar',
	component: BottomBar,
}
export default config

const Template = (args) => <BottomBar {...args} />

export const Primary = Template.bind({})
Primary.args = {
	items: [
		{
			name: 'Zeptolab',
			content: 'Marketing Performance',
		},
		{
			name: 'Zeptolab',
			content: 'Marketing Performance',
		},
		{
			name: 'Zeptolab',
			content: 'Marketing Performance',
		},
		{
			name: 'Zeptolab',
			content: 'Marketing Performance',
		},
		{
			name: 'Zeptolab',
			content: 'Marketing Performance',
		},
		{
			name: 'Zeptolab',
			content: 'Marketing Performance',
		},
	],
}
