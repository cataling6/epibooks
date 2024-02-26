import { useEffect, useState, useContext } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'
import { SelectedContext, useSelected } from '../context/SelectedContext'

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  //const [selected, setSelected] = useSelected();
  console.log(asin)
  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true)
      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' + asin,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlZTRkNWJkNWQxMjAwMTg5MGQzMmYiLCJpYXQiOjE3MDg5NDI3MTUsImV4cCI6MTcxMDE1MjMxNX0.sM8XiSfkq0P2o88rYqnBnVK56Ybqsr77r6XoRWUZvbw',
            },
          }
        )
        console.log(response)
        if (response.ok) {
          let comments = await response.json()
          setComments(comments)
          setIsLoading(false)
          setIsError(false)
        } else {
          console.log('error')
          setIsLoading(false)
          setIsError(true)
        }
      } catch (error) {
        console.log(error)
        setIsLoading(false)
        setIsError(true)
      }
    }
    if (asin) {
      getComments()
    }
  }, [asin])

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  )
}

export default CommentArea
