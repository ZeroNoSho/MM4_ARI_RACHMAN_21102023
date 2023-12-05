"use client";
import { useContext } from "react";
import { Contex } from "@/context/store";
import Quotes from "@/components/quotes";
export default function Home() {
  const { data } = useContext(Contex);
  return (
    <div>
      <p className="text-center py-10 text-lg font-black text-[#0b6e4f]">
        My Quotes
      </p>
      <Quotes data={data}></Quotes>
    </div>
  );
}
