import React from 'react'

import { Faq } from '../../../components/ui/organisms/Faq'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const config = {
	title: 'Example/Organisms/Faq',
	component: Faq,
}
export default config

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Faq {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	items: [
		{
			type: 'Type #1',
			question: 'Lorem ipsum dolor sit amet',
			answer: [
				{
					type: 'paragraph',
					data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				},
			],
		},
		{
			type: 'Type #2',
			question: 'Lorem ipsum dolor sit amet',
			answer: [
				{
					type: 'paragraph',
					data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				},
			],
		},
	],
	categories: ['Type #1', 'Type #2'],
}
