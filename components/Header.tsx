import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-gradient p-0.5 rounded-b-2xl w-full mb-10">
      <div className="dark-blue-gradient rounded-b-2xl px-16 py-6 max-sm:px-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="MockMate Logo"
                width={38}
                height={32}
              />
              <h2 className="text-primary-100">Mock Mate</h2>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button asChild className="btn-secondary max-sm:hidden">
              <Link href="/profile">Profile</Link>
            </Button>

            {/* Mobile menu button */}
            <button className="hidden max-sm:block text-light-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
