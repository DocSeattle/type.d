import { useState } from "react"

export default function Leaderboard() {
  const [filter, setFilter] = useState('');
  const [scores, setScores] = useState([]);

  fetch('http://localhost:5000/api/leaderboard', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: "GET",
  }).then(response => response.json())
    .then(resJSON => { setScores(resJSON); console.log(resJSON) });
  return (
    <ol>
      {scores.map((score, index) => {
        return (
          <li>
          </li>
        )
      })}
    </ol>
  )
}
