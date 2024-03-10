import { Spinner } from 'react-bootstrap'

const Loading = () => (
  <div className='container d-flex align-items-center flex-column '>
    <h2>Caricando i libri, aspetta n'attimo</h2>
    <Spinner animation="border" variant="success" className="mt-2" />
  </div>
)

export default Loading
