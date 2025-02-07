import { toH } from 'hast-to-hyperscript'
import { HtmlNode } from '../../components/html/types'
import { editorSchemaToHast } from '../transformers/editor-schema-to-hast'
import { toCSSObject } from './to-css-object'
import { stringifyHastNode } from './stringify-hast-node-as-html'
import { toReactProps } from './to-react-props'
import { format } from './format'
import { getAttrSyntax } from './util'
import { CodegenOptions } from './types'
import { Theme } from '../../types/theme'
import { html } from './html'

const h = (theme: Theme) => (tagName: string, props: any, children?: any[]) => {
  const newProps = toReactProps(props)

  if (newProps.style) {
    const style = newProps.style
    delete newProps.style
    newProps.style = toCSSObject(style, theme)
  }

  return { tagName, props: newProps, children }
}

export const enhanceSFC = async (node: HtmlNode, options: CodegenOptions) => {
  const root = editorSchemaToHast(node, { addSlotTagSyntax: true })
  const functionBody = stringifyHastNode(toH(h(options?.theme), root))
  const htmlTxt = await html(node, options)

  const output = `
  export default function Component({ html, state = {} }) {
    ${getAttrSyntax(node)}
    return html\`
      ${htmlTxt}
    \`
  }
  `

  return format('js', output)
}
