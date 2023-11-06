import { getCurrentUser } from "@/app/lib/session";
import { SignOut } from "./auth/SignOut";

async function BasicExample() {
  const user = await getCurrentUser();
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          daisyUI
        </a>
        <a href="/protected">Protected</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            {!user ? <a href="/api/auth/signin">Sign in</a> : <SignOut /> }

          </li>
        </ul>
      </div>
    </div>
  );
}

export default BasicExample;
