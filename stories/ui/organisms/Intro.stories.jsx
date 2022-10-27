import React from 'react'

import { Intro } from '../../../components/ui/organisms/Intro'

const config = {
	title: 'Example/Organisms/Intro',
	component: Intro,
}
export default config

const Template = (args) => <Intro {...args} />

export const Primary = Template.bind({})
Primary.args = {}
