import Image from "next/image";
import Link from "next/link";

const SEARCHES = [
  {
    id: 1,
    term: "Google Shopping",
    url: "/google",
    color: "bg-gray-500",
    image: "https://links.papareact.com/208"
  },
  {
    id: 2,
    term: "Amazon Shooping",
    url: "/amazon",
    color: "bg-[#131921]",
    image: "https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png"
  },

];


export default function Home() {
  return (
    <div className="p-10 pt-0 text-center md:text-left">
      <h1 className="text-3xl font-extralight mb-5">
        Welcome to E-Commerce Scrapping App
      </h1>
      <h2 className="mb-5">
        Get started by clicking on one of the example search engine.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center gap-5 mt-5">
        {SEARCHES.map((search) => (
          <Link
            prefetch={false}
            key={search.id}
            href={search.url}
            className={`${search.color} w-full h-36 hover:opacity-50 text-white font-bold py-2 px-4 rounded`}
          >
            {search.term}
            <Image
              src={search.image}
              alt="logo"
              width={150}
              height={150}
              className="object-contain mr-10"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
