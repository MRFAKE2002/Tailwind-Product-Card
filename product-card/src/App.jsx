function App() {
  return (
    <>
      <div className="flex flex-col w-56 h-[450px] bg-white m-11 shadow-lg shadow-slate-200 rounded-3xl sm:w-[550px] sm:h-56 sm:flex-row items-center p-2 gap-10 dark:bg-black">
        <div className="h-52 w-52 bg-gradient-to-r from-[#209fc2] to-[#2a5f79] rounded-2xl "></div>
        <main className="flex-1 flex flex-col gap-2 sm:pr-2">
          {/* Name & Price */}
          <section className="flex justify-between">
            <h2 className="font-semibold text-lg dark:text-white">
              Product Name
            </h2>
            <p className="text-xl font-bold dark:text-white">$59.9</p>
          </section>
          {/* Description */}
          <section>
            <h4 className="text-[10px] font-semibold dark:text-white">
              Description
            </h4>
            <p className="text-[8px] dark:text-white">
              Lorem ipsum dol or, sit amet consectetur adipisicing elit.
              Aperiam, consequatur sae pe. Veritatis, excepturi obcaecati.
            </p>
          </section>
          {/* Color */}
          <section>
            <h4 className="text-[10px] dark:text-white">Colors</h4>
            <div>
              <span className="inline-block w-3 h-3 bg-rose-500 rounded me-1"></span>
              <span className="inline-block w-3 h-3 bg-sky-500 rounded me-1"></span>
              <span className="inline-block w-3 h-3 bg-indigo-500 rounded me-1"></span>
              <span className="inline-block w-3 h-3 bg-lime-500 rounded me-1"></span>
              <span className="inline-block w-3 h-3 bg-pink-500 rounded me-1"></span>
              <span className="inline-block w-3 h-3 bg-slate-500 rounded me-1"></span>
              <span className="inline-block w-3 h-3 bg-black  dark:bg-white rounded me-1"></span>
            </div>
          </section>
          {/* Sizes */}
          <section>
            <h4 className="text-[10px] dark:text-white">Sizes</h4>
            <div>
              <span className="font-bold text-xs me-2 dark:text-white">S</span>
              <span className="font-bold text-xs me-2 dark:text-white">M</span>
              <span className="font-bold text-xs text-gray-300 me-2">L</span>
              <span className="font-bold text-xs me-2 dark:text-white">XL</span>
              <span className="font-bold text-xs text-gray-300 me-2">XXL</span>
              <span className="font-bold text-xs me-2 dark:text-white">XXXL</span>
            </div>
          </section>
          {/* Buttons */}
          <section className="flex gap-2">
            <button className="bg-[#209fc2] hover:bg-[#2a5f79] transition-colors text-white rounded-full p-1 text-sm shrink-0 grow-[2]">
              ADD TO Cart
            </button>
            <button className="bg-[#209fc2] hover:bg-[#2a5f79] transition-colors text-white rounded-full p-1 text-sm shrink grow-[1] flex justify-center">
              <svg
                fill="#fff"
                height="18px"
                width="18px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 471.701 471.701"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1 c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3 l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4 C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3 s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4 c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3 C444.801,187.101,434.001,213.101,414.401,232.701z"></path>
                  </g>
                </g>
              </svg>
            </button>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
