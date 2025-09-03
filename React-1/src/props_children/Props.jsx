const Welcome = ({name}) =>{
  return <h1>Hello {name} Welcome to react.!</h1>
}

function Props(){
  return(
    <div>
      <Welcome name="OM" />
    </div>
  )
}

export default Props;