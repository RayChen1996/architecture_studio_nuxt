<template>
  <div class="container pt-32">
    <div class="flex gap-3 lg:gap-5 items-center">
      <span class="w-24 h-[3px] bg-black"></span>
      <h3 class="text-black text-3xl lg:text-6xl">Selected Work</h3>
    </div>

    <p class="mt-6 mb-20">
      Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus
      ultricies velit elementum ut dui sed augue ultrices phasellus ullamcorper
      condimentum ut suspendisse viverra ornare sit venenatis
    </p>

    <div class="flex">
      <div class="relative w-2/3 h-full">
        <img src="/assets/Work1.png" alt="" class="right-0 top-0" />
        <img src="/assets/Work2.png" alt="" class="left-0 bottom-0" />
        <button class="bg-yellow-50 px-3 py-3 text-white">View Case</button>
      </div>
      <div class="flex-1 text-center text-black">
        <div class="text-5xl mb-8">Louis Vuitton</div>
        <p class="text-left">
          Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus
          ultricies velit elementum ut dui sed augue ultrices phasellus
          ullamcorper condimentum ut suspendisse viverra ornare sit venenatis
        </p>
        <div class="justify-end flex">
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
