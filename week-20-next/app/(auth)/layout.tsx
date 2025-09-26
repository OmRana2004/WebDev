import { ReactNode } from "react"

export default function({children}: {
    children: ReactNode
}) {
    return (
        <div>
            <div>HEADER</div>
            {children}
            <div>FOOTER</div>
        </div>
    )
}