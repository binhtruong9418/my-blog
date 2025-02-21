import { defineEcConfig } from 'astro-expressive-code'

import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import { pluginFramesTexts } from '@expressive-code/plugin-frames'

pluginFramesTexts.addLocale('en_US',{
  copyButtonTooltip: 'Click to copy',
  copyButtonCopied: 'Copied!'
})

export default defineEcConfig({
  defaultLocale: 'en_US',
  plugins: [ pluginLineNumbers(), pluginCollapsibleSections()],
  themes: ['light-plus','dark-plus'],
  themeCssSelector:() => `.dark`,
  useDarkModeMediaQuery: false,
  defaultProps: {
    overridesByLang: {
      'shell': {
        showLineNumbers: false,
      }
    }
  }
})