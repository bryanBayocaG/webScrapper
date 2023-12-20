"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { usePathname } from 'next/navigation'
function SearchButton() {
    const pathname = usePathname()
    const { pending } = useFormStatus();
    if (pathname.includes('/google')) {
        return (
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full py-4 px-4 disabled:opacity-50 disabled:cursor-not-allowed">
                {pending && "Searching..."}
                {!pending && <MagnifyingGlassIcon className="h-5 w-5" />}
            </button>
        )
    }
    if (pathname.includes('/amazon')) {
        return (
            <button
                className="bg-[#febd69] hover:bg-[#f3a847] text-white font-bold rounded-r-lg py-3.5 px-4 disabled:opacity-50 disabled:cursor-not-allowed">
                {pending && "Searching..."}
                {!pending && <MagnifyingGlassIcon className="h-5 w-5 text-[#131921]" />}
            </button>
        )
    }
}

export default SearchButton

