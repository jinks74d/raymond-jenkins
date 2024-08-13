import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="py-6 bg-white dark:bg-gray-800 transition-colors duration-300">
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-light-text dark:text-dark-text"
        >
          RJ
        </Link>
        <ul className="flex items-center space-x-6">
          <li>
            <Link
              href="/"
              className="hover:text-accent-light dark:hover:text-accent-dark"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-accent-light dark:hover:text-accent-dark"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-accent-light dark:hover:text-accent-dark"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-accent-light dark:hover:text-accent-dark"
            >
              Contact
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
