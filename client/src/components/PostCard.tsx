import { Button, Card, Stack } from "react-bootstrap"
import { Post } from "../types/post"
import { useState } from "react"
import { Prev } from "react-bootstrap/esm/PageItem"

type PostCardProps = {} & Post

export const PostCard = ({ id, userId, title, images, description }: PostCardProps) => {
  const [index, setIndex] = useState<number>(0)
  console.log(index)

  const previousImage = () => {
    setIndex(currentIndex => {
      return currentIndex - 1
    })
  }

  const nextImage = () => {
    setIndex(currentIndex => {
       return currentIndex + 1
    })
  }

  return (
    <Card className="mb-3">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img src={images[index]} />
          <Stack direction="horizontal">
            <Button variant="outline-primary" className="me-auto" onClick={() => previousImage()}>Previous</Button>
            <Button variant="outline-primary" onClick={() => nextImage()}>Next</Button>
          </Stack>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
    </Card>
  )
}