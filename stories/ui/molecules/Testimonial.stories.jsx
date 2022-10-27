import React from 'react'

import { Testimonial } from '../../../components/ui/molecules/Testimonial'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const config = {
	title: 'Example/Molecules/Testimonial',
	component: Testimonial,
}
export default config

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Testimonial {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	picture: '/images/testimonial-avatar.png',
	name: 'Irene Pereyra',
	title: "Interaction Design Fellow '19",
	linkedin: 'https://linkedin.com',
	statement:
		'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.',
	category: 'Education',
	subcategory: 'B.A. Visual Design',
}
