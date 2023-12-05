import { useGetPostsQuery } from "./api/hooks/useGetPostsQuery";
import { Post } from "./types/post";

const App = () => {
  const { data: posts, isLoading } = useGetPostsQuery()
  if (isLoading) return <div>Loading...</div>
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts?.map((post: Post) => (
          <li key={post.id}>
            <div>{post.title}</div>
            <div>{post.image}</div>
            <div>{post.userId}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;