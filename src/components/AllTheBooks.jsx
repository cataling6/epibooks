import { useSearch } from '../context/SearchContext'
import { Col, Row } from 'react-bootstrap'
//import fantasy from '../data/fantasy.json'
import { BookContext } from '../context/BooksContext'
import SingleBook from './SingleBook'
import "../css/AllTheBooks.css"
//import CommentArea from './CommentArea'
import { useContext, useState } from 'react'
import { SelectedProvider } from '../context/SelectedContext'

const AllTheBooks = () => {
  const { searchQuery } = useSearch();
  const { books } = useContext(BookContext);
  const [url, setUrl] = useState("")
  const urls = [];
  // const [bookComment, setBookComment] = useState(null);
  // const [selected, setSelected] = useState('')

  console.log(urls)
  return (
    <>
      <Row className='d-flex' >
        <SelectedProvider>
          <Col className="g-2 mt-3 flex-wrap d-flex height-with-scroll gap-3" lg={12}>
            {
              books.filter((b) => b.title.toLowerCase().includes(searchQuery)).map((book) => {
                const bookUrl = `/bookDetails/${book.asin}`;
                urls.push(bookUrl);
                return (
                  <Col lg={2} key={book.asin}>
                    <SingleBook book={book} url={bookUrl} />
                  </Col>
                )
              })
            }
          </Col>
          {/* <Col className="g-2 mt-3" lg={6}><CommentArea asin={selected} />
          </Col> */}
        </SelectedProvider>

      </Row >
    </>
  )

}

export default AllTheBooks
