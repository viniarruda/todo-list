import colorsJson from '@design-system/theme/tokens/Colors.json'
import { ColorProps } from './types'

export const colors: ColorProps = {
  textPrimary: colorsJson.textPrimary,
  textSecondary: colorsJson.textSecondary,
  textTertiary: colorsJson.textTertiary,
  backgroundPrimary: colorsJson.backgroundPrimary,
  backgroundSecondary: colorsJson.backgroundSecondary,
  backgroundTertiary: colorsJson.backgroundTertiary,
  feedbackError: colorsJson.feedbackError,
  feedbackSuccess: colorsJson.feedbackSuccess,
}
