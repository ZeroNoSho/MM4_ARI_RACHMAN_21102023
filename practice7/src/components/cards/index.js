import { Contex } from "@/context/store";
import { useContext, useState } from "react";

export default function Cardss({ className }) {
  const { setHid } = useContext(Contex);
  const [nama, setNama] = useState();
  const [nama2, setNama2] = useState();

  const postData = async (e) => {
    const data = {
      student_id: "1166",
      title: nama,
      description: nama2,
      images: "https://quotesbeta.tugaskelas.my.id/images/1701779585411.png",
    };

    fetch("https://quotesbeta.tugaskelas.my.id/index.php/quotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div
      id="info-popup"
      tabindex="-1"
      className={`blue overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-full md:inset-0 ${className}`}
    >
      <p className="text-left">
        <svg
          onClick={() => setHid("hidden")}
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
          className="cursor-pointer ui-font-serif font-semibold text-xl text-center ml-auto mt-10 mr-10"
        >
          <path
            onClick={() => setHid("hidden")}
            fill="#f1f5f9"
            className="cursor-pointer"
            d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
          />
        </svg>
      </p>
      <div className=" lg:ms-auto mx-auto text-center mt-16">
        <div className="py-16 px-7 rounded-md bg-white">
          <form className="" action="" onSubmit={postData}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <div className="md:col-span-2">
                <p className="float-left block  font-normal text-gray-400 text-lg">
                  title :
                </p>
                <input
                  value={nama || ""}
                  type="text"
                  className="w-full p-2 my-5 border border-gray-300 rounded-lg"
                  fdprocessedid="false"
                  onChange={(e) => setNama(e.target.value)}
                />
              </div>
              <div class="md:col-span-2">
                <p
                  for="subject"
                  className="float-left block  font-normal text-gray-400 text-lg"
                >
                  Gambar :
                </p>
                <input
                  type="file"
                  id="file"
                  name="file"
                  placeholder="Charger votre fichier"
                  class="peer block w-full appearance-none border-none   bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                />
              </div>
              <div className="md:col-span-2">
                <p className="float-left block  font-normal text-gray-400 text-lg">
                  description :
                </p>

                <textarea
                  value={nama2 || ""}
                  name="message"
                  rows="5"
                  cols=""
                  onChange={(e) => setNama2(e.target.value)}
                  placeholder="Votre Massage *"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button
                  className="mx-[50px] select-none rounded-lg bg-[#0b6f50] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md "
                  type="button"
                  data-ripple-light="true"
                  onClick={postData}
                >
                  Add Quotes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
