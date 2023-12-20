
import { PageResultA } from "@/typings";
import Image from "next/image";
import Link from "next/link";


type Props = {
    resulta: PageResultA[];
    term: string;
};

function ResultsListA({ resulta, term }: Props) {

    return (
        <div className="flex md:px-5">

            {/* main body */}
            <div className="p-x-5 md:p-10 md:pt-0 space-y-5 flex-1">
                {resulta.map((pageResult, i) => (
                    <div key={pageResult.job_id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                        {i !== 0 && <hr className="w-full col-span-full" />}
                        <div className="md:col-span-2 lg:col-span-3 xl:col-span-4 py-5">
                            <div className="flex space-x-2 items-center divide-x-2">
                                <h1>Shop on Amazon</h1>
                                <h2 className="text-xl font-semibold pl-2">
                                    Search Results for Page {i + 1}
                                </h2>
                            </div>

                            <h3 className="font-extralight">
                                Showing results for `{decodeURIComponent(term)}`
                            </h3>
                        </div>

                        {pageResult?.content?.results?.organic?.map((mgaProduct: any) => (
                            <Link key={mgaProduct.pos} prefetch={false}
                                href={
                                    mgaProduct.url.includes("url?url=") ?
                                        //send to external url
                                        mgaProduct.url.split("url?url=")[1] :
                                        //remove any query params and send to google shopping page
                                        mgaProduct.url.split("?")?.[0]
                                    // mgaProduct.url
                                }
                                className={`border rounded-2xl flex flex-col hover:shadow-lg transition duration-200 ease-in-out ${mgaProduct.url.includes("url?url=") && "italic"}`}
                            >
                                <div className="border-b p-5 flex-1">

                                    <img src={mgaProduct.url_image} alt="photo" />
                                    <p className="text-[#1B66D2]">{mgaProduct.title}</p>
                                </div>
                                <div className="px-5 py-2 not-italic">
                                    <p className="font-light">{mgaProduct.price} {mgaProduct.currency}</p>
                                    <p className="text-[#1B66D2] font-semibold">{mgaProduct?.manufacturer}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
            {/* main body */}

        </div>
    )
}

export default ResultsListA