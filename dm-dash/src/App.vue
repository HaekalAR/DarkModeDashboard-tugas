<script setup>
// Import ikon SVG
import OverviewIcon from '@/icons/overview.svg'
import ChartIcon from '@/icons/charts.svg'
import CalendarIcon from '@/icons/calendar.svg'
import ContactIcon from '@/icons/contacts.svg'
import SettingIcon from '@/icons/settings.svg'

// Importing charts
import barChart from '@/components/chart/barChart.vue'
import pieChart from '@/components/chart/pieChart.vue'
import lineChart from '@/components/chart/lineChart.vue'
// Menetapkan menu dengan nama ikon dan ikon SVG yang sesuai
const menu = [
  { name: 'Overview', icon: OverviewIcon },
  { name: 'Waifu Growth', icon: ChartIcon },
  { name: 'Dates', icon: CalendarIcon },
  { name: 'Contacts', icon: ContactIcon },
  { name: 'Settings', icon: SettingIcon }
]
</script>

<template>
  <div class="bg-gray-900 py-4 px-2 flex md:hidden items-center justify-between">
    <a href="#" class="flex items-center text-lg font-medium text-white gap-2">
      <svg
        width="35px"
        height="35px"
        viewBox="-3.12 -3.12 30.24 30.24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
        transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="#FFFFFF"
          stroke-width="0.096"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M8 5.07026C9.17669 4.38958 10.5429 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 10.5429 4.38958 9.17669 5.07026 8"
            stroke="#FFFFFF"
            stroke-width="0.9120000000000001"
            stroke-linecap="round"
          ></path>
          <path
            d="M13.8309 14.9264C8.40242 17.8185 3.18203 18.8529 2.17085 17.2367C1.63758 16.3844 2.38148 14.9651 4 13.3897M17.8486 6.19085C19.8605 5.81929 21.3391 5.98001 21.8291 6.76327C22.6266 8.03781 20.5682 10.5801 17 13.0164"
            stroke="#FFFFFF"
            stroke-width="0.9120000000000001"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
      <span>Waifu Planet</span>
    </a>
    <div class="pr-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="1.5em" fill="#606060">
        <path
          d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        />
      </svg>
    </div>
  </div>
  <div class="flex min-h-screen w-full bg-gray-700 font-sans">
    <aside class="md:flex hidden w-64 flex-col px-4 pt-10 pb-6">
      <a href="#" class="flex items-center text-2xl font-medium text-white">
        <svg
          width="50px"
          height="50px"
          viewBox="-3.12 -3.12 30.24 30.24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#000000"
          transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#FFFFFF"
            stroke-width="0.096"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M8 5.07026C9.17669 4.38958 10.5429 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 10.5429 4.38958 9.17669 5.07026 8"
              stroke="#FFFFFF"
              stroke-width="0.9120000000000001"
              stroke-linecap="round"
            ></path>
            <path
              d="M13.8309 14.9264C8.40242 17.8185 3.18203 18.8529 2.17085 17.2367C1.63758 16.3844 2.38148 14.9651 4 13.3897M17.8486 6.19085C19.8605 5.81929 21.3391 5.98001 21.8291 6.76327C22.6266 8.03781 20.5682 10.5801 17 13.0164"
              stroke="#FFFFFF"
              stroke-width="0.9120000000000001"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
        <span>Waifu Planet</span>
      </a>
      <ul class="flex flex-1 flex-col gap-y-10 px-8 pt-14">
        <li v-for="item in menu" :key="item.name">
          <a
            href="#"
            class="items-center flex gap-x-4 text-gray-400 hover:font-medium hover:text-white focus:font-medium focus:text-white focus:outline-none transition-all duration-200 group outline-none"
          >
            <img
              class="w-6 h-6 icon contrast-50 group-hover:invert transition-all duration-200 outline-none group-focus:invert"
              :src="item.icon"
              alt="icon"
            />
            <span>{{ item.name }}</span>
          </a>
        </li>
        <div class="bg-gray-900 p-4 rounded-md sticky">
          <h1 class="text-lg font-medium text-[whitesmoke] text-center">
            Made by <span>Haekal A.R.</span>
          </h1>
          <p class="text-sm text-gray-400 text-center">
            Using <span class="text-[#42b883]">Vue 3</span> and
            <span class="text-[#06B6D4]">Tailwindcss</span> (W/O component ui)
          </p>
          <button
            class="w-full bg-gray-700 rounded-md mb-2 mt-3 py-2 text-sm text-gray-400 font-semibold"
          >
            Alamak
          </button>
        </div>
      </ul>
    </aside>
    <!-- Main Section -->

    <main class="flex flex-col md:flex-1 min-h-screen md:rounded-l-[48px] bg-gray-800 p-4 w-[99%]">
      <nav class="flex items-center gap-x-6">
        <!-- Div - 1 -->
        <div class="md:flex w-full items-center justify-between">
          <div class="flex md:hidden justify-between">
            <h1 class="text-[30px] font-bold text-white">Overview</h1>
            <button
              class="text-gray-400 flex h-12 items-center gap-2 rounded-full bg-gray-900 px-3 hover:text-white"
            >
              <img
                src="@/assets/Rozaliya.jpeg"
                alt="pfp"
                class="w-8 h-8 rounded-full object-cover"
              />
              <span>Rozaliya</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="30">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#414141"
                    stroke-width="1.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
          <div class="flex items-center gap-x-2 md:pt-0 pt-4">
            <input
              type="text"
              placeholder="Search..."
              class="rounded-md text-sm bg-gray-900 text-gray-400 px-4 py-2"
            />
            <button class="rounded-md bg-gray-900 text-sm text-gray-400 hover:text-white px-7 py-2">
              + Account
            </button>
          </div>
        </div>
        <!-- Div - 2 -->
        <div class="md:flex hidden w-3/5 items-center justify-between">
          <div class="flex items-center gap-x-2.5">
            <button class="bg-gray-900 p-[8px] rounded-full">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="30">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                    stroke="#606060"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </button>
            <button class="bg-gray-900 p-[8px] rounded-full">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="30">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12.0009 5C13.4331 5 14.8066 5.50571 15.8193 6.40589C16.832 7.30606 17.4009 8.52696 17.4009 9.8C17.4009 11.7691 17.846 13.2436 18.4232 14.3279C19.1606 15.7133 19.5293 16.406 19.5088 16.5642C19.4849 16.7489 19.4544 16.7997 19.3026 16.9075C19.1725 17 18.5254 17 17.2311 17H6.77066C5.47638 17 4.82925 17 4.69916 16.9075C4.54741 16.7997 4.51692 16.7489 4.493 16.5642C4.47249 16.406 4.8412 15.7133 5.57863 14.3279C6.1558 13.2436 6.60089 11.7691 6.60089 9.8C6.60089 8.52696 7.16982 7.30606 8.18251 6.40589C9.19521 5.50571 10.5687 5 12.0009 5ZM12.0009 5V3M9.35489 20C10.0611 20.6233 10.9888 21.0016 12.0049 21.0016C13.0209 21.0016 13.9486 20.6233 14.6549 20"
                    stroke="#606060"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </button>
            <button class="bg-gray-900 p-[8px] rounded-full">
              <svg
                viewBox="-2.4 -2.4 28.80 28.80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#bdbdbd"
                transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                height="30"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#606060"
                  stroke-width="0.048"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M3 12V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.0799 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V12M3 12H6.67452C7.16369 12 7.40829 12 7.63846 12.0553C7.84254 12.1043 8.03763 12.1851 8.21657 12.2947C8.4184 12.4184 8.59136 12.5914 8.93726 12.9373L9.06274 13.0627C9.40865 13.4086 9.5816 13.5816 9.78343 13.7053C9.96237 13.8149 10.1575 13.8957 10.3615 13.9447C10.5917 14 10.8363 14 11.3255 14H12.6745C13.1637 14 13.4083 14 13.6385 13.9447C13.8425 13.8957 14.0376 13.8149 14.2166 13.7053C14.4184 13.5816 14.5914 13.4086 14.9373 13.0627L15.0627 12.9373C15.4086 12.5914 15.5816 12.4184 15.7834 12.2947C15.9624 12.1851 16.1575 12.1043 16.3615 12.0553C16.5917 12 16.8363 12 17.3255 12H21M3 12L5.32639 6.83025C5.78752 5.8055 6.0181 5.29312 6.38026 4.91755C6.70041 4.58556 7.09278 4.33186 7.52691 4.17615C8.01802 4 8.57988 4 9.70361 4H14.2964C15.4201 4 15.982 4 16.4731 4.17615C16.9072 4.33186 17.2996 4.58556 17.6197 4.91755C17.9819 5.29312 18.2125 5.8055 18.6736 6.83025L21 12"
                    stroke="#606060"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
          <button
            class="text-gray-400 flex h-12 items-center gap-2 rounded-full bg-gray-900 px-3 hover:text-white"
          >
            <img src="@/assets/Rozaliya.jpeg" alt="pfp" class="w-8 h-8 rounded-full object-cover" />
            <span>Rozaliya</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="30">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M7 10L12 15L17 10"
                  stroke="#414141"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </nav>
      <div class="flex gap-x-6 py-8">
        <div class="flex md:w-3/5 w-[99%] text-center flex-col gap-y-8">
          <div
            class="flex items-center justify-between bg-gray-900 rounded-md p-7 px-2 text-gray-400"
          >
            <div class="flex items-center gap-x-4">
              <div>
                <div>Waifu Count</div>
                <div class="text-white">90+</div>
              </div>
            </div>
            <div>
              <div>Waifu Folders</div>
              <div class="text-white">7</div>
            </div>
            <div>
              <div>Anime Waifu</div>
              <div class="text-white">13</div>
            </div>
            <div>
              <div>Game Waifu</div>
              <div class="text-white">12</div>
            </div>
          </div>
          <div class="rounded-md flex flex-col justify-between bg-gray-900 p-7">
            <div class="flex items-center justify-between">
              <h2 class="text-white text-[20px] font-medium">Waifu Statistics</h2>
              <button
                class="text-gray-400 flex items-center bg-gray-800 px-4 rounded-md hover:text-white transition-all duration-200 stroke-gray-400 hover:stroke-white"
              >
                <span>jan-Aug</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="30">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M7 10L12 15L17 10"
                      stroke-width="1.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
            <div class="pt-4 flex">
              <barChart />
            </div>
          </div>
          <div class="rounded-md flex flex-col justify-between bg-gray-900 py-7 px-6">
            <div class="flex items-center justify-between">
              <h1 class="text-white text-[20px] font-medium">Recent Waifu</h1>
              <button
                class="text-gray-400 flex items-center bg-gray-800 px-4 py-2 rounded-md hover:text-white transition-all duration-200 stroke-gray-400 hover:stroke-white"
              >
                View All
              </button>
            </div>
            <div>
              <table class="my-4">
                <tr
                  class="flex gap-2 items-center text-gray-400 hover:text-white duration-200 transition-all cursor-pointer"
                >
                  <td>
                    <div class="flex items-center gap-4">
                      <img src="@/assets/Bronnie.png" alt="bronnie" class="h-8 w-8 rounded-full" />
                      <p>
                        Haxxor Bunny - <br />
                        Honkai Impact 3
                      </p>
                    </div>
                  </td>
                  <td>| 43 minutes ago</td>
                </tr>
                <tr class="text-gray-700 text-sm">
                  <td>────────────────────────────────────────────</td>
                </tr>
                <tr
                  class="flex gap-2 items-center text-gray-400 hover:text-white duration-200 transition-all cursor-pointer"
                >
                  <td>
                    <div class="flex items-center gap-4">
                      <img
                        src="@/assets/Silverwolf.jpeg"
                        alt="bronnie"
                        class="h-8 w-8 rounded-full"
                      />
                      <p>
                        Silver Wolf - <br />
                        Honkai Star Rail
                      </p>
                    </div>
                  </td>
                  <td>| 46 minutes ago</td>
                </tr>
                <tr class="text-gray-700 text-sm">
                  <td>────────────────────────────────────────────</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="rounded-md flex flex-col justify-between bg-gray-900 p-7">
            <div class="flex items-center justify-between">
              <h1 class="text-white md:text-[20px] font-medium">Time Consumption Statistics</h1>
              <button
                class="text-gray-400 flex items-center bg-gray-800 px-4 rounded-md hover:text-white transition-all duration-200 stroke-gray-400 hover:stroke-white"
              >
                <span>jan-Aug</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="30">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M7 10L12 15L17 10"
                      stroke-width="1.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
            <div class="border-2 border-gray-800 mt-10 pb-4 rounded-xl">
              <pieChart />
            </div>
          </div>
          <div class="md:hidden block bg-gray-900 rounded-md p-4">
            <lineChart />
          </div>
          <div class="md:hidden block">
            <div class="rounded-md flex flex-col justify-between bg-gray-900 p-7">
              <div class="flex items-center justify-between">
                <h1 class="text-white text-[20px] font-medium">Listed Platform</h1>
                <button
                  class="text-gray-400 flex items-center bg-gray-800 px-4 py-2 rounded-md hover:text-white transition-all duration-200 stroke-gray-400 hover:stroke-white text-sm"
                >
                  + Add New
                </button>
              </div>
              <div class="grid grid-cols-3 place-items-center pt-8 gap-4">
                <div
                  class="flex flex-col gap-2 cursor-pointer bg-gray-800 py-2 px-2 rounded-md items-center justify-center text-gray-400 hover:text-white transition-all duration-200 text-sm"
                >
                  <img src="@/assets/crunchyroll.png" alt="crunchyroll" class="h-12" />
                  <span>Crunchyroll</span>
                </div>
                <div
                  class="flex flex-col gap-2 cursor-pointer bg-gray-800 py-2 px-2 rounded-md items-center justify-center text-gray-400 hover:text-white transition-all duration-200 text-sm"
                >
                  <img src="@/assets/muse.png" alt="muse" class="h-12" />
                  <span>MuseAsia</span>
                </div>
                <div
                  class="flex flex-col gap-2 cursor-pointer bg-gray-800 py-2 px-2 rounded-md items-center justify-center text-gray-400 hover:text-white transition-all duration-200 text-sm"
                >
                  <img src="@/assets/funimation.png" alt="funimation" class="h-12" />
                  <span>Funimation</span>
                </div>
              </div>
              <div
                class="bg-gray-800 w-full py-3 mt-4 text-center text-gray-400 hover:text-white transition-alll duration-200 cursor-pointer"
              >
                Start Watching
              </div>
            </div>
          </div>
          <div>
            <div class="rounded-md flex md:hidden flex-col justify-between bg-gray-900 p-7">
              <div class="flex items-center justify-between">
                <h1 class="text-white text-[20px] font-medium">Time Wasted</h1>
                <button
                  class="text-gray-400 flex items-center bg-gray-800 px-4 py-2 rounded-md hover:text-white transition-all duration-200 stroke-gray-400 hover:stroke-white text-sm"
                >
                  <span>Today</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M7 10L12 15L17 10"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
              <div class="flex flex-col gap-2 pt-8">
                <div class="bg-gray-800 py-2 px-4">
                  <div
                    class="flex items-center gap-2 text-white text-sm transition-all duration-200 cursor-pointer"
                  >
                    <img
                      src="@/assets/muse.png"
                      alt="muse"
                      class="w-12 bg-gray-900 p-[6px] rounded-md"
                    />
                    <p>Muse &#40; Indonesia &#41; - Tensei Shitara Slime Datta Ken : 4</p>
                  </div>
                </div>
                <div class="bg-gray-800 py-2 px-4">
                  <div
                    class="flex items-center gap-2 text-white text-sm transition-all duration-200 cursor-pointer"
                  >
                    <img
                      src="@/assets/crunchyroll.png"
                      alt="crunchyroll"
                      class="w-9 bg-gray-900 p-[6px] rounded-md"
                    />
                    <p>Crunchyroll - Tantei wa Mou Shindeiru : 2</p>
                  </div>
                </div>
                <div class="bg-gray-800 py-2 px-4">
                  <div
                    class="flex items-center gap-2 text-sm text-white transition-all duration-200 cursor-pointer"
                  >
                    <img
                      src="@/assets/funimation.png"
                      alt="funimation"
                      class="w-10 bg-gray-900 p-[6px] rounded-md"
                    />
                    <p>Funimation - Fumetsu no Anata e : 7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:flex hidden w-3/5 flex-col gap-y-8">
          <div class="rounded-md flex flex-col justify-between bg-gray-900 p-7">
            <div class="flex items-center justify-between">
              <h1 class="text-white text-[20px] font-medium">Listed Platform</h1>
              <button
                class="text-gray-400 flex items-center bg-gray-800 px-4 py-2 rounded-md hover:text-white transition-all duration-200 stroke-gray-400 hover:stroke-white text-sm"
              >
                + Add New
              </button>
            </div>
            <div class="grid grid-cols-3 place-items-center pt-8">
              <div
                class="flex flex-col gap-2 cursor-pointer bg-gray-800 py-2 px-10 rounded-md items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                <img src="@/assets/crunchyroll.png" alt="crunchyroll" class="h-12" />
                <span>CrunchyRoll</span>
              </div>
              <div
                class="flex flex-col gap-2 cursor-pointer bg-gray-800 py-2 px-7 rounded-md items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                <img src="@/assets/muse.png" alt="muse" class="h-12" />
                <span>Muse Asia</span>
              </div>
              <div
                class="flex flex-col gap-2 cursor-pointer bg-gray-800 py-2 px-11 rounded-md items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                <img src="@/assets/funimation.png" alt="funimation" class="h-12" />
                <span>Funimation</span>
              </div>
            </div>
            <div
              class="bg-gray-800 w-full py-3 mt-4 text-center text-gray-400 hover:text-white transition-alll duration-200 cursor-pointer"
            >
              Start Watching
            </div>
          </div>
          <div class="rounded-md flex flex-col justify-between bg-gray-900 p-7">
            <div class="flex items-center justify-between">
              <h1 class="text-white text-[20px] font-medium">Time Wasted</h1>
              <button
                class="text-gray-400 flex items-center bg-gray-800 px-4 py-2 rounded-md hover:text-white transition-all duration-200 stroke-gray-400 hover:stroke-white text-sm"
              >
                <span>Today</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="20">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M7 10L12 15L17 10"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
            <div class="flex flex-col gap-2 pt-8">
              <div class="bg-gray-800 py-2 px-4">
                <div
                  class="flex items-center gap-2 text-white transition-all duration-200 cursor-pointer"
                >
                  <img
                    src="@/assets/muse.png"
                    alt="muse"
                    class="w-12 bg-gray-900 p-[6px] rounded-md"
                  />
                  <p>Muse &#40; Indonesia &#41; - Tensei Shitara Slime Datta Ken : 4</p>
                </div>
              </div>
              <div class="bg-gray-800 py-2 px-4">
                <div
                  class="flex items-center gap-2 text-white transition-all duration-200 cursor-pointer"
                >
                  <img
                    src="@/assets/crunchyroll.png"
                    alt="crunchyroll"
                    class="w-9 bg-gray-900 p-[6px] rounded-md"
                  />
                  <p>Crunchyroll - Tantei wa Mou Shindeiru : 2</p>
                </div>
              </div>
              <div class="bg-gray-800 py-2 px-4">
                <div
                  class="flex items-center gap-2 text-white transition-all duration-200 cursor-pointer"
                >
                  <img
                    src="@/assets/funimation.png"
                    alt="funimation"
                    class="w-10 bg-gray-900 p-[6px] rounded-md"
                  />
                  <p>Funimation - Fumetsu no Anata e : 7</p>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-md flex flex-col justify-between bg-gray-900 p-7">
            <div class="flex items-center justify-between">
              <h1 class="text-white text-[20px] font-medium">Time Wasted</h1>
              <button
                class="text-gray-400 flex items-center bg-gray-800 px-4 py-2 rounded-md hover:text-white transition-all duration-200 stroke-gray-400 hover:stroke-white text-sm"
              >
                <span>Today</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="20">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M7 10L12 15L17 10"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
            <div>
              <lineChart />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <!-- === RouterView === -->
  <RouterView />
</template>
