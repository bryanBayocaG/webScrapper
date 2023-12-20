import { ProductData } from '@/typings';
import Link from 'next/link';
import { NextResponse } from 'next/server';
import React from 'react'
type Props = {
    url: string;
    title: string;
    price: string;
    merchant: string
    keyd: number;
}
async function ProductCard({ url, title, price, merchant, keyd }: Props) {
    const urlParts = url.split("?");
    const pathPart = urlParts[0];
    const pathSegments = pathPart.split("/");
    const thirdSegment = pathSegments[3];

    let productData: ProductData | null = null;

    const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${Buffer.from(
                process.env.OXYLABS_USERNAME + ":" + process.env.OXYLABS_PASSWORD
            ).toString("base64")}`,
        },
        cache: "no-store",
        body: JSON.stringify({
            source: "google_shopping_product",
            domain: "com",
            query: thirdSegment,
            parse: true,
        }),
    });

    const data = await response.json();
    if (data.results) {
        productData = data.results[0];
    }
    const imageUrl = productData?.content?.images?.full_size?.[0] ?? null;

    console.log(imageUrl);
    return (
        // <div>hehe</div>
        // <div key={keyd}>hehe</div>
        <Link key={keyd} prefetch={false}
            href={
                url.includes("url?url=") ?
                    //send to external url
                    url.split("url?url=")[1] :
                    //remove any query params and send to google shopping page
                    "/google" + url.split("?")?.[0]
                // mgaProduct.url
            }
            className={`border rounded-2xl flex flex-col hover:shadow-lg transition duration-200 ease-in-out ${url.includes("url?url=") && "italic"}`}
        >
            <div className="border-b p-5 flex-1">
                {productData?.content?.images?.full_size[0] ? (<img src={`${imageUrl}`} alt="" />) : (
                    <div><h1>No photo</h1></div>
                )}

                <p className="text-[#1B66D2]">{title}</p>
            </div>
            <div className="px-5 py-2 not-italic">
                <p className="font-light">{price}</p>
                <p className="text-[#1B66D2] font-semibold">{merchant}</p>
            </div>
        </Link>


    )
}

export default ProductCard