import { use } from "react";
import Friend from './Friend';

export default function Friends({ promiseRecive }) {

  const friendsPropise = use(promiseRecive);
  console.log(friendsPropise);

  return (
    <div className="card">
      <h3>Friends: {friendsPropise.length}</h3>
      {
        friendsPropise.map(friend => <Friend friendNm={friend} key={friend.id}></Friend>)
      }
    </div>
  )
}