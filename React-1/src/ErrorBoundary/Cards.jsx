// Whate is Erroe Boundary?

// Error boundaries are React componentes that catch JavaScript errors in their child componentes tree and display a fallback UI.


import ErrorBoundary from "./ErrorBoundary"

 const Cards = ()=>{
    return(
        
        <div>
            <ErrorBoundary>
                <Card1 />
            </ErrorBoundary>

            <ErrorBoundary>// lines to import { connect } from 'react-redux'
            
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
       


export default Cards; // IS TO GO IT AND TO COMMIT IT FIRST AND READING TO RUTHLESS AND USED TO GO AND EVEN WAY TO MOVE ON WITH IT. {() => }

// code {{style }} code and its functionallity to reduce functionallity of commmon code..  calle  . code in it and we can do it.
