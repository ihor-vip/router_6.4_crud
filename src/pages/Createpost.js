import {useAuth} from "../hook/useAuth";
import {useNavigate} from "react-router-dom";

const Createpost = () => {
    const {signOut} = useAuth();
    const navigate = useNavigate();
    return (
        <div>
            <h1>Create post</h1>
            <button onClick={() => signOut(() => navigate('/', {replace: true}))}>Log Out</button>
        </div>
    )
}

export {Createpost}