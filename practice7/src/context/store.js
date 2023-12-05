"use client";
import useSWR from "swr";
import { useState, createContext } from "react";
const Contex = createContext(null);

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Provider = ({ children }) => {
  const [menus, setMenu] = useState("hidden");
  const [hid, setHid] = useState("hidden");
  const { data, error } = useSWR(
    "https://quotesbeta.tugaskelas.my.id/index.php/quotes/21102016",
    fetcher
  );
  const { data: Myclass, error: errorclass } = useSWR(
    "https://quotesbeta.tugaskelas.my.id/index.php/quotes/q/class_id/4",
    fetcher
  );
  const { data: all, error: errorall } = useSWR(
    "https://quotesbeta.tugaskelas.my.id/index.php/quotes",
    fetcher
  );

  console.log(data);
  return (
    <Contex.Provider
      value={{
        menus,
        setMenu,
        data,
        Myclass,
        all,
        hid,
        setHid,
      }}
    >
      {children}
    </Contex.Provider>
  );
};

export { Contex, Provider };
