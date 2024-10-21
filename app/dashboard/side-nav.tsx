"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { FileIcon, StarIcon, TrashIcon, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SideNav() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavContent = () => (
    <div className="flex flex-col justify-center gap-4 bg-white h-full w-[200px] z-10">
      <Link href="/dashboard/files" className="w-full">
        <Button
          variant={"link"}
          className={clsx("flex gap-2 w-full justify-start h-full bg-white", {
            "text-blue-500": pathname.includes("/dashboard/files"),
          })}
        >
          <FileIcon /> All Files
        </Button>
      </Link>

      <Link href="/dashboard/favorites" className="w-full">
        <Button
          variant={"link"}
          className={clsx("flex gap-2 w-full justify-start h-full bg-white", {
            "text-blue-500": pathname.includes("/dashboard/favorites"),
          })}
        >
          <StarIcon /> Favorites
        </Button>
      </Link>

      <Link href="/dashboard/trash" className="w-full">
        <Button
          variant={"link"}
          className={clsx("flex gap-2 w-full justify-start h-full bg-white", {
            "text-blue-500": pathname.includes("/dashboard/trash"),
          })}
        >
          <TrashIcon /> Trash
        </Button>
      </Link>
    </div>
  );

  return (
    <div className={clsx("h-full flex flex-col bg-white", { "relative": isMobile })}>
      {isMobile ? (
        <>
          <Button onClick={toggleMenu} className="absolute top-0 left-0 z-20 p-2">
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </Button>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed inset-0 bg-white shadow-md p-4 flex flex-col gap-4 w-[200px] h-screen z-10"
              >
                <NavContent />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-4 h-full pt-4 w-40"
        >
          <NavContent />
        </motion.div>
      )}
    </div>
  );
}
