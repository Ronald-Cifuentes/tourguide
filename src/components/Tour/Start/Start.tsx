import { FC, useContext, useEffect } from 'react'
import { StartProps } from './interfaces'
import { ShepherdTourContext } from 'react-shepherd'

const Start: FC<StartProps> = () => {
  const tourX = useContext(ShepherdTourContext)

  useEffect(() => {
    if (tourX) {
      tourX.start()
    }
  }, [])

  return null
}

export default Start
