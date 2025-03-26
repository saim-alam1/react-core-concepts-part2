export default function Post({ postTitle }) {
  return (
    <div className="card">
      <h4>Title: {postTitle.title}</h4>
      <p>Title: {postTitle.id}</p>
    </div>
  )
}