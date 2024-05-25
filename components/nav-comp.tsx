

import Link from "next/link"

export function navComp() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow-sm dark:bg-gray-950">
      <Link className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-50"
        href="/blogs"
      >
        <PenIcon className="h-10 w-10" />
        <span >Blog</span>
      </Link>
      <nav className="flex items-center gap-6">
        <Link
          className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="/blogs"
        >
          Home
        </Link>
        <Link
          className="flex items-center justify-center w-14 h-9 bg-green-500 text-white text-center rounded-full hover:bg-green-600"
          href="/blogs/newblog"
        >
          New
        </Link>
        <Link
          className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="/blogs/about"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          Profile
        </Link>
        <Link
          className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          My Blogs
        </Link>
        <Link
          className="flex items-center justify-center w-20 h-9 bg-red-500 text-white text-center rounded-full hover:bg-red-600"
          href="/signin"
        >
          Logout
        </Link>
      </nav>
    </header>
  )
}

function PenIcon(props:any) {
  return (
    <svg
      {...props}
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
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  )
}
