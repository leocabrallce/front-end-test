import React from 'react'

import { Cost } from '../../../components/ui/atoms/Cost'

const config = {
	title: 'Example/Atoms/Cost',
	component: Cost,
}
export default config

const Template = (args) => <Cost {...args} />

export const Default = Template.bind({})
Default.args = {
	name: 'Tuition covered',
	value: 20900,
}
