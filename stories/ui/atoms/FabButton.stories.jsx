import React from 'react';

import { FabButton } from '../../../components/ui/atoms/FabButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const config = {
  title: 'Example/FabButton',
  component: FabButton,
};
export default config;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FabButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  active: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  active: false,
};