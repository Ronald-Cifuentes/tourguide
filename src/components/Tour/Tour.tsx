import { FC, useEffect } from 'react'
import 'shepherd.js/dist/css/shepherd.css'
import { ShepherdTour, TourMethods } from 'react-shepherd'
import { offset } from '@floating-ui/dom'
import Start from './Start'
import tour from 'shepherd.js/src/types/tour'
import { TourProps } from './interfaces'
import { TourContainer } from './Tour.styled'

const tourOptions: tour.TourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true,
    },
    floatingUIOptions: {
      middleware: [offset({ mainAxis: 12 })],
    },
  },
  useModalOverlay: true,
  keyboardNavigation: true,
}

export const Tour: FC<TourProps> = ({
  dataTestId = 'tour',
  show = false,
  setShow = () => undefined,
  steps = [],
  customTourOptions = {},
}) => {
  useEffect(() => {
    if (show) {
      setShow(false)
    }
  }, [show, setShow])

  return (
    <TourContainer data-testid={dataTestId}>
      <ShepherdTour steps={steps} tourOptions={{ ...tourOptions, ...customTourOptions }}>
        <TourMethods>{tourContext => tourContext && <Start />}</TourMethods>
      </ShepherdTour>
    </TourContainer>
  )
}
