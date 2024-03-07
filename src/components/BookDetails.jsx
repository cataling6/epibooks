import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
function BookDetails() {

    const [book, setBook] = useState([]);
    const [comments, setComments] = useState([]);
    const [error, setError] = useState('')
    const { ASIN } = useParams()
    const urlGetBoook = 'https://epibooks.onrender.com/fantasy/' + ASIN;
    const urlGetComments = `https://striveschool-api.herokuapp.com/api/books/${ASIN}/comments/`

    const getBooks = async () => {
        try {
            const response = await fetch(urlGetBoook)
            const data = await response.json();
            setBook(data);

        } catch (e) {
            setError(e);
        }
    }

    const getComments = async () => {
        try {
            const response = await fetch(urlGetComments)
            const data = await response.json();
            setComments(data);

        } catch (e) {
            setError(e);
        }
    }

    useEffect(() => {
        getBooks();
        getComments();
    }, [])

    return <>
        <div className="container d-flex">
            <div className="col">
                {book.map((b) => {
                    console.log(b);
                    return (
                        <Col lg={6} key={b.asin}>
                            <Card className='style-card'>
                                <Card.Img variant="top" src={b.img} />
                                <div>
                                    <Card.Title style={{ color: 'black', fontSize: '1em' }} className='text-truncate' title={b.title}>{b.title}</Card.Title>
                                </div>
                            </Card >
                        </Col>
                    )
                })}
            </div>
            <div className="col">
                {comments.map((c) => {
                    console.log(c);
                    return (

                        <Col lg={12} key={c._id} >
                            <div className="form-control mb-2">
                                <p className="fw-bold">Autore: <span className="fw-normal">{c.author}</span></p>
                                <p className="fw-bold">Commento: <span className="fw-normal">{c.comment}</span></p>
                                <p className="fw-bold">Valutazione: <span className="fw-normal">{c.rate}</span></p>
                            </div>
                        </Col>
                    )
                })}
            </div>
        </div>
    </>
}

export default BookDetails