import Link from "next/link";

export function NavComp() {
  return (
    <nav>
      <header className="flex items-center justify-center px-6 py-2 bg-white shadow-sm dark:bg-green-200">
        <Link
          className="flex items-center gap-2 font-semibold text-gray-900 dark:text-dark-900"
          href="#"
        >
          <span>20% discount</span>
        </Link>
      </header>
    </nav>
  );
}

export function PenIcon(props:any) {
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
  );
}
