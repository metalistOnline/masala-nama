export default function NewWinLink(props) {
    return (
        <a {...props} target="_blank" rel="noreferrer">
            {props.children}
        </a>
    );
}
