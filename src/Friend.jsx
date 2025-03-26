export default function Friend({ friendNm }) {
  console.log(friendNm);

  const { name, email, phone } = friendNm;

  return (
    <div className="card">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  )
}