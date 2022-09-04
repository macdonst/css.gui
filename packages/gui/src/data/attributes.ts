const GLOBAL_ATTRIBUTES = ['class', 'id', 'title']
const SVG_PRESENTATION_ATTRIBUTES = [
    'clip-path',
    'clip-rule',
    'clipPathUnits',
    'color',
    'display',
    'fill',
    'fill-opacity',
    'fill-rule',
    'filter',
    'mask',
    'opacity',
    'shape-rendering',
    'stroke',
    'stroke-dasharray',
    'stroke-dashoffset', 
    'stroke-linecap',
    'stroke-linejoin',
    'stroke-miterlimit',
    'stroke-opacity',
    'stroke-width',
    'transform',
    'vector-effect',
    'visibility',
]

const FILTER_PRIMITIVE_ATTRIBUTES = [
  'height',
  'width',
  'x',
  'y',
  'result',
]

export const ATTRIBUTE_MAP: Record<string, string[]> = {
  a: [
    ...GLOBAL_ATTRIBUTES,
    'href',
    'target',
    'download',
    'hreflang',
    'referrerpolicy',
    'rel',
  ],
  abbr: GLOBAL_ATTRIBUTES,
  address: GLOBAL_ATTRIBUTES,
  animation: [ 
    ...GLOBAL_ATTRIBUTES,
    'begin', 
    'dur', 
    'end', 
    'min', 
    'max', 
    'restart', 
    'repeatCount', 
    'repeatDur', 
    'fill',
    'calcMode', 
    'values', 
    'keyTimes', 
    'keySplines', 
    'from', 
    'to', 
    'by',
    'attributeName', 
    'additive', 
    'accumulate',
  ],
  animationMotion: [ 
    ...GLOBAL_ATTRIBUTES,
    'keyPoints',
    'path',
    'rotate',
    'begin', 
    'dur', 
    'end', 
    'min', 
    'max', 
    'restart', 
    'repeatCount', 
    'repeatDur', 
    'fill',
    'calcMode', 
    'values', 
    'keyTimes', 
    'keySplines', 
    'from', 
    'to', 
    'by',
    'attributeName', 
    'additive', 
    'accumulate',
  ],
  area: [...GLOBAL_ATTRIBUTES, 'shape', 'coords', 'href', 'alt', ],
  article: GLOBAL_ATTRIBUTES,
  aside: GLOBAL_ATTRIBUTES,
  audio: [
    ...GLOBAL_ATTRIBUTES,
    'src',
    'autoplay',
    'controls',
    'crossorigin',
    'disableremoteplayback',
    'loop',
    'muted',
    'preload',
  ],
  b: GLOBAL_ATTRIBUTES,
  bdi: GLOBAL_ATTRIBUTES,
  bdo: GLOBAL_ATTRIBUTES,
  blockquote: [...GLOBAL_ATTRIBUTES, 'cite'],
  br: GLOBAL_ATTRIBUTES,
  button: [
    'type',
    'disabled',
    'name',
    'value',
    'autofocus',
    'form',
    'formaction',
    'formenctype',
    'formnovalidate',
    'formtarget',
    'formmethod',
    'step',
    'formnovalidate',
    'formtarget',
  ],
  caption: GLOBAL_ATTRIBUTES,
  cite: GLOBAL_ATTRIBUTES,
  clipPath: [
    ...GLOBAL_ATTRIBUTES,
    ...SVG_PRESENTATION_ATTRIBUTES,
  ],
  code: GLOBAL_ATTRIBUTES,
  col: GLOBAL_ATTRIBUTES,
  colgroup: GLOBAL_ATTRIBUTES,
  data: [...GLOBAL_ATTRIBUTES, 'datetime'],
  datalist: GLOBAL_ATTRIBUTES,
  dd: GLOBAL_ATTRIBUTES,
  del: GLOBAL_ATTRIBUTES,
  desc: GLOBAL_ATTRIBUTES,
  details: GLOBAL_ATTRIBUTES,
  dfn: GLOBAL_ATTRIBUTES,
  dialog: [...GLOBAL_ATTRIBUTES, 'open'],
  div: GLOBAL_ATTRIBUTES,
  dl: GLOBAL_ATTRIBUTES,
  dt: GLOBAL_ATTRIBUTES,
  em: GLOBAL_ATTRIBUTES,
  feBlend: [
    ...GLOBAL_ATTRIBUTES,    
    ...FILTER_PRIMITIVE_ATTRIBUTES,
    ...SVG_PRESENTATION_ATTRIBUTES,
    'in',
    'in2',
    'mode',
  ],
  feColorMatrix: [
    ...GLOBAL_ATTRIBUTES,
    ...FILTER_PRIMITIVE_ATTRIBUTES,
    ...SVG_PRESENTATION_ATTRIBUTES,
   'in',
   'type',
   'values',
  ],
  feComponentTransfer: [
    ...GLOBAL_ATTRIBUTES,
    ...FILTER_PRIMITIVE_ATTRIBUTES,
    ...SVG_PRESENTATION_ATTRIBUTES,
   'in',
  ],
  feComposite: [
    ...GLOBAL_ATTRIBUTES,
    ...FILTER_PRIMITIVE_ATTRIBUTES,
    ...SVG_PRESENTATION_ATTRIBUTES,
   'in',
   'in2',
   'operator',
   'ki',
   'k2',
   'k3',
   'k4',
  ],
  feConvolveMatrix: [
    ...GLOBAL_ATTRIBUTES,
    ...FILTER_PRIMITIVE_ATTRIBUTES,
    ...SVG_PRESENTATION_ATTRIBUTES,
    'in',
    'order',
    'kernelMatrix',
    'divisor',
    'bias',
    'targetX',
    'targetY',
    'edgeMode',
    'kernelUnitLength',
    'preserveAlpha',

  ],
  feDiffuseLighting: [
    ...GLOBAL_ATTRIBUTES,
    ...FILTER_PRIMITIVE_ATTRIBUTES,
    ...SVG_PRESENTATION_ATTRIBUTES,
    'in',
    'surfaceScale',
    'diffuseConstant',
    'kernelUnitLength',
  ],
  feDisplacementMap: [
    ...GLOBAL_ATTRIBUTES,
    ...FILTER_PRIMITIVE_ATTRIBUTES,
    ...SVG_PRESENTATION_ATTRIBUTES,
    'in',
    'in2',
    'scale',
    'xChannelSelector',
    'yChannelSelector',
  ],
  feFlood: [
    ...GLOBAL_ATTRIBUTES,
    ...FILTER_PRIMITIVE_ATTRIBUTES,
    ...SVG_PRESENTATION_ATTRIBUTES,
    'flood-color',
    'flood-opacity',
  ],
  feGaussianBlur: [
    ...GLOBAL_ATTRIBUTES,
    ...FILTER_PRIMITIVE_ATTRIBUTES,
    ...SVG_PRESENTATION_ATTRIBUTES,
    'in',
    'stdDeviation',
    'edgeMode',
  ],
  feImage: [
    ...GLOBAL_ATTRIBUTES,
    ...FILTER_PRIMITIVE_ATTRIBUTES,
    ...SVG_PRESENTATION_ATTRIBUTES,
    'xlink:href',
    'preserveAspectRatio',
  ],
  feMerge: [
    ...GLOBAL_ATTRIBUTES,
    ...FILTER_PRIMITIVE_ATTRIBUTES,
    ...SVG_PRESENTATION_ATTRIBUTES,
  ],
  feMergeNode: [
    ...GLOBAL_ATTRIBUTES,
    ...FILTER_PRIMITIVE_ATTRIBUTES,
    ...SVG_PRESENTATION_ATTRIBUTES,
    'in',
  ],
  feMorphology: [
    ...GLOBAL_ATTRIBUTES,
    ...FILTER_PRIMITIVE_ATTRIBUTES,
    ...SVG_PRESENTATION_ATTRIBUTES,
    'in',
    'operator',
    'radius',
  ],
  feOffset: [
    ...GLOBAL_ATTRIBUTES,
    ...FILTER_PRIMITIVE_ATTRIBUTES,
    ...SVG_PRESENTATION_ATTRIBUTES,
    'in',
    'dx',
    'dy',
  ],
  fePointLight: [
    ...GLOBAL_ATTRIBUTES,
    ...FILTER_PRIMITIVE_ATTRIBUTES,
    ...SVG_PRESENTATION_ATTRIBUTES,
    'x',
    'y',
    'z',
  ],
  feSpecularLighting: [
    ...GLOBAL_ATTRIBUTES,
    ...FILTER_PRIMITIVE_ATTRIBUTES,
    ...SVG_PRESENTATION_ATTRIBUTES,
    'in',
    'surfaceScale',
    'specularConstant',
    'specularExponent',
    'kernelUnitLength',
  ],
  feSpotLight: [
    ...GLOBAL_ATTRIBUTES,
    ...FILTER_PRIMITIVE_ATTRIBUTES,
    ...SVG_PRESENTATION_ATTRIBUTES,
    'x',
    'y',
    'z',
    'pointsAtX',
    'pointsAtY',
    'pointsAtZ',
    'specularExponent',
    'limitingConeAngle',
  ],
  feTile: [
    ...GLOBAL_ATTRIBUTES,
    ...FILTER_PRIMITIVE_ATTRIBUTES,
    ...SVG_PRESENTATION_ATTRIBUTES,
    'in',
  ],
  feTurbulence: [
    ...GLOBAL_ATTRIBUTES,
    ...FILTER_PRIMITIVE_ATTRIBUTES,
    ...SVG_PRESENTATION_ATTRIBUTES,
    'baseFrequency',
    'numOctaves',
    'seed',
    'stitchTiles',
    'type',
  ],
  fieldset: [...GLOBAL_ATTRIBUTES, 'disabled', 'form', 'name'],
  figcaption: GLOBAL_ATTRIBUTES,
  figure: GLOBAL_ATTRIBUTES,
  footer: GLOBAL_ATTRIBUTES,
  form: [
    ...GLOBAL_ATTRIBUTES,
    'accept-charset',
    'autocomplete',
    'name',
    'rel',
    'action',
    'enctype',
    'method',
    'novalidate',
    'target',
  ],
  h1: GLOBAL_ATTRIBUTES,
  h2: GLOBAL_ATTRIBUTES,
  h3: GLOBAL_ATTRIBUTES,
  h4: GLOBAL_ATTRIBUTES,
  h5: GLOBAL_ATTRIBUTES,
  h6: GLOBAL_ATTRIBUTES,
  header: GLOBAL_ATTRIBUTES,
  hr: GLOBAL_ATTRIBUTES,
  i: GLOBAL_ATTRIBUTES,
  img: [
    ...GLOBAL_ATTRIBUTES,
    'alt',
    'src',
    'srcset',
    'width',
    'height',
    'sizes',
    'referrerpolicy',
    'loading',
    'fetchpriority',
    'ismap',
    'decoding',
    'crossorigin',
  ],
  input: [
    ...GLOBAL_ATTRIBUTES,
    // TODO: Adjust attribute list based on type value
    'type',
    'value', // all
    'name', // all
    'disabled', // almost all
    'required', // almost all
    'checked', // radio, checkbox
    'autocomplete', // all
    'dirname', // text, search
    'form', // all
    'formaction', // image, submit
    'formenctype', // image, submit
    'formmethod', // image, submit
    'formnovalidate', // image, submit
    'formtarget', // image, submit
    'alt', // image
    'src', // image
    'list', // almost all
    'max', // numeric types
    'maxlength', // password, search, tel, text, url
    'min', // numeric types
    'minlength', // password, search, tel, text, url
    'step', // numeric types
    'capture', // file
    'accept', // file
    'multiple', // email, file
    'pattern', // password, text, tel
    'placeholder', // password, search, tel, text, url
    'readonly', // almost all
    'size', // email, password, tel, text, url
  ],
  kbd: GLOBAL_ATTRIBUTES,
  label: [...GLOBAL_ATTRIBUTES, 'for'],
  legend: GLOBAL_ATTRIBUTES,
  li: [...GLOBAL_ATTRIBUTES, 'value', 'type'],
  main: GLOBAL_ATTRIBUTES,
  map: [...GLOBAL_ATTRIBUTES, 'name', ],
  mark: GLOBAL_ATTRIBUTES,
  menu: GLOBAL_ATTRIBUTES,
  menuitem: GLOBAL_ATTRIBUTES,
  meter: [
    ...GLOBAL_ATTRIBUTES,
    'value',
    'min',
    'max',
    'low',
    'high',
    'optimum',
  ],
  nav: GLOBAL_ATTRIBUTES,
  noscript: GLOBAL_ATTRIBUTES,
  ol: [...GLOBAL_ATTRIBUTES, 'reversed', 'start', 'type'],
  optgroup: GLOBAL_ATTRIBUTES,
  option: GLOBAL_ATTRIBUTES,
  output: GLOBAL_ATTRIBUTES,
  p: GLOBAL_ATTRIBUTES,
  picture: GLOBAL_ATTRIBUTES,
  pre: GLOBAL_ATTRIBUTES,
  progress: [...GLOBAL_ATTRIBUTES, 'max', 'value'],
  q: [...GLOBAL_ATTRIBUTES, 'cite'],
  rp: GLOBAL_ATTRIBUTES,
  rt: GLOBAL_ATTRIBUTES,
  rtc: GLOBAL_ATTRIBUTES,
  ruby: GLOBAL_ATTRIBUTES,
  s: GLOBAL_ATTRIBUTES,
  samp: GLOBAL_ATTRIBUTES,
  section: GLOBAL_ATTRIBUTES,
  set: [
    ...GLOBAL_ATTRIBUTES, 
    'attributeName',
    'to',
    'begin',
    'dur',
    'end',
    'min',
    'max',
    'restart',
    'repeatCount',
    'repeatDur',
    'fill',
  ],
  slot: [...GLOBAL_ATTRIBUTES, 'name'],
  small: GLOBAL_ATTRIBUTES,
  source: [
    ...GLOBAL_ATTRIBUTES,
    'type',
    'src',
    'srcset',
    'width',
    'height',
    'sizes',
    'media',
  ],
  span: GLOBAL_ATTRIBUTES,
  strong: GLOBAL_ATTRIBUTES,
  sub: GLOBAL_ATTRIBUTES,
  sup: GLOBAL_ATTRIBUTES,
  table: GLOBAL_ATTRIBUTES,
  tbody: GLOBAL_ATTRIBUTES,
  td: [...GLOBAL_ATTRIBUTES, 'colspan', 'headers', 'rowspan'],
  template: GLOBAL_ATTRIBUTES,
  textarea: [
    ...GLOBAL_ATTRIBUTES,
    'autocomplete',
    'autofocus',
    'cols',
    'disabled',
    'form',
    'maxlength',
    'minlength',
    'name',
    'placeholder',
    'readonly',
    'required',
    'rows',
    'spellcheck',
    'wrap',
  ],
  tfoot: GLOBAL_ATTRIBUTES,
  th: GLOBAL_ATTRIBUTES,
  thead: GLOBAL_ATTRIBUTES,
  time: [...GLOBAL_ATTRIBUTES, 'datetime'],
  tr: GLOBAL_ATTRIBUTES,
  track: [...GLOBAL_ATTRIBUTES, 'default', 'kind', 'label', 'src', 'srclang'],
  u: GLOBAL_ATTRIBUTES,
  ul: GLOBAL_ATTRIBUTES,
  var: GLOBAL_ATTRIBUTES,
  video: [
    ...GLOBAL_ATTRIBUTES,
    'src',
    'width',
    'height',
    'autoplay',
    'loop',
    'muted',
    'playsinline',
    'poster',
    'preload',
    'autopictureinpicture',
    'disabledpictureinpicture',
    'disabledremoteplayback',
    'controls',
    'constrolslist',
    'crossorigin',
  ],
  wbr: GLOBAL_ATTRIBUTES,
  svg: [
    ...GLOBAL_ATTRIBUTES, 
    ...SVG_PRESENTATION_ATTRIBUTES,
    'viewBox',
    'width',
    'height',
    'version', 
    'xmlns', 
    'preserveAspectRatio',
  ],
  circle: [
    ...GLOBAL_ATTRIBUTES, 
    ...SVG_PRESENTATION_ATTRIBUTES,
    'cx', 'cy', 'r',
  ],
  ellipse: [
    'cx', 'cy', 'rx', 'ry', 'pathLength',
    ...SVG_PRESENTATION_ATTRIBUTES,
    ...GLOBAL_ATTRIBUTES, 
  ],
  rect: [
    ...GLOBAL_ATTRIBUTES, 
    ...SVG_PRESENTATION_ATTRIBUTES, 
    'width', 'height', 'x', 'y', 'rx', 'ry'
  ],
  line: [
    ...GLOBAL_ATTRIBUTES, 
    ...SVG_PRESENTATION_ATTRIBUTES, 
    'x1', 'y1', 'x2', 'y2',
  ],
  marker: [
    ...GLOBAL_ATTRIBUTES, 
    'markerHeight',
    'markerUnits',
    'markerWidth',
    'orient',
    'preserveAspectRatio',
    'refX',
    'refY',
    'viewBox',

  ],
  mask: [
    ...GLOBAL_ATTRIBUTES, 
    ...SVG_PRESENTATION_ATTRIBUTES, 
    'width', 'height', 
    'x', 'y',
    'maskUnits',
    'maskContentUnits',
  ],
  mpath: [
    ...GLOBAL_ATTRIBUTES, 
    'xlink:href',
  ],
  path: [
    ...GLOBAL_ATTRIBUTES, 
    ...SVG_PRESENTATION_ATTRIBUTES, 
    'd',
    'pathLength',
  ],
  pattern: [
    ...GLOBAL_ATTRIBUTES, 
    ...SVG_PRESENTATION_ATTRIBUTES, 
    'href',
    'width', 
    'height', 
    'patternContentUnits', 
    'patternTransform', 
    'patternUnits',
    'preserveAspectRatio',
    'viewBox',
    'x',
    'y',
    'xlink:href',
  ],
  polyline: [
    ...GLOBAL_ATTRIBUTES,
    ...SVG_PRESENTATION_ATTRIBUTES,
    'points' 
  ],
  polygon: [
    ...GLOBAL_ATTRIBUTES, 
    ...SVG_PRESENTATION_ATTRIBUTES, 
    'points', 
    'pathLength', 
  ],
  stop: [
    ...GLOBAL_ATTRIBUTES, 
    'offset', 
    'stop-color', 
    'stop-opacity', 
  ],
  symbol: [
    ...GLOBAL_ATTRIBUTES, 'width', 'height', 'viewBox', 'x', 'y', 'refX', 'refY'],
  use: [...GLOBAL_ATTRIBUTES, 'href', 'x', 'y', 'clip-path'],
  defs: [...GLOBAL_ATTRIBUTES],
  g: [...GLOBAL_ATTRIBUTES ],
}
