
interface Props {
    message: string;
}

export const ErrorMessage = ({message}: Props) => {
    if (!message) {
        return null;
    }
    return (
        <div className={"error-message"}>
            {message}
        </div>
    )
}