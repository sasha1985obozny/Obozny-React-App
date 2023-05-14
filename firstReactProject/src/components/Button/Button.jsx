import './Button.scss'

export const Button = (props) => {
    return <button className={props.className}>{props.name}</button>
}