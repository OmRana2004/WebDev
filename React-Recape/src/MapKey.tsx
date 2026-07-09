// interface TodoProps {
//     title: string;
//     done: boolean
// }

export default function MapKey() {

   

    return (
        <div>
            <Todo key = {1} title = {"Go to gym"} done= {false}/>,
            <Todo key ={2} title = {"Practice Code Daily"} done= {true}/>,
        </div>
    )
}

function Todo ({title, done}: any) {
    
return <div>
    {title} - {done ? "Done!" : "Not done!"}
</div>
}