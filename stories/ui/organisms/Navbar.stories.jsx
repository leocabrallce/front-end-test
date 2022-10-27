import React from 'react'

import { Navbar } from '../../../components/ui/organisms/Navbar'

const config = {
	title: 'Example/Organisms/Navbar',
	component: Navbar,
}
export default config

const Template = (args) => <Navbar {...args} />

export const Primary = Template.bind({})
Primary.args = {}
