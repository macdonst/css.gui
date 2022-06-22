import { GEOMETRY_BOX_KEYWORDS } from '../../types/css'
import { image } from './image'
import { joinSchemas } from './joinSchemas'
import { listSchema } from './list'
import { objectSchema } from './object'
import { position } from './position'
import { keyword, lengthPercentage } from './primitives'
import { tupleSchema } from './tuple'

const composite = keyword(['add', 'subtract', 'intersect', 'exclude'])
const clip = keyword([...GEOMETRY_BOX_KEYWORDS, 'no-clip'])
const mode = keyword(['alpha', 'luminance', 'match-source'])
const origin = keyword(GEOMETRY_BOX_KEYWORDS)
const repeat = joinSchemas([
  keyword(['repeat-x', 'repeat-y']),
  tupleSchema({
    itemSchema: keyword(['repeat', 'space', 'round', 'no-repeat']),
    labels: ['x', 'y'],
  }),
])
const size = joinSchemas([
  keyword(['cover', 'contain']),
  tupleSchema({
    itemSchema: joinSchemas([
      keyword(['auto']),
      lengthPercentage({
        defaultValue: { value: 100, unit: '%' },
      }),
    ]),
    labels: ['x', 'y'],
  }),
])

export const maskComposite = listSchema({ itemSchema: composite })
export const maskClip = listSchema({ itemSchema: clip })
export const maskMode = listSchema({ itemSchema: mode })
export const maskOrigin = listSchema({ itemSchema: origin })
export const maskRepeat = listSchema({ itemSchema: repeat })
export const maskSize = listSchema({ itemSchema: size })
export const maskImage = listSchema({ itemSchema: image })
export const maskPosition = listSchema({ itemSchema: position })

const singleMask = objectSchema({
  fields: {
    image,
    position,
    size,
    repeat,
    origin,
    clip,
    composite,
    mode,
  },
  slash: ['size'],
})
export const mask = listSchema({ itemSchema: singleMask })
