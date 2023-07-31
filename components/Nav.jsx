"use client";

import Link from "next/link";
import Image from "next/image";
import DesktopMenu from "./DesktopMenu";
import PhoneMenu from "./PhoneMenu";
import { useState, useEffect } from "react";
import { signIn, signOut, getProviders, useSession } from "next-auth/react";

const Nav = () => {
  const { data: session, status: sessionStatus } = useSession(null);

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);

  function menu() {
    return (
      <>
        <div className="sm:flex hidden">
          <DesktopMenu
            session={session}
            providers={providers}
            handleSignIn={signIn}
            handleSingOut={signOut}
          />
        </div>
        <div className="sm:hidden flex realtive">
          <PhoneMenu
            session={session}
            handleSignOut={signOut}
            handleSignIn={signIn}
            providers={providers}
            setToggleDropdown={setToggleDropdown}
            toggleDropdown={toggleDropdown}
          />
        </div>
      </>
    );
  }

  return (
    <nav className="flex-between w-full mb-16 pt-2 ">
      {logo()}
      {sessionStatus === "loading" ? spin() : menu()}
    </nav>
  );
};

function logo() {
  return (
    <Link href="/" className="flex gap-2 flex-center">
      <Image
        src="/assets/images/logo.svg"
        alt="logo"
        width={30}
        height={30}
        className="object-contain"
      />
      <p className="logo_text ">Promtopia</p>
    </Link>
  );
}

function spin() {
  return (
    <div className="rounded-full  w-[35px] h-[35px] bg-gray-300 flex flex-center gap-2">
      <Image
        className="object-contain animate-spin"
        src={"/assets/icons/spin.svg"}
        alt="spin"
        height={20}
        width={20}
      />
    </div>
  );
}



export default Nav;
