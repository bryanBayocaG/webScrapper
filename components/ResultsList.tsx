

import { PageResult } from "@/typings";
import Link from "next/link";
import ProductCard from "./ProductCard";

type Props = {
    results: PageResult[];
    term: string;
};

function ResultsList({ results, term }: Props) {

    return (
        <div className="flex md:px-5">
            {/* sidebar */}
            <div className="w-36 md:w-64 whitespace-normal">
                {/* kada page base sa sinet na page*/}
                {results.map((pageResult) => (
                    <div key={pageResult.job_id} className="space-y-2">
                        {pageResult.content.results.filters?.map((filter, i) => (
                            <div key={i} className="border rounded-r-lg md:rounded-lg p-5">
                                <p className="font-bold">{filter.name}</p>
                                {filter.values.map((value, i) => (
                                    <Link prefetch={false} key={i} href={`https://www.google.com${value.url}`}>
                                        {value.value}
                                    </Link>
                                ))}
                            </div>
                        ))}

                    </div>
                ))}
                {/* kada page base sa sinet na page*/}
            </div>
            {/* sidebar */}

            {/* main body */}
            <div className="p-x-5 md:p-10 md:pt-0 space-y-5 flex-1">
                {results.map((pageResult, i) => (
                    <div key={pageResult.job_id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                        {i !== 0 && <hr className="w-full col-span-full" />}
                        <div className="md:col-span-2 lg:col-span-3 xl:col-span-4 py-5">
                            <div className="flex space-x-2 items-center divide-x-2">
                                <h1>Shop on Google</h1>
                                <h2 className="text-xl font-semibold pl-2">
                                    Search Results for Page {i + 1}
                                </h2>
                            </div>

                            <h3 className="font-extralight">
                                Showing results for `{decodeURIComponent(term)}`
                            </h3>
                        </div>
                        {/* {pageResult?.content?.results?.organic?.map((products) => {
                            const { url, title, price_str, currency, merchant.name } = products;
                        return (
                        <ProductCard
                            key={products.pos}
                            url={url.includes("url?url=") ? url.split("url?url=")[1] : url.split("?")?.[0]}
                            className={`border rounded-2xl flex flex-col hover:shadow-lg transition duration-200 ease-in-out ${url.includes("url?url=") && "italic"}`}
                            title={title}
                            price={`${price_str} ${currency}`}
                            merchant={merchant.name}
                        />
                        )
                        })} */}

                        {pageResult?.content?.results?.organic?.map((products, i) => {
                            const { url, title, price_str, currency, merchant } = products;

                            return (
                                // <div key={i}>hehe</div>
                                <ProductCard
                                    key={products.pos}
                                    keyd={products.pos}
                                    url={url}
                                    title={title}
                                    price={`${price_str} ${currency}`}
                                    merchant={merchant.name}
                                />
                            );
                        })}

                        {/* {pageResult?.content?.results?.organic?.map((mgaProduct) => (
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
                                    <p className="text-[#1B66D2]">{mgaProduct.title}</p>
                                </div>
                                <div className="px-5 py-2 not-italic">
                                    <p className="font-light">{mgaProduct.price_str} {mgaProduct.currency}</p>
                                    <p className="text-[#1B66D2] font-semibold">{mgaProduct.merchant.name}</p>
                                </div>
                            </Link>
                        ))} */}
                    </div>
                ))}
            </div>
            {/* main body */}

        </div>
    )
}

export default ResultsList