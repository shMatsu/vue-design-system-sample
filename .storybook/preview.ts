import type { Preview } from '@storybook/vue3'
import DocumentationTemplate from './DocumentationTemplate.mdx'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: DocumentationTemplate,
    },
  },
  tags: ['autodocs'],
}

export default preview
