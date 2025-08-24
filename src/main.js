import axios from "axios";

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

const SWIPER_WRAPPER = document.querySelector(".swiper-wrapper");

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
});

const getDataWithAxios = async (url) => {
  const res = await axiosInstance.get(url);
  console.log(res);
  return res.data;
};

getDataWithAxios("products").then((data) => {
  data?.forEach((item) => {
    let renderHTML = `    <div class="swiper-slide">
                  <div
                    class="box relative group h-full rounded-2xl overflow-hidden"
                  >
                    <div class="boxImg h-full">
                      <img
                        src=${item?.image}
                        alt=""
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div class="absolute top-0 right-4 flex gap-2">
                      <div
                        class="flex items-center justify-center w-10 h-12 text-white bg-[#19A45A] -translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 [clip-path:polygon(0_0,100%_0,100%_100%,50%_80%,0_100%)]"
                      >
                        <i class="ri-star-fill text-[16px]"></i>
                      </div>

                      <div
                        class="flex items-center justify-center w-10 h-12 text-white bg-[#E23C3C] -translate-y-4 opacity-0 transition-all duration-500 ease-out delay-100 group-hover:translate-y-0 group-hover:opacity-100 [clip-path:polygon(0_0,100%_0,100%_100%,50%_80%,0_100%)]"
                      >
                        <i class="ri-fire-fill text-[16px]"></i>
                      </div>
                    </div>

                    <div
                      class="absolute left-0 right-0 bottom-0 rounded-b-2xl p-6 bg-[#988a7775] backdrop-blur-[8px] translate-y-6 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <div class="flex items-start justify-between">
                        <div class="flex items-start flex-col">
                          <h3
                            class="text-[20px] md:text-[28px] font-bold drop-shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#EDE7FF]"
                          >
                            Home in Merrick Way
                          </h3>
                          <p
                            class="text-left w-[450px] mt-1 text-[16px] font-medium leading-[1] text-white"
                          >
                            Enchanting three bedroom, three bath home with
                            spacious one bedroom, one bath cabana, in-laws
                            quarters.…
                          </p>
                        </div>
                        <div
                          class="text-[18px] md:text-[28px] font-extrabold text-white drop-shadow"
                        >
                          $540,000
                        </div>
                      </div>

                      <div class="mt-3 flex items-center gap-2">
                        <button
                          class="h-9 w-9 flex items-center justify-center rounded-md bg-white/90 hover:bg-white transition-colors"
                          aria-label="Save"
                        >
                          <i class="ri-heart-3-fill text-[#793CFB]"></i>
                        </button>
                        <button
                          class="h-9 w-9 flex items-center justify-center rounded-md bg-white/90 hover:bg-white transition-colors"
                          aria-label="Compare"
                        >
                          <i class="ri-shuffle-line text-[#793CFB]"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>`;
    SWIPER_WRAPPER.innerHTML = renderHTML;
  });
});

const LOADING_SCREEN = document.querySelector("#Loading");

addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    LOADING_SCREEN.classList.add("hidden");
  }, 3000);
});
