import tour from 'shepherd.js/src/types/tour'
import { ShepherdOptionsWithType } from 'react-shepherd'

export interface TourProps {
  dataTestId?: string
  show?: boolean
  setShow?: (show: boolean) => void
  steps?: ShepherdOptionsWithType[]
  customTourOptions?: tour.TourOptions
}
