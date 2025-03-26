import { use } from "react";
import Post from './Post';

export default function Posts({ promisePosts }) {

  const posts = use(promisePosts);
  console.log(posts);

  return (
    <div className="card">
      <h2>All posts are here: {posts.length}</h2>
      {
        posts.map(post => <Post key={post.id} postTitle={post}></Post>)
      }
    </div>
  )
}