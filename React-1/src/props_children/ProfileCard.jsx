function Profile({ name, age, hobby}){
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Hobby: {hobby}</p>
        </div>
    )
}

function ProfileCard() {
    return (
        <div>
            <Profile name="om" age={21} hobby="coding" />
        </div>
    )
}

    export default ProfileCard;