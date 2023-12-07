import { Container } from "react-bootstrap";
import { useGetPostsQuery } from "./api/hooks/useGetPostsQuery";
import { Post } from "./types/post";
import { PostCard } from "./components/PostCard";

const App = () => {
  // @name  useGetPostsQuery
  // @desc  returns an array of posts of type: Post[]
  const { data: posts, isLoading } = useGetPostsQuery()

  // React Query Is Loading State
  if (isLoading) return <div>Loading...</div>

  return (
    <Container>
      <h1 className="text-center">Posts</h1>
      {posts && posts.map(post => (
        <PostCard key={post.id} {...post} />
      ))}
    </Container>
  )
}

export default App;