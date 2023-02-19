export default function NewWinLink(props) {
    return (
        <a
            target={props.target ?? '_blank'}
            rel="noreferrer"
            href={props.href}
            className={props.className ?? ''}
        >
            {props.children}
        </a>
    );
}
