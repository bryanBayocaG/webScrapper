
import ResultsList from "@/components/ResultsList";
import { getFetchUrl } from "@/lib/getFetchUrl";
import { PageResult, SearchParams } from "@/typings";
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
    const response = await fetch(getFetchUrl('api/google/search'), {
        method: "POST",
        body: JSON.stringify({ anoNasaInput: term, ...searchParams }),
    })

    const result = await response.json() as PageResult[];

    // console.log(result);

    return (

        <div>
            <ResultsList results={result} term={term} />
        </div>
    )
}

export default SearchPage