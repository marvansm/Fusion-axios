import apiServices from "./api";
const api = new apiServices("http://localhost:3000/");

var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const SWIPER_WRAPPER = document.querySelector(".swiper-wrapper");
const PRODUCTS_WRAPPER = document.querySelector("#productWrapper");

api.GetProducts("products").then((data) => {
  data?.forEach((item) => {
    let renderHTML = `    <div class="swiper-slide">
                  <div
                    class="box relative group h-full rounded-2xl overflow-hidden"
                  >
                    <div class="boxImg h-full">
                      <img
                        src=${item?.image}
                        alt=""
                        class="w-full h-full object-cover rounded-2xl group-hover:scale-[1.2] duration-500"
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
                      class="absolute left-0 right-0 bottom-0 rounded-b-2xl p-6 bg-[#ffffff57] backdrop-blur-[20px] translate-y-[100px] opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
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
                          class="text-[18px] md:text-[28px] font-bold text-white drop-shadow"
                        >
                          $540,000
                        </div>
                      </div>

                      <div class="mt-3 flex items-center gap-2">
                        <button
                          class="h-7 w-7 flex items-center justify-center rounded-md bg-white/90 hover:bg-white transition-colors"
                          aria-label="Save"
                        >
                          <i class="ri-heart-3-fill text-[#793CFB] text-[17px]"></i>
                        </button>
                        <button
                          class="h-7 w-7 flex items-center justify-center rounded-md bg-white/90 hover:bg-white transition-colors"
                          aria-label="Compare"
                        >
                          <i class="ri-shuffle-line text-[#793CFB] text-[17px]"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>`;
    SWIPER_WRAPPER.innerHTML += renderHTML;
  });
  swiper.update();
});

api.GetProducts("products").then((data) => {
  data?.forEach((item) => {
    let renderProducts = ` 
               
               <div class="box h-full shadow-[0_12px_34px_rgba(0,0,0,0.12)] rounded-2xl overflow-hidden group"
                >
                  <div class="boxImg relative overflow-hidden">
                    <img
                      src=${item?.image}
                      alt=""
                      class="w-full h-full object-cover group-hover:scale-[1.1] duration-400"
                    />
                    <div
                      class="absolute top-0 right-6 flex items-center justify-center w-10 h-12 text-white bg-[#19A45A] -translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 [clip-path:polygon(0_0,100%_0,100%_100%,50%_80%,0_100%)]"
                    >
                      <i class="ri-star-fill text-[16px]"></i>
                    </div>
                  </div>
                  <div class="boxBody">
                    <div class="head pt-[21px] px-[28px]">
                      <h2
                        class="text-[#1a1a1a] text-[20px] font-semibold font-roboto mb-[16px] text-left"
                      >
                        ${item?.name}
                      </h2>
                      <div class="more flex items-start gap-[10px] mb-[4px]">
                        <svg
                          class="pin-icon"
                          width="12"
                          height=""
                          viewBox="0 0 12 18"
                          fill="#793DF9"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.3455 9.15338C10.6798 8.33298 10.8621 7.69489 10.8621 7.20873C10.8621 4.53485 8.67437 2.34713 6.00049 2.34713C3.29622 2.34713 1.13888 4.53485 1.13888 7.20873C1.13888 7.69489 1.29081 8.33298 1.62504 9.15338C1.95928 9.94339 2.41505 10.7942 2.96198 11.6449C3.99508 13.3161 5.21048 14.9265 5.9701 15.8989C6.76011 14.9265 7.97552 13.3161 9.00861 11.6449C9.55554 10.7942 10.0113 9.94339 10.3455 9.15338ZM6.69934 16.5673C6.33472 17.0231 5.63587 17.0231 5.27125 16.5673C3.72161 14.5923 0.16656 9.88262 0.16656 7.20873C0.16656 3.98792 2.77967 1.37481 6.00049 1.37481C9.2213 1.37481 11.8344 3.98792 11.8344 7.20873C11.8344 9.88262 8.27937 14.5923 6.69934 16.5673Z"
                          ></path>
                          <circle
                            cx="6.12143"
                            cy="6.81479"
                            r="2.12143"
                          ></circle>
                        </svg>
                        <h2
                          class="text-[14px] font-medium leading-[21px] text-[#45525e] flex flex-col items-start"
                        >
                          ${item?.location}
                          <span class="text-[12px] font-medium"
                            >Added: ${item?.created}
                          </span>
                        </h2>
                      </div>
                      <div class="featured">
                        <ul class="flex items-center gap-[16px] mb-[7px]">
                          <li
                            class="flex items-center gap-[10px] text-[#1a1a1a] text-[12px] font-bold"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="custom-meta-icon custom-meta-icon-svg"
                              width="15"
                              height="25"
                              viewBox="0 0 37 25"
                              fill="none"
                            >
                              <path
                                d="M3 20.4761V21.4761C3 23.1329 4.34315 24.4761 6 24.4761V24.4761C7.65685 24.4761 9 23.1329 9 21.4761V20.4761"
                                stroke="#7C40F9"
                              ></path>
                              <path
                                d="M28 20.4761V21.4761C28 23.1329 29.3431 24.4761 31 24.4761V24.4761C32.6569 24.4761 34 23.1329 34 21.4761V20.4761"
                                stroke="#7C40F9"
                              ></path>
                              <path
                                d="M4.5 3.47607C4.5 2.09536 5.61929 0.976074 7 0.976074H30C31.3807 0.976074 32.5 2.09536 32.5 3.47607V8.97607H4.5V3.47607Z"
                                stroke="#7C40F9"
                              ></path>
                              <path
                                d="M0.5 11.4761C0.5 10.0954 1.61929 8.97607 3 8.97607H35C35.8284 8.97607 36.5 9.64765 36.5 10.4761V19.9761H0.5V11.4761Z"
                                stroke="#7C40F9"
                              ></path>
                              <path
                                d="M16.3125 8.97607H10.6012C10.6551 8.62017 10.7011 8.194 10.7199 7.73899C10.7429 7.18491 10.7263 6.56913 10.6263 5.97607H16.3601C16.284 6.34752 16.219 6.78831 16.1923 7.25307C16.1611 7.79719 16.1807 8.4015 16.3125 8.97607Z"
                                stroke="#7C40F9"
                              ></path>
                              <path
                                d="M26.3125 8.97607H20.6012C20.6551 8.62017 20.7011 8.194 20.7199 7.73899C20.7429 7.18491 20.7263 6.56913 20.6263 5.97607H26.3601C26.284 6.34752 26.219 6.78831 26.1923 7.25307C26.1611 7.79719 26.1807 8.4015 26.3125 8.97607Z"
                                stroke="#7C40F9"
                              ></path>
                            </svg>
                            <span>3</span>
                          </li>
                          <li
                            class="flex items-center gap-[10px] text-[#1a1a1a] text-[12px] font-bold"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="custom-meta-icon custom-meta-icon-svg"
                              width="15"
                              height="36"
                              viewBox="0 0 26 36"
                              fill="none"
                            >
                              <path
                                d="M7 15.4761V7.47607C7 4.16237 9.68629 1.47607 13 1.47607H25V4.22607H13.9552C11.7461 4.22607 9.95522 6.01694 9.95522 8.22607V15.4761"
                                stroke="#7C40F9"
                              ></path>
                              <rect
                                x="4.5"
                                y="15.9761"
                                width="7"
                                height="3"
                                stroke="#7C40F9"
                              ></rect>
                              <path
                                d="M0.517144 25.6535C0.773859 21.9228 3.88152 18.9761 7.67742 18.9761H8.22581C12.0217 18.9761 15.1294 21.9228 15.3861 25.6535H0.517144Z"
                                stroke="#7C40F9"
                              ></path>
                              <path
                                d="M2.19336 27.8003V31.639"
                                stroke="#7C40F9"
                                stroke-linecap="round"
                              ></path>
                              <path
                                d="M4.93555 31.6362V35.4749"
                                stroke="#7C40F9"
                                stroke-linecap="round"
                              ></path>
                              <path
                                d="M10.4194 31.6362V35.4749"
                                stroke="#7C40F9"
                                stroke-linecap="round"
                              ></path>
                              <path
                                d="M7.67725 27.8003V31.639"
                                stroke="#7C40F9"
                                stroke-linecap="round"
                              ></path>
                              <path
                                d="M13.1611 27.8003V31.639"
                                stroke="#7C40F9"
                                stroke-linecap="round"
                              ></path>
                            </svg>
                            <span>3.5</span>
                          </li>
                          <li
                            class="flex items-center gap-[10px] text-[#1a1a1a] text-[12px] font-bold"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="custom-meta-icon custom-meta-icon-svg"
                              width="15"
                              height="26"
                              viewBox="0 0 27 26"
                              fill="none"
                            >
                              <path
                                d="M11 1.47607H2V10.4761"
                                stroke="#7C40F9"
                                stroke-linecap="round"
                              ></path>
                              <path
                                d="M26 10.4761L26 1.47607L17 1.47607"
                                stroke="#7C40F9"
                                stroke-linecap="round"
                              ></path>
                              <path
                                d="M17 24.4761L26 24.4761L26 16.4761"
                                stroke="#7C40F9"
                                stroke-linecap="round"
                              ></path>
                              <path
                                d="M1 16.4761L1 25.4761L9 25.4761"
                                stroke="#7C40F9"
                                stroke-linecap="round"
                              ></path>
                              <path
                                d="M4.50023 21.4609C4.49187 21.7369 4.70884 21.9675 4.98486 21.9758L9.48279 22.1121C9.75881 22.1205 9.98934 21.9035 9.99771 21.6275C10.0061 21.3515 9.7891 21.121 9.51308 21.1126L5.51492 20.9914L5.63607 16.9933C5.64444 16.7173 5.42746 16.4867 5.15145 16.4784C4.87543 16.47 4.64489 16.687 4.63653 16.963L4.50023 21.4609ZM22.4998 5.49122C22.5081 5.2152 22.2912 4.98467 22.0151 4.9763L17.5172 4.84C17.2412 4.83164 17.0107 5.04861 17.0023 5.32463C16.9939 5.60064 17.2109 5.83118 17.4869 5.83954L21.4851 5.9607L21.3639 9.95887C21.3556 10.2349 21.5725 10.4654 21.8486 10.4738C22.1246 10.4821 22.3551 10.2652 22.3635 9.98915L22.4998 5.49122ZM5.34268 21.8402L22.3427 5.84017L21.6573 5.11197L4.65732 21.112L5.34268 21.8402Z"
                                fill="#7C40F9"
                              ></path>
                            </svg>
                            <span>3500 sq ft</span>
                          </li>
                        </ul>
                      </div>
                      <div
                        class="price flex items-center justify-between py-[8px] border-t border-t-[#f4f4f4]"
                      >
                        <ul class="flex items-center gap-1.5">
                          <li class="w-[28px] h-[28px]">
                            <img
                              src=${item?.authorImg}
                              alt=""
                              class="w-[28px] h-[28px] object-contain rounded-full"
                            />
                          </li>
                          <li
                            class="text-[14px] font-bold font-roboto text-[#000000]"
                          >
                            ${item?.authorName}
                          </li>
                        </ul>
                        <span class="text-[22px] font-bold text-[#793df9]">
                          $${item?.price}
                        </span>
                      </div>
                    </div>
                    <div class="actions">
                      <ul class="flex items-center justify-between">
                        <li
                          class="h-[42px] text-[12px] font-medium leading-[1] bg-[#fff] text-[#1a1a1a] cursor-pointer drop-shadow-[0_0_9px_rgba(0,0,0,0.1)] flex items-center w-full justify-center hover:bg-[#e7e2e2] duration-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="custom-meta-icon custom-meta-icon-svg"
                            width="17"
                            height="12"
                            viewBox="0 0 15 13"
                            fill="none"
                          >
                            <path
                              class="rh-ultra-light"
                              d="M2.21216 7.2564C1.46509 6.55913 1.04175 5.56304 1.04175 4.51714V4.39263C1.04175 2.64946 2.28687 1.15532 4.00513 0.881397C5.15063 0.682179 6.29614 1.05571 7.11792 1.85259L7.41675 2.15142L7.71558 1.85259C8.51245 1.05571 9.68286 0.682179 10.8035 0.881397C12.5217 1.15532 13.7917 2.64946 13.7917 4.39263V4.51714C13.7917 5.56304 13.3435 6.55913 12.5964 7.2564L8.08911 11.4649C7.91479 11.6392 7.66577 11.7139 7.41675 11.7139C7.14282 11.7139 6.8938 11.6392 6.71948 11.4649L2.21216 7.2564Z"
                              fill="#BD9DFF"
                            ></path>
                            <path
                              class="rh-ultra-dark"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.71541 1.85248L7.41659 2.15131L7.11776 1.85248C6.29598 1.05561 5.15047 0.682071 4.00496 0.881289C2.2867 1.15522 1.04159 2.64936 1.04159 4.39252V4.51703C1.04159 5.56293 1.46493 6.55902 2.212 7.25629L6.71932 11.4648C6.89364 11.6391 7.14266 11.7138 7.41659 11.7138C7.66561 11.7138 7.91463 11.6391 8.08895 11.4648L12.5963 7.25629C13.3433 6.55902 13.7916 5.56293 13.7916 4.51703V4.39252C13.7916 2.64936 12.5216 1.15522 10.8033 0.881289C9.6827 0.682071 8.51229 1.05561 7.71541 1.85248ZM10.921 0.182787C9.66422 -0.0386486 8.36152 0.336066 7.41442 1.16465C6.45398 0.339727 5.1732 -0.0393111 3.88852 0.182578C1.82019 0.514786 0.333252 2.31187 0.333252 4.39252V4.51703C0.333252 5.75232 0.833076 6.93816 1.72858 7.77402C1.72862 7.77406 1.72865 7.77409 1.72869 7.77412L6.22846 11.9756C6.57639 12.3169 7.02788 12.4221 7.41659 12.4221C7.79011 12.4221 8.23695 12.312 8.57981 11.9756L13.0796 7.77412C13.0796 7.77409 13.0796 7.77406 13.0797 7.77402C13.9668 6.94603 14.4999 5.7639 14.4999 4.51703V4.39252C14.4999 2.30508 12.9817 0.51441 10.921 0.182787Z"
                              fill="#7C40F9"
                            ></path>
                          </svg>
                          <span>Favorite</span>
                        </li>
                        <li
                          class="h-[42px] text-[12px] font-medium leading-[1] bg-[#fff] text-[#1a1a1a] cursor-pointer drop-shadow-[0_0_9px_rgba(0,0,0,0.1)] flex items-center w-full justify-center hover:bg-[#e7e2e2] duration-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="custom-meta-icon custom-meta-icon-svg"
                            width="17"
                            height="12"
                            fill="none"
                            viewBox="0.5 0.8 33.75 27.98"
                          >
                            <path
                              class="rh-ultra-light rh-ultra-stroke-light"
                              d="M22.3185 27.8475C22.7305 28.2649 23.3714 28.3577 23.8749 28.1258C24.4243 27.8939 24.7447 27.3373 24.7447 26.7808L24.7447 23.8124L33.7169 23.8124L33.7169 16.3917L24.7447 16.3917L24.7447 13.4234C24.7447 12.8204 24.4243 12.2639 23.8749 12.032C23.3714 11.8001 22.7305 11.8928 22.3185 12.3102L14.9943 18.9889C14.6738 19.2672 14.4907 19.6383 14.4907 20.1021C14.4907 20.5195 14.6738 20.8905 14.9943 21.1688L22.3185 27.8475Z"
                              fill="#BD9DFF"
                              stroke="#7C40F9"
                              stroke-width="1.0625"
                              stroke-miterlimit="10"
                            ></path>
                            <path
                              class="rh-ultra-light rh-ultra-stroke-light"
                              d="M12.4312 1.73601C12.0192 1.31859 11.3784 1.22583 10.8748 1.45773C10.3255 1.68963 10.0051 2.24618 10.0051 2.80274V5.77105L1.03284 5.77105L1.03284 13.1918L10.0051 13.1918V16.1601C10.0051 16.7631 10.3255 17.3196 10.8748 17.5515C11.3784 17.7834 12.0192 17.6907 12.4312 17.2732L19.7555 10.5946C20.0759 10.3163 20.259 9.94524 20.259 9.48144C20.259 9.06402 20.0759 8.69298 19.7555 8.4147L12.4312 1.73601Z"
                              fill="#BD9DFF"
                              stroke="#7C40F9"
                              stroke-width="1.0625"
                              stroke-miterlimit="10"
                            ></path>
                          </svg>
                          <span>Compare</span>
                        </li>
                        <li
                          class="h-[42px] text-[12px] font-medium leading-[1] bg-[#fff] text-[#1a1a1a] cursor-pointer drop-shadow-[0_0_9px_rgba(0,0,0,0.1)] flex items-center w-full justify-center hover:bg-[#e7e2e2] duration-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="custom-meta-icon custom-meta-icon-svg"
                            width="17"
                            height="12"
                            fill="none"
                            viewBox="4.95 5.66 15.56 13.79"
                          >
                            <path
                              d="M5.65723 8.13114C5.65723 7.16434 6.43066 6.36328 7.42508 6.36328H18.0322C18.999 6.36328 19.8001 7.16434 19.8001 8.13114V16.9704C19.8001 17.9648 18.999 18.7383 18.0322 18.7383H7.42508C6.43066 18.7383 5.65723 17.9648 5.65723 16.9704V8.13114ZM14.5794 11.0868C14.4689 10.8934 14.2479 10.7829 14.0545 10.7829C13.8336 10.7829 13.6126 10.8934 13.5021 11.0868L11.0989 14.6225L10.3531 13.6833C10.2426 13.5452 10.0492 13.4347 9.85589 13.4347C9.6349 13.4347 9.44155 13.5452 9.33105 13.6833L7.5632 15.8931C7.39746 16.1141 7.36984 16.3903 7.48033 16.6113C7.59082 16.8323 7.8118 16.9704 8.08803 16.9704H10.7398H11.6237H17.3693C17.5903 16.9704 17.8389 16.8599 17.9494 16.639C18.0598 16.418 18.0322 16.1417 17.8941 15.9484L14.5794 11.0868ZM8.75098 10.7829C9.22056 10.7829 9.6349 10.5343 9.88351 10.12C10.1321 9.73326 10.1321 9.20843 9.88351 8.79408C9.6349 8.40737 9.22056 8.13114 8.75098 8.13114C8.25377 8.13114 7.83943 8.40737 7.59082 8.79408C7.34222 9.20843 7.34222 9.73326 7.59082 10.12C7.83943 10.5343 8.25377 10.7829 8.75098 10.7829Z"
                              fill="#BD9DFF"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.0407 11.5523L11.143 15.8154L9.84179 14.1768L8.17253 16.2634H17.2528L14.0407 11.5523ZM7.56306 15.8932L9.33092 13.6834C9.44141 13.5453 9.63477 13.4348 9.85575 13.4348C10.0491 13.4348 10.2425 13.5453 10.353 13.6834L11.0988 14.6226L13.502 11.0869C13.6125 10.8935 13.8334 10.783 14.0544 10.783C14.2478 10.783 14.4688 10.8935 14.5792 11.0869L17.894 15.9485C18.0321 16.1419 18.0597 16.4181 17.9492 16.6391C17.8387 16.86 17.5901 16.9705 17.3691 16.9705H8.0879C7.81167 16.9705 7.59069 16.8324 7.4802 16.6114C7.36971 16.3905 7.39733 16.1142 7.56306 15.8932ZM9.28263 9.74689L9.28854 9.7377C9.38111 9.59371 9.39572 9.36358 9.28226 9.16694C9.1363 8.94591 8.92999 8.83839 8.75084 8.83839C8.53694 8.83839 8.333 8.95319 8.1918 9.16695C8.07835 9.36358 8.09296 9.59371 8.18552 9.7377L8.19143 9.74689L8.19706 9.75627C8.32327 9.96662 8.51235 10.0759 8.75084 10.0759C8.95356 10.0759 9.1464 9.97395 9.27701 9.75627L9.28263 9.74689ZM7.59069 8.7942C7.83929 8.40748 8.25363 8.13125 8.75084 8.13125C9.22043 8.13125 9.63477 8.40748 9.88338 8.7942C10.132 9.20854 10.132 9.73337 9.88338 10.1201C9.63477 10.5344 9.22043 10.783 8.75084 10.783C8.25363 10.783 7.83929 10.5344 7.59069 10.1201C7.34208 9.73337 7.34208 9.20854 7.59069 8.7942ZM4.94995 8.13125C4.94995 6.78114 6.0328 5.65625 7.42495 5.65625H18.0321C19.3894 5.65625 20.5071 6.77391 20.5071 8.13125V16.9705C20.5071 18.3627 19.3822 19.4455 18.0321 19.4455H7.42495C6.03999 19.4455 4.94995 18.3555 4.94995 16.9705V8.13125ZM7.42495 6.36339C6.43053 6.36339 5.65709 7.16445 5.65709 8.13125V16.9705C5.65709 17.965 6.43053 18.7384 7.42495 18.7384H18.0321C18.9989 18.7384 19.8 17.965 19.8 16.9705V8.13125C19.8 7.16445 18.9989 6.36339 18.0321 6.36339H7.42495Z"
                              fill="#7C40F9"
                            ></path>
                          </svg>
                          <span>Images</span>
                        </li>
                        <li
                          class="h-[42px] text-[12px] font-medium leading-[1] bg-[#fff] text-[#1a1a1a] cursor-pointer drop-shadow-[0_0_9px_rgba(0,0,0,0.1)] flex items-center w-full justify-center hover:bg-[#e7e2e2] duration-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="custom-meta-icon custom-meta-icon-svg"
                            width="17"
                            height="12"
                            viewBox="0 0 17 12"
                            fill="none"
                          >
                            <path
                              class="rh-ultra-light"
                              d="M1.21509 2.72144C1.21509 1.85133 1.91118 1.13037 2.80616 1.13037H9.17044C10.0406 1.13037 10.7615 1.85133 10.7615 2.72144V9.08573C10.7615 9.98071 10.0406 10.6768 9.17044 10.6768H2.80616C1.91118 10.6768 1.21509 9.98071 1.21509 9.08573V2.72144ZM15.1121 2.02535C15.3607 2.17451 15.5347 2.44798 15.5347 2.72144V9.08573C15.5347 9.38405 15.3607 9.65752 15.1121 9.80668C14.8386 9.93099 14.5403 9.93099 14.2917 9.75696L11.9051 8.16589L11.5571 7.94215V7.49466V4.31251V3.88989L11.9051 3.66614L14.2917 2.07507C14.5403 1.90105 14.8386 1.90105 15.1121 2.02535Z"
                              fill="#BD9DFF"
                            ></path>
                            <path
                              class="rh-ultra-dark"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.4415 1.39837L15.476 1.41909C15.9027 1.67507 16.242 2.16147 16.242 2.72155V9.08584C16.242 9.65929 15.9137 10.1506 15.476 10.4132L15.4415 10.4339L15.4048 10.4506C14.955 10.655 14.3863 10.682 13.8939 10.3417L11.5179 8.75766L11.4688 8.72609V9.08584C11.4688 10.3786 10.424 11.3841 9.17056 11.3841H2.80627C1.52075 11.3841 0.508057 10.3714 0.508057 9.08584V2.72155C0.508057 1.46812 1.51356 0.42334 2.80627 0.42334H9.17056C10.4312 0.42334 11.4688 1.46089 11.4688 2.72155V3.10616L11.5179 3.07461L13.8939 1.49057C14.3863 1.15026 14.955 1.17722 15.4048 1.3817L15.4415 1.39837ZM14.2918 2.07518L11.9052 3.66625L11.5572 3.89V7.94226L11.9052 8.166L14.2918 9.75707C14.5404 9.9311 14.8387 9.9311 15.1122 9.80679C15.3608 9.65763 15.5348 9.38417 15.5348 9.08584V2.72155C15.5348 2.44809 15.3608 2.17462 15.1122 2.02546C14.8387 1.90116 14.5404 1.90116 14.2918 2.07518ZM2.80627 1.13048C1.91129 1.13048 1.2152 1.85144 1.2152 2.72155V9.08584C1.2152 9.98082 1.91129 10.6769 2.80627 10.6769H9.17056C10.0407 10.6769 10.7616 9.98082 10.7616 9.08584V2.72155C10.7616 1.85144 10.0407 1.13048 9.17056 1.13048H2.80627Z"
                              fill="#7C40F9"
                            ></path>
                          </svg>
                          <span>Videos</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>`;
    PRODUCTS_WRAPPER.innerHTML += renderProducts;
  });
  swiper.update();
});
