import * as CSS from 'csstype'

export type ColorObject = {
  id?: string
  value: string
  themePath?: string
}

export type Color = string

export const enum FontRelativeLengthUnits {
  Ch = 'ch',
  Em = 'em',
  Ex = 'ex',
  Rem = 'rem',
}
export const enum ViewportPercentageLengthUnits {
  Vh = 'vh',
  Vw = 'vw',
  VMin = 'vmin',
  VMax = 'vmax',
}
export const enum AbsoluteLengthUnits {
  Px = 'px',
  Cm = 'cm',
  Mm = 'mm',
  In = 'in',
  Pc = 'pc',
  Pt = 'pt',
}
export const enum PercentageLengthUnits {
  Pct = '%',
}
export const enum UnitlessUnits {
  Number = 'number',
}
export const enum ThemeUnits {
  Theme = 'theme',
}
export const enum KeywordUnits {
  Keyword = 'keyword',
}
// Only use a subset for now to keep things simpler
export type LengthPercentageUnit = LengthUnit | PercentageLengthUnits.Pct

export const LENGTH_UNITS = ['em', 'rem', 'px'] as const
export type LengthUnit = typeof LENGTH_UNITS[number]

export const TIME_UNITS = ['ms', 's'] as const
export type TimeUnit = typeof TIME_UNITS[number]

export const ANGLE_UNITS = ['deg', 'turn', 'rad', 'grad'] as const
export type AngleUnit = typeof ANGLE_UNITS[number]
export interface Angle {
  value: number
  unit: AngleUnit
}

export const NUMBER_PERCENTAGE_UNITS = ['number', '%'] as const
export type NumberPercentageUnit = typeof NUMBER_PERCENTAGE_UNITS[number]
export interface NumberPercentage {
  value: number
  unit: NumberPercentageUnit
}

export type CSSUnitValue = {
  value: number | string
  unit: string
  themeId?: string
}
export type GenericLength = '0'
export type Length = CSSUnitValue | GenericLength
// This isn't differentiated type-wise but it's good to keep track of
// what actually accepts % values
export type LengthPercentage = Length
export type ResponsiveLength = Length[]
export type CSSKeywordValue = {
  value: string
}

export type Styles = CSS.PropertiesFallback
