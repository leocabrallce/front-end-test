import React from 'react';

import { FabButton } from '../../../components/ui/atoms/FabButton';

const config = {
  title: 'Example/Atoms/FAB Button',
  component: FabButton,
};
export default config;

const Template = (args) => <FabButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  active: false,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
};