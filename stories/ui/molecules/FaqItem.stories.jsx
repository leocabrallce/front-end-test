import React from 'react'

import { FaqItem } from '../../../components/ui/molecules/FaqItem'

const config = {
	title: 'Example/Molecules/FAQ Item',
	component: FaqItem,
}
export default config

const Template = (args) => <FaqItem {...args} />

export const Primary = Template.bind({})
Primary.args = {
	type: 'Type',
	question: 'Lorem ipsum dolor sit amet',
	answer: [
		{
			type: 'paragraph',
			data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		},
	],
}
