import { Card } from 'react-bootstrap'
import "../css/SingleBook.css"
import { useSelected } from '../context/SelectedContext'



const SingleBook = ({ book, url }) => {

  const { selected, setSelected } = useSelected();

  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Card
          onClick={() => setSelected(selected === book.asin ? "" : book.asin)}
          style={{ border: selected === book.asin ? '3px solid red' : 'none' }}
          className='style-card'
        >
          <Card.Img variant="top" src={book.img} />
          <div>
            <Card.Title style={{ color: 'black', fontSize: '10px' }} className='text-truncate' title={book.title}>{book.title}</Card.Title>
          </div>
        </Card >
      </a>
    </>

  )
}

export default SingleBook
