import type { Component } from "solid-js";

const HeroHeader: Component = () => {
  return (
    <div class="relative overflow-hidden bg-gradient-to-tl from-neutral-400 to-teal-100">
      <div class="pt-10 pb-20 mx-auto sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-32 lg:px-8">
        <div class="max-w-2xl px-4 mx-auto">
          <div class="flex flex-wrap items-end justify-center min-h-16 gap-4 sm:justify-start">
            <img
              class="h-16"
              src="https://robohash.org/Intersection-Observer-API-Study"
              alt="profile"
            />
            <button class="inline-flex items-center cursor-not-allowed space-x-6">
              <span class="px-3 py-1 text-sm font-semibold text-teal-600 rounded-full leading-6 bg-teal-600/10 ring-1 ring-inset ring-teal-600/10">
                L Bernard
              </span>
              <span class="inline-flex items-center text-sm font-medium text-gray-600 space-x-2 leading-6">
                <span>Created 2023-03-11</span>
                <span class="w-5 h-5 text-gray-400" aria-hidden="true">
                  →
                </span>
              </span>
            </button>
          </div>
          <h1 class="mt-10 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Intersection Observation API
          </h1>
          <h3 class="mt-8 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Projects Aims
          </h3>
          <h4 class="mt-2 font-normal tracking-tight text-md text-slate-900 sm:text-lg">
            - Create simple website with SolidJS
          </h4>
          <h4 class="mt-2 font-normal tracking-tight text-md text-slate-900 sm:text-lg">
            - Initialize javascript logic only when items are displayed on
            screen.
          </h4>
          <h4 class="mt-2 font-normal tracking-tight text-md text-slate-900 sm:text-lg">
            - Set background color based on pictures color
          </h4>
          <p class="mt-6 text-sm text-gray-600 leading-8">
            Note: UI designs from{" "}
            <a
              class="text-revert"
              href="https://tailwindui.com/"
              title="tailwindui"
            >
              https://tailwindui.com/
            </a>
          </p>
          <div class="flex items-center mt-10 gap-x-6">
            <button class="cursor-not-allowed rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
              Documentation
            </button>
            <button class="text-sm font-semibold text-gray-900 cursor-not-allowed leading-6">
              View on GitHub <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
        <div class="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:ml-auto">
          <div
            class="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-teal-600/10 ring-1 ring-teal-50 md:-mr-20 lg:-mr-36"
            aria-hidden="true"
          />
          <div class="shadow-lg md:rounded-3xl">
            <div class="bg-teal-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
              <div
                class="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-teal-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                aria-hidden="true"
              />
              <div class="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                <div class="max-w-2xl mx-auto md:mx-0 md:max-w-none">
                  <div class="overflow-hidden bg-gray-900 rounded-tl-xl">
                    <div class="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div class="flex -mb-px text-sm font-medium text-gray-400 rounded-tl-md leading-6">
                        <div class="px-4 py-2 text-white border-b border-r border-b-white/20 border-r-white/10 bg-white/5">
                          Jokes.jsx
                        </div>
                        <div class="px-4 py-2 border-r border-gray-600/10">
                          App.jsx
                        </div>
                      </div>
                    </div>
                    <div class="px-6 pt-6 text-white space-y-4 pb-14">
                      <h3>Q. What is the most used language in programming?</h3>
                      <h3>A. Profanity.</h3>
                      <br />
                      <h3>Q. What is an algorithm?</h3>
                      <h3>
                        A. A word used by programmers when they don’t want to
                        explain what they did.
                      </h3>
                      <br />
                      <h3>Q. !false</h3>
                      <h3>A. It’s funny because it’s true.</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
