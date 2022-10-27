import React from 'react';

import { FabButton } from '../../../components/ui/atoms/FabButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const config = {
  title: 'Example/Atoms/FAB Button',
  component: FabButton,
};
export default config;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FabButton {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  active: false,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
};