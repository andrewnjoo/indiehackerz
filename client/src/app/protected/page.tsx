import { getCurrentUser } from "../lib/session";

async function Protected() {
    const user = await getCurrentUser();
    return ( <div>
        { user ? <p>{user.name}</p> : <p>Not signed in</p> }
    </div> );
}

export default Protected;