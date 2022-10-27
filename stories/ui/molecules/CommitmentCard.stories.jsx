import React from 'react'

import { CommitmentCard } from '../../../components/ui/molecules/CommitmentCard'

const config = {
	title: 'Example/Molecules/Commitment Card',
	component: CommitmentCard,
}
export default config

const Template = (args) => <CommitmentCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
	title: 'Study commitment',
	primaryText: '3 hours / day',
	secondaryText:
		'You will complete 15 modules to graduate. Daily classes are 3 hours, plus coursework to complete in your own time.',
}
