import React from 'react'

import { About } from '../../../components/ui/organisms/About'

const config = {
	title: 'Example/Organisms/About',
	component: About,
}
export default config

const Template = (args) => <About {...args} />

export const Primary = Template.bind({})
Primary.args = {}
