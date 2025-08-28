export function Alert({ text }) {
    return (
        <div className="alert alert-danger mt-5" role="alert">
            <h4 className="alert-heading">Ooops!</h4>
            <p>{text}</p>
        </div>
    );
}