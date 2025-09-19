const Welcome = ({name}) => {
  return( <h1>Hello, {name} Welcome to react</h1> )
}

function Props() {
  return (
    <div>
      <Welcome name = "om" />
    </div>
  )
}

export default Props;