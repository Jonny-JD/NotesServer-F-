

interface Props {
    message: string;
}

export const SuccessMessage = ({message}: Props) => {
    if (!message) {
        return null;
    }
    return (
        <div className={"success-message"}>
            {message}
        </div>
    )
}