import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";

function BookDetails() {

    const [book, setBook] = useState([]);
    const [commentInviato, setCommentInviato] = useState(false);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const [deletedComment, setDeletedComment] = useState('');
    const [author, setAuthor] = useState('');
    const [rate, setRate] = useState('');
    const [error, setError] = useState('')
    const { ASIN } = useParams()
    const [commentDeleted, setCommentDeleted] = useState(false);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlZTRkNWJkNWQxMjAwMTg5MGQzMmYiLCJpYXQiOjE3MDk5MjQ5MTEsImV4cCI6MTcxMTEzNDUxMX0.EToU0ZBKiT7mLOTdd_9ctJJfz-VHJR81AWGtXQxA98k";
    const urlGetBoook = 'https://epibooks.onrender.com/fantasy/' + ASIN;
    const urlGetComments = `https://striveschool-api.herokuapp.com/api/books/${ASIN}/comments/`;
    const urlSubmit = 'https://striveschool-api.herokuapp.com/api/comments';
    const urlDelete = 'https://striveschool-api.herokuapp.com/api/comments/';

    const dataToSubmit = {
        comment: comment,
        rate: rate,
        elementId: ASIN
    };

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


    const submitComment = async (e) => {

        e.preventDefault();

        try {
            const response = await fetch(urlSubmit, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(dataToSubmit)

            })
            if (response.ok) {
                console.log("dati inviati");
                setCommentInviato(true)
            } else {
                setError(response.status);
            }
            setComment('');
            setRate('');

        } catch (er) {
            setError(er);
        }
    }

    const deleteComment = async (commObj) => {

        try {
            const response = await fetch(urlDelete + commObj._id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },

            })
            if (response.ok) {
                setCommentDeleted(true)
                setAuthor(commObj.author)
                setDeletedComment(commObj.comment) //mi imposto il commento che è stato cancellato x spararlo in sweetalert
            } else {
                setError(response.status);
            }

        } catch (er) {
            setError(er);
        }
    }


    useEffect(() => {
        getBooks();
        getComments();

        if (error)
            new Swal({
                title: 'Errore: ' + error,
                text: "Verifica i dati inseriti",
                icon: 'error',
                showLoaderOnConfirm: true,
                willClose: () => {
                    setError(null)
                }
            });
        if (commentInviato) {
            new Swal({
                title: 'Inserito!',
                text: "I tuoi dati sono stati inseriti, clicca ok per verificare!",
                icon: 'success',
                showLoaderOnConfirm: true,
                willClose: () => {
                    setError(null);
                    setCommentInviato(false);
                }
            });
        }

        if (commentDeleted) {
            new Swal({
                title: 'Commento Cancellato!',
                text: "Hai cancellato il commento '" + deletedComment + "' di " + author,
                icon: 'success',
                showLoaderOnConfirm: true,
                willClose: () => {
                    setError(null);
                    setAuthor(null)
                    setCommentDeleted(false); //controllo se il commento è stato cancellato
                    setDeletedComment(null);  //svuoto il commento cancellato

                }
            });
        }
        /* eslint-disable */
    }, [error, commentDeleted, commentInviato])

    return <>
        <MyNav />
        <div className="container d-flex gap-2">
            <div className="col height-book-details rounded-2 p-2 bg-gradient bg-dark shadow d-flex justify-content-between flex-column align-items-center">
                {book.map((b) => {
                    return (
                        <Col lg={6} xs={6} sm={6} md={6} key={b.asin} className="hover-animation">
                            <Card className='style-card '>
                                <Card.Img variant="top" src={b.img} />
                                <div>
                                    <Card.Title style={{ color: 'black', fontSize: '1em' }} className='text-truncate' title={b.title}>{b.title}</Card.Title>
                                </div>
                            </Card >
                        </Col>

                    )
                })}

                <div className="d-flex flex-column form-control gap-2"  >
                    <label>Voto:</label>
                    <select value={rate} className="form-select" onChange={(e) => setRate(e.target.value)}>
                        <option className="d-none">Scegli voto:</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <label>Recensione:</label>
                    <textarea className="form-control no-resize" placeholder="Recensisci..." value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    <input type="button" className="btn btn-danger" value="invia" onClick={submitComment} />
                </div>

            </div>
            <div className="col height-book-details rounded-2 p-2 bg-gradient bg-dark shadow ">
                {comments.map((c) => {
                    return (

                        <Col lg={12} key={c._id} >
                            <div className="form-control mb-2 fade show">
                                <div className="d-flex justify-content-end" id={c._id}><span className="btn btn-close custom-close-position" onClick={(e) => deleteComment(c)}></span></div>
                                <p className="fw-bold">Autore: <span className="fw-normal">{c.author}</span></p>
                                <p className="fw-bold">Commento: <span className="fw-normal">{c.comment}</span></p>
                                <p className="fw-bold">Valutazione: <span className="fw-normal">{c.rate}</span></p>
                            </div>
                        </Col>
                    )
                })}
            </div>
        </div>
        <MyFooter />
    </>
}

export default BookDetails