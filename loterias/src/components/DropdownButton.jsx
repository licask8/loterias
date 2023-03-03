import { useState } from "react";

export function Dropdown({ title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center justify-center mt-8 w-52 h-10 bg-white rounded-md font-medium text-sm  border border-black shadow-sm px-4 py-2  text-gray-700 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        {title}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 9.586l3.293-3.293a1 1 0 011.414 1.414l-4 4A1 1 0 0110 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-1 origin-top-right absolute right-10 w-50 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ">
          <div
            className="py-1 rounded-md border border-gray-400"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              role="menuitem"
            >
              MEGA-SENA
            </a>
            <a
              href="/quina"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              role="menuitem"
            >
              QUINA
            </a>
            <a
              href="/lotofacil"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              role="menuitem"
            >
              LOTO-FÁCIL
            </a>
            <a
              href="/lotomania"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              role="menuitem"
            >
              LOTO-MANIA
            </a>
            <a
              href="/timemania"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              role="menuitem"
            >
              TIME-MANIA
            </a>
            <a
              href="/dia-de-sorte"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              role="menuitem"
            >
              DIA-DE-SORTE
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
