import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import SingleBook from './SingleBook'
import { Card, Col } from "react-bootstrap";
function BookDetails() {
    const [book, setBook] = useState([]);
    const [error, setError] = useState('')
    const { ASIN } = useParams()
    const url = 'https://epibooks.onrender.com/horror/' + ASIN

    const getBooks = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json();
            setBook(data);

        } catch (e) {
            setError(e);
        }
    }

    useEffect(() => {
        getBooks();
    }, [])
    console.log(book);
    return <>
        <div className="container d-flex">
            <div className="col">
                <Col lg={6} key={book.asin}>
                    <Card className='style-card'>
                        <Card.Img variant="top" src={book[0].img} />
                        <div>
                            <Card.Title style={{ color: 'black', fontSize: '1em' }} className='text-truncate' title={book[0].title}>{book[0].title}</Card.Title>
                        </div>
                    </Card >
                </Col>
            </div>
            <div className="col">
                useEffect
            </div>
        </div>
    </>
}

export default BookDetails