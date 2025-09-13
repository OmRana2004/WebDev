const Profile = ({name, age, hobby}) => {
    return(
        <div>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <p>Hobby: {hobby}</p>
        </div>
    )
}

function ProfileCard() {
    return(
        <div>
            <Profile name ="OM" age ="21" hobby ="Coding" />
        </div>
    )
}

export default ProfileCard;