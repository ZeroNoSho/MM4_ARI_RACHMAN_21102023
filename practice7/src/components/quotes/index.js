export default function Quotes({ data }) {
  return (
    <div className="flex grid grid-cols-3 w-[90%] m-auto">
      {data &&
        data?.quotes.map((e) => (
          <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md m-10">
            <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                alt="img-blur-shadow"
                layout="fill"
              />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {e.title}
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {e.description}
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="select-none rounded-lg bg-[#0b6f50] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md "
                type="button"
                data-ripple-light="true"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
