const Welcome = ({name}) => {
  return <h1>Hello, {name} Welcome to react.!</h1>
}

export default function Props() {
  return(
    <>
    <Welcome name = "om" />
    </>
  )
}