import { userEvent, within, fn } from '@storybook/test'
import { Header } from './Header'

export default {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', {name: 'Log out'})
    await new Promise(resolve => setTimeout(resolve, 1000))
    await userEvent.click(button)
  }
};

export const LoggedOut = {};
