import {useParams} from "react-router-dom";

export default function Editpost() {
    const {id} = useParams();
    return (
        <div>
            <h1>Editpost {id}</h1>
        </div>
    );
}