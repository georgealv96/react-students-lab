function Student({ students }) {
  return (
    <>
      <h1>{students.name}</h1>
      <p>{students.bio}</p>
    </>
  )
}

export default Student
