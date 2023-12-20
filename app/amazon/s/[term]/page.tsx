

import ResultsListA from "@/components/ResultListA";
import { getFetchUrl } from "@/lib/getFetchUrl";
import { PageResultA, SearchParams } from "@/typings";
import { redirect } from "next/navigation";

export const revalidate = 300;

type Props = {
    params: {
        term: string;
    };
    searchParams: SearchParams;
}

async function SearchPage({ params: { term }, searchParams }: Props) {
    if (!term) {
        redirect('/');
    }

    //fetch from api
    const response = await fetch(getFetchUrl('api/amazon/s'), {
        method: "POST",
        body: JSON.stringify({ anoNasaInput: term, ...searchParams }),
    })

    const result = await response.json() as PageResultA[];


    return (

        <div>
            <ResultsListA resulta={result} term={term} />
        </div>
    )
}

export default SearchPage