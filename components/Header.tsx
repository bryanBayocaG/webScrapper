"useclient";

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import {
  SearchSelect,
  SearchSelectItem,
  Select,
  SelectItem,
} from "@tremor/react";
import SearchButton from './SearchButton';
import Avatar from 'react-avatar';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'

const SORT_BY_AnongGusto = {
  r: "Default",
  rv: "By Review",
  p: "By Price (low to high)",
  pd: "By Price (high to low)",
};

function Header() {
  const [pagesIlan, setPages] = useState("");
  const [sortByNgAno, setSortBy] = useState("r");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const router = useRouter();
  const pathname = usePathname()

  if (pathname.includes('/google')) {
    return (
      <header className="flex flex-col items-center md:flex-row md:items-start md:space-x-6 px-2 pt-10 pb-5 md:p-10 md:pb-5">
        <Link href="/google">
          <Image
            src="https://links.papareact.com/208"
            alt="logo"
            width={150}
            height={150}
            className="object-contain mr-10"
          />
        </Link>
        <div className="w-full md:max-w-2xl">
          {/* form */}
          <form action={lamanNgForm => {
            const anoNasaInput = lamanNgForm.get("yungNilagaySaSearch");
            if (!lamanNgForm.get("yungNilagaySaSearch")) return;

            const params = new URLSearchParams();

            if (pagesIlan) params.set("pages", pagesIlan.toString());
            if (sortByNgAno) params.set("sort_by", sortByNgAno.toString());
            if (minPrice) params.set("min_price", minPrice.toString());
            if (maxPrice) params.set("max_price", maxPrice.toString());

            router.push(`google/search/${anoNasaInput}?${params.toString()}`);
          }}>
            <div className="flex items-center gap-2 w-full px-4">
              <div className="flex items-center space-x-2 bg-white shadow-xl rounded-full border-0 px-6 py-4 md:max-w-5xl flex-1">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                <input type="text" name="yungNilagaySaSearch" placeholder="..." className="outline-none flex-1" />
              </div>
              {/* searchbutton */}
              <SearchButton />
              {/* searchbutton */}
            </div>

            <div className="grid grid-cols-2 gap-2 p-4 md:grid-cols-4 max-w-lg md:max-w-none mx-auto items-center">
              {/* number of pages */}
              <SearchSelect
                onValueChange={(lamanNito) => setPages(lamanNito)}
                className="min-w-4" placeholder="# of pages">
                {[...Array(100)].map((_, i) => (
                  <SearchSelectItem key={i} value={(i + 1).toString()}>
                    {(i + 1).toString()}
                  </SearchSelectItem>
                ))}
              </SearchSelect>
              {/* number of pages */}

              {/* sort by review/priceHighandLow */}
              <Select
                onValueChange={(lamanNito) => setSortBy(lamanNito)}
                className="min-w-4" placeholder="Sort">
                {Object.entries(SORT_BY_AnongGusto).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value}
                  </SelectItem>
                ))}
              </Select>
              {/* sort by review/priceHighandLow */}

              {/* sort by minPrice */}
              <SearchSelect
                onValueChange={(lamanNito) => setMinPrice(lamanNito)}
                className="min-w-4" placeholder="Min Price...">
                {['', '100', '250', '500', '750', '900', '1000'].map((_, i) => (
                  <SearchSelectItem key={i} value={_.toString()}>
                    {i === 0 ? "No Minimum" : `$${_.toString()}`}
                    {/* {i.toString()} */}
                  </SearchSelectItem>
                ))}
              </SearchSelect>
              {/* sort by minPrice */}

              {/* sort by maxPrice */}
              <SearchSelect
                onValueChange={(lamanNito) => setMaxPrice(lamanNito)}
                className="min-w-4" placeholder="Max Price...">
                {['', '100', '250', '500', '750', '900', '1000+'].map((_, i) => (
                  <SearchSelectItem key={i} value={_.toString()}>
                    {i === 0 ? "No Maximum" : `$${_.toString()}`}
                    {/* {_} */}
                  </SearchSelectItem>
                ))}
              </SearchSelect>
              {/* sort by maxPrice */}

            </div>
          </form>
          {/* form */}
          {/* <div className='flex flex-col'>
            <span>Page: {pagesIlan}</span>
            <span>Sort: {sortByNgAno}</span>
            <span>Min: {minPrice}</span>
            <span>Max: {maxPrice}</span>
          </div> */}
        </div >

        <div className="hidden lg:flex flex-1 justify-end">
          <Avatar name="Bryan Bayoca" round size="50" />
        </div>

      </header >
    )

  }
  if (pathname.includes('/amazon')) {
    return (
      <header className="flex flex-col items-center md:flex-row md:items-start md:space-x-6 px-3 pt-2 pb-2 md:p-5 md:pb-0 bg-[#131921]">
        <Link href="/amazon">
          <Image
            src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png"
            alt="logo"
            width={150}
            height={150}
            className="object-contain mr-10"
          />
        </Link>
        <div className="w-full md:max-w-2xl">
          {/* form */}
          <form action={lamanNgForm => {
            const anoNasaInput = lamanNgForm.get("yungNilagaySaSearch");
            if (!lamanNgForm.get("yungNilagaySaSearch")) return;

            const params = new URLSearchParams();

            if (pagesIlan) params.set("pages", pagesIlan.toString());
            if (sortByNgAno) params.set("sort_by", sortByNgAno.toString());
            if (minPrice) params.set("min_price", minPrice.toString());
            if (maxPrice) params.set("max_price", maxPrice.toString());

            router.push(`/amazon/s/${anoNasaInput}?${params.toString()}`);
          }}>
            <div className="flex items-center  w-full px-4">
              <div className="flex items-center space-x-2 bg-white shadow-xl rounded-l-lg border-0 px-6 py-1 md:max-w-5xl flex-1">
                <SearchSelect
                  onValueChange={(lamanNito) => setPages(lamanNito)}
                  className="w-24 outline-0 " placeholder="# of pages">
                  {[...Array(100)].map((_, i) => (
                    <SearchSelectItem key={i} value={(i + 1).toString()}>
                      {(i + 1).toString()}
                    </SearchSelectItem>
                  ))}
                </SearchSelect>
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                <input type="text" name="yungNilagaySaSearch" placeholder="..." className="outline-none flex-1" />
              </div>
              {/* searchbutton */}
              <SearchButton />
              {/* searchbutton */}
            </div>

            <div className="grid grid-cols-2 gap-2 p-4 md:grid-cols-4 max-w-lg md:max-w-none mx-auto items-center">
              {/* number of pages */}

              {/* number of pages */}

              {/* sort by review/priceHighandLow */}
              {/* <Select
                onValueChange={(lamanNito) => setSortBy(lamanNito)}
                className="min-w-4" placeholder="Sort">
                {Object.entries(SORT_BY_AnongGusto).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value}
                  </SelectItem>
                ))}
              </Select> */}
              {/* sort by review/priceHighandLow */}

              {/* sort by minPrice */}
              {/* <SearchSelect
                onValueChange={(lamanNito) => setMinPrice(lamanNito)}
                className="min-w-4" placeholder="Min Price...">
                {['', '100', '250', '500', '750', '900', '1000'].map((_, i) => (
                  <SearchSelectItem key={i} value={_.toString()}>
                    {i === 0 ? "No Minimum" : `$${_.toString()}`}
                  </SearchSelectItem>
                ))}
              </SearchSelect> */}
              {/* sort by minPrice */}

              {/* sort by maxPrice */}
              {/* <SearchSelect
                onValueChange={(lamanNito) => setMaxPrice(lamanNito)}
                className="min-w-4" placeholder="Max Price...">
                {['', '100', '250', '500', '750', '900', '1000+'].map((_, i) => (
                  <SearchSelectItem key={i} value={_.toString()}>
                    {i === 0 ? "No Maximum" : `$${_.toString()}`}
                    
                  </SearchSelectItem>
                ))}
              </SearchSelect> */}
              {/* sort by maxPrice */}

            </div>
          </form>
        </div >

        <div className="hidden lg:flex flex-1 justify-end">
          <Avatar name="Bryan Bayoca" round size="50" />
        </div>

      </header >
    )
  }



}

export default Header
