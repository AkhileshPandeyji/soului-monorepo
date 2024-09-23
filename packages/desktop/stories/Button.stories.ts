import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/Button/Button";

const meta = {
  title: "Desktop Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      description: "width of button",
    },
    height: {
      description: "height of button",
    },
    text: {
      description: "text of button",
    },
    bg: {
      description: "background color of button",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: 200,
    height: 40,
    text: "Primary",
    bg: "#000000",
  },
};

export const Secondary: Story = {
  args: {
    width: 200,
    height: 40,
    text: "Secondary",
    bg: "#eecd33",
  },
};

export const Large: Story = {
  args: {
    width: 300,
    height: 40,
    text: "Large",
    bg: "#eecd33",
  },
};

export const Small: Story = {
  args: {
    width: 50,
    height: 40,
    text: "Small",
    bg: "#eecd33",
  },
};
