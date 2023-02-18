import {Link, Outlet} from "react-router-dom";

const Aboutpage = () => {
    return (
        <div>
            <h1>About page</h1>
            <ul>
                <li><Link to='contacts'>Our Contacts</Link></li>
                <li><Link to='team'>Our Team</Link></li>
            </ul>

            <Outlet/>

        </div>
    )
}

export {Aboutpage}