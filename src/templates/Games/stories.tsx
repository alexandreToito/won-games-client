import { Story, Meta } from '@storybook/react/types-6-0'
import Games from '.'

export default {
  title: 'Games',
  component: Games
} as Meta

export const Default: Story = () => <Games />
