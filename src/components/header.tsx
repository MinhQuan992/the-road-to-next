"use client";

import { LucideKanban, LucideLogOut } from "lucide-react";
import Link from "next/link";
import { signOut } from "@/features/auth/actions/sign-out";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { homePath, signInPath, signUpPath, ticketsPath } from "@/paths";
import SubmitButton from "./form/submit-button";
import ThemeSwitcher from "./themes/theme-switcher";
import { buttonVariants } from "./ui/button";

const Header = () => {
  const { user, isFetched } = useAuth();

  if (!isFetched) {
    return null;
  }

  const navItems = user ? (
    <>
      <div className="flex items-center gap-2">
        <ThemeSwitcher />
        <Link
          href={ticketsPath()}
          className={buttonVariants({ variant: "default" })}
        >
          Tickets
        </Link>
        <form action={signOut}>
          <SubmitButton label="Sign Out" icon={<LucideLogOut />} />
        </form>
      </div>
    </>
  ) : (
    <div className="flex items-center gap-2">
      <ThemeSwitcher />
      <div className="flex items-center gap-2">
        <Link
          href={signUpPath()}
          className={buttonVariants({ variant: "outline" })}
        >
          Sign Up
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Link
          href={signInPath()}
          className={buttonVariants({ variant: "default" })}
        >
          Sign In
        </Link>
      </div>
    </div>
  );
  return (
    <nav
      className="
        animate-header-from-top
        supports-backdrop-blur:bg-background/60
        fixed left-0 right-0 top-0 z-20
        border-b bg-background/95 backdrop-blur
        w-full flex py-2.5 px-5 justify-between
      "
    >
      <div>
        <Link
          href={homePath()}
          className={buttonVariants({ variant: "ghost" })}
        >
          <LucideKanban className="!w-6 !h-6" />
          <h1 className="text-lg font-semibold">TicketBounty</h1>
        </Link>
      </div>
      {navItems}
    </nav>
  );
};

export default Header;
