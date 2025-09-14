// Whate is Erroe Boundary?

// Error boundaries are React componentes that catch JavaScript errors in their child componentes tree and display a fallback UI.


import React from "react";
   
   // Initial a ErrorBoundary { Take It As A Black-Box }
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

export default ErrorBoundary;