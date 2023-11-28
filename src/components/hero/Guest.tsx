import { SignOutButton, UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/dist/types/server";
import Link from "next/link";

type Props = {
  user: User;
};
function Guest({ user }: Props) {
  return (
    <div className=" py-10 rounded-md flex flex-col gap- max-w-xl w-full gap-4">
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-2">
        <h2 className="text-center text-xl">You Seem to be Logged in as :</h2>
        <div className="flex items-center gap-3">
          <span className="text-xl text-secondary">{user.username}</span>
          <UserButton />
        </div>
      </div>
      <div className="flex items-center justify-center px-3 ">
        <p>Your Account is not Ready yet Contact an Admin</p>
      </div>
      <p className="text-center ">Not you?</p>
      <div className="flex justify-center px-3">
        <SignOutButton>
          <button className="btn  btn-secondary w-full border-none text-primary hover:bg-secondary/80 z-20">
            Sign Out
          </button>
        </SignOutButton>
      </div>
    </div>
  );
}
export default Guest;
