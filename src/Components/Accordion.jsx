export default function Accordion ({children, title}){
    return (<details open>
        <summary>{title}</summary>
        <div>
        {children}
        </div>
        </details>)
}