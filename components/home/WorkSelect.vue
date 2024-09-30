<template>
  <div class="container pt-32">
    <div class="flex gap-3 lg:gap-5 items-center">
      <span class="w-32 h-[3px] bg-black"></span>
      <h3 class="text-black text-3xl lg:text-6xl">Selected Work</h3>
    </div>

    <p class="mt-6 mb-20 text-black">
      Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus
      ultricies velit elementum ut dui sed augue ultrices phasellus ullamcorper
      condimentum ut suspendisse viverra ornare sit venenatis
    </p>

    <div class="lg:flex">
      <div class="relative w-3/5 h-full">
        <div class="flex items-center">
          <div class="tracking-wider flex-1 text-4xl lg:text-8xl">01</div>
          <img
            data-aos="fade-left"
            src="/assets/Work1.png"
            alt=""
            class="right-0 top-0"
          />
        </div>
        <div class="flex items-end pb-2 -mt-32">
          <img
            data-aos="fade-right"
            src="/assets/Work2.png"
            alt=""
            class="left-0 bottom-0"
          />
          <div class="flex-1 text-center">
            <button class="bg-yellow-50 px-3 py-3 text-white">View Case</button>
          </div>
        </div>
      </div>
      <div class="flex-1 text-center text-black">
        <div class="text-5xl mb-8">Louis Vuitton</div>
        <p class="text-left lg:ml-7">
          Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus
          ultricies velit elementum ut dui sed augue ultrices phasellus
          ullamcorper condimentum ut suspendisse viverra ornare sit venenatis
        </p>
        <div class="justify-end items-center lg:flex">
          <button class="flex items-center gap-3 lg:mt-[83px] mb-8">
            <span class="w-24 h-[1px] bg-black"></span>
            <span class="text-black">Next</span>
          </button>
          <button class="flex items-center gap-3 translate-x-16">
            <span class="text-black">Prev</span>
            <span class="w-24 h-[1px] bg-black"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
