import Score from './Score'
import './Student.css'

function Student({ students }) {
  return (
    <div className="Student">
      <h2>{students.name}</h2>
      <p>{students.bio}</p>
      <h3>Scores:</h3>
      <ul>
        {students.scores.map((score, idx) => (
          <Score key={idx} score={score} />
        ))}
      </ul>
    </div>
  )
}

export default Student
