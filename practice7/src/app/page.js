"use client";
import { useContext } from "react";
import { Contex } from "@/context/store";
import Quotes from "@/components/quotes";
import Cardss from "@/components/cards";
export default function Home() {
  const { data, hid, setHid } = useContext(Contex);
  return (
    <div>
      <p className="text-center py-10 text-lg font-black text-[#0b6e4f]">
        My Quotes
      </p>
      <button
        className="mx-[50px] select-none rounded-lg bg-[#0b6f50] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md "
        type="button"
        data-ripple-light="true"
        onClick={(e) => (hid === "" ? setHid("hidden") : setHid(""))}
      >
        Add Quotes
      </button>
      <Quotes data={data}></Quotes>
      <Cardss className={hid}></Cardss>
    </div>
  );
}
