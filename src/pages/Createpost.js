import { useAuth } from '../hook/useAuth';
import { useNavigate } from 'react-router-dom'
import {NewPost} from "../components/NewPost";

const Createpost = () => {
    const {signout} = useAuth();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Create a post</h1>
            <NewPost/>
            <button onClick={() => signout(() => navigate('/', {replace: true}))}>Log Out</button>
        </div>
    )
}

const action createPostAction = async () => {

}

export {Createpost, createPostAction}