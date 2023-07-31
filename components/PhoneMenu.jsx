"use client";

import Image from "next/image";
import DropdownMenu from "./DropdownMenu";

const PhoneMenu = ({
  session,
  setToggleDropdown,
  handleSignOut,
  toggleDropdown,
  handleSignIn,
  providers,
}) => {
  if (session?.user) {
    return (
      <div className="flex">
        <Image
          className="rounded-full"
          src={session?.user?.image}
          width={37}
          height={37}
          alt="profile-image"
          onClick={() => setToggleDropdown((prev) => !prev)}
        />
        {toggleDropdown && (
          <DropdownMenu
            setToggleDropdown={setToggleDropdown}
            handleSignOut={handleSignOut}
          />
        )}
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

export default PhoneMenu;
