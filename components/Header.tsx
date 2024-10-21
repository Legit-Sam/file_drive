"use client";

import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative z-10 border-b py-4 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex gap-2 items-center text-xl text-black">
            <Image src="/logo.png" width="50" height="50" alt="file drive logo" />
            {!isMobile && "FileDrive"}
          </Link>

          <div className="flex items-center justify-center gap-4">
            {!isMobile && (
              <SignedIn>
                <Button variant={"outline"}>
                  <Link href="/dashboard/files">Your Files</Link>
                </Button>
              </SignedIn>
            )}

            {isMobile ? (
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            ) : (
              <>
                <OrganizationSwitcher />
                <UserButton afterSignOutUrl="/" />
                <SignedOut>
                  <SignInButton>
                    <Button>Sign In</Button>
                  </SignInButton>
                </SignedOut>
              </>
            )}
          </div>
        </div>
        {isMobile && isMenuOpen && (
          <div className="mt-4 flex flex-col items-center">
            <SignedIn>
              <Button variant={"outline"} className="w-full mb-2">
                <Link href="/dashboard/files">Your Files</Link>
              </Button>
            </SignedIn>
            <OrganizationSwitcher />
            <UserButton afterSignOutUrl="/" />
            <SignedOut>
              <SignInButton>
                <Button className="w-full mt-2">Sign In</Button>
              </SignInButton>
            </SignedOut>
          </div>
        )}
      </div>
    </div>
  );
}
