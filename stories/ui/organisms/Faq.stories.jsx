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
Primary.args = {}
