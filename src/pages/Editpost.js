import {useParams} from "react-router-dom";

export default function Editpost() {
    const {id} = useParams();
    return (
        <div>
            Editpost {id}
        </div>
    );
}