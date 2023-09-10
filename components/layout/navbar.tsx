"use client";

import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import ThemeSwitch from "../shared/themeSwitch";

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      {/* <SignInModal /> */}
      <div
        className={`fixed top-0 hidden w-full justify-center md:flex ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl dark:border-gray-700 dark:bg-[#0d1117]/50 dark:backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 w-full items-center justify-between">
          <Link href="/" className="flex items-center font-display text-2xl">
            <p>Hello &#128075;</p>
          </Link>
          <div className="flex items-center">
            <ThemeSwitch />

            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className="ml-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800 hover:bg-black hover:text-white dark:bg-black dark:text-white"
                onClick={() => setShowSignInModal(true)}
              >
                Get in touch
              </button>
            )}
            {/* <button
              className="ml-2 space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800 hover:bg-black hover:text-white"
              onClick={() => setShowSignInModal(true)}
            >
              Blog
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
