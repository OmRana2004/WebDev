import React from "react";


export default function Child({children}: {children: React.ReactNode}) {
    return (
        <div className="border p-4 rounded ">
            {children}
        </div>
    )
}

