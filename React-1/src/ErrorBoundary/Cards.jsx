// Whate is Erroe Boundary?

// Error boundaries are React componentes that catch JavaScript errors in their child componentes tree and display a fallback UI.


import ErrorBoundary from "./ErrorBoundary"

 const Cards = ()=>{
    return(
        
        <div>
            <ErrorBoundary>
                <Card1 />
            </ErrorBoundary>

            <ErrorBoundary>
                <Card2 />
            </ErrorBoundary>
        </div>
        
    )
}

function Card1 () {
                  // Showing Error
    throw new Error ("error while rendering")

    return <div style= {{background: "orange", borderRadius: 20, padding: 20}}>
        OM
    </div>
}

function Card2 () {

    return <div style= {{background: "orange", borderRadius: 20, padding: 20}}>
        RANA
    </div>
}
       


export default Cards;