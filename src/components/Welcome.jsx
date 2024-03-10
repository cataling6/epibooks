import { Alert } from 'react-bootstrap'

const Welcome = () => {

  return (

    <Alert key={'dark'} className="text-center shadow" variant='dark' data-testid="welcomeId">
      <h1>Benvenuti in EpiBooks!</h1>

    </Alert>
  )
}

export default Welcome
