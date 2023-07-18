import Score from './Score'

function Student({ students }) {
  console.log(students)
  return (
    <>
      <h1>{students.name}</h1>
      <p>{students.bio}</p>
      <p>Scores:</p>
      {students.scores.map((score) => (
        <Score score={score} />
      ))}
    </>
  )
}

export default Student
