import { Meta, StoryFn } from "@storybook/react";
import { Notification, NotificationProps } from "../Notification";

export default {
  title: "Components/Notification",
  component: Notification,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    duration: { control: { type: "number", min: 1000, step: 1000 } },
  },
} as Meta<typeof Notification>;

const Template: StoryFn<NotificationProps> = (args) => <Notification {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Successfully saved!",
  description: "Anyone with the link can now view this file.",
  duration: 5000, // 5 seconds
};

export const ShortDuration = Template.bind({});
ShortDuration.args = {
  title: "Quick Notification",
  description: "This will disappear in 2 seconds.",
  duration: 2000, // 2 seconds
};

export const LongDuration = Template.bind({});
LongDuration.args = {
  title: "Longer Notification",
  description: "This notification stays for 10 seconds.",
  duration: 10000, // 10 seconds
};
