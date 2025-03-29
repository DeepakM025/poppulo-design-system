import { Meta, StoryFn } from "@storybook/react";
import Tooltip, { TooltipProps } from "./Tooltip";
import { Button } from "../Button";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    text: { control: "text" },
  },
} as Meta<TooltipProps>;

const Template: StoryFn<TooltipProps> = (args) => (
  <Tooltip {...args}>
    <Button label="Hover over me" variant="primary" size="md" rounded={false} />
  </Tooltip>
);

export const Default = Template.bind({});
Default.args = {
  text: "This is a tooltip",
};
