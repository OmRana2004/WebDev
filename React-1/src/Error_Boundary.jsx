// Whate is Erroe Boundary?

// Error boundaries are React componentes that catch JavaScript errors in their child componentes tree and display a fallback UI.


import React, { useState, useEffect } from "react";

 const Error_Boundary = ()=>{
    return(
        
        <div >
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
    throw new Error("error while rendering")

    return <div style= {{background: "orange", borderRadius: 20, padding: 20}}>
        OM
    </div>
}

function Card2 () {

    return <div style= {{background: "orange", borderRadius: 20, padding: 20}}>
        RANA
    </div>
}
            // Initial a ErrorBoundary
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}

export default Error_Boundary;