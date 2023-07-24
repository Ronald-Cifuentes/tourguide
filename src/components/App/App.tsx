import { FC } from 'react'
import { AppProps } from './interfaces'
import { AppContainer, Step1, Step2, Step3, Step4, StepsContainer } from './App.styled'
import { Tour } from '../Tour'
import { steps } from '../Tour/steps'
import '../Tour/Tour.styles.css'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'

const App: FC<AppProps> = ({ dataTestId = 'app' }) => {
  return (
    <AppContainer data-testid={dataTestId}>
      <Tour {...{ steps }} />
      {/* <button onClick={() => setShow(true)}>Start Tour</button> */}
      <StepsContainer>
        <Step1>text 1</Step1>
        <Step2>text 2</Step2>
        <Step3>text 3</Step3>
        <Step4>text 4</Step4>
      </StepsContainer>
    </AppContainer>
  )
}

export default App
