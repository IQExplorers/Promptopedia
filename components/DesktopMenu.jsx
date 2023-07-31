"use client";

import Link from "next/link";
import Image from "next/image";

const DesktopMenu = ({ providers, handleSingOut, handleSignIn, session }) => {
  
  if (session?.user) {
    return (
      <div className="flex gap-3 md:gap-5">
        <Link href="/create-prompt" className="black_btn">
          Create Post
        </Link>
        <button
          onClick={() => handleSingOut()}
          type="button"
          className="outline_btn"
        >
          Sign Out
        </button>
        <Link href="/profile">
          <Image
            className="rounded-full hover:shadow-lg  "
            src={session?.user.image}
            width={37}
            height={37}
            alt="profile-image"
          />
        </Link>
      </div>
    );
  }

  return (
    <>
      {providers &&
        Object.values(providers).map((provider) => {
          return (
            <button
              type="button"
              key={provider.name}
              onClick={() => handleSignIn(provider.id)}
              className="black_btn"
            >
              Sign In
            </button>
          );
        })}
    </>
  );
};

export default DesktopMenu;
