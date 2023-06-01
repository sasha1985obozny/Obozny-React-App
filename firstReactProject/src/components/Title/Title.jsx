import './Title.scss'

export const Title = (props) => {
    return <h1 className={props.className}>{props.children}</h1>
}