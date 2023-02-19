import {useRouteError} from "react-router-dom";

function  Errorpage() {
    const error = useRouteError();

    return (
        <div>
            <h1>{error.status}</h1>
            <h2>{error.data.message || 'Something went wrong'}</h2>
            <h3>{error.data.reason}</h3>
        </div>
    )
}

export default Errorpage;