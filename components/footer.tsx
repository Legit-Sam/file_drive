import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <div className="bg-gray-100 mt-12 py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xl font-bold mb-4 sm:mb-0">FileDrive</div>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link className="text-blue-900 hover:text-blue-500" href="/privacy">
              Privacy Policy
            </Link>
            <Link
              className="text-blue-900 hover:text-blue-500"
              href="/terms-of-service"
            >
              Terms of Service
            </Link>
            <Link className="text-blue-900 hover:text-blue-500" href="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
