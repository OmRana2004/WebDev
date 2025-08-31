function Welcome({name}) {
    return <h1>hello, {name} Welcome to react.</h1>
}

function Props() {
    return(
        <div>
            <Welcome name="om" />
        </div>
    )
}

export default Props;