import { Component } from "solid-js";

import { useIntersectionObserver } from "../../hooks/observationObserverHook";
import UserCards from "./UserCards";

const FetchUsersExample: Component = () => {
  const isIntersecting = useIntersectionObserver("#contents");

  return (
    <>
      <div class="px-6 my-8 mx-auto max-w-7xl lg:px-8">
        <div class="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
          <h1 class="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Design and Explanation
          </h1>
          <div class="grid max-w-xl grid-cols-1 gap-8 mt-10 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <h3 class="text-base font-semibold leading-7 text-teal-600">
                API's Used
              </h3>
              <ul>
                <li>
                  <a
                    class="no-underline hover:underline"
                    href="https://randomuser.me/documentation"
                  >
                    https://randomuser.me/documentation
                  </a>
                </li>
                <li>
                  <a
                    class="no-underline hover:underline"
                    href="https://robohash.org/"
                  >
                    https://robohash.org/
                  </a>
                </li>
              </ul>

              <h3 class="mt-8 text-base font-semibold leading-7 text-teal-600">
                Background Color
              </h3>
              <p>
                Cards background colors are calculate based on the profile
                picture's background color. The process sets the image to the
                canvas and scans one pixel to calculate the color.
              </p>
            </div>
            <div>
              <h3 class="text-base font-semibold leading-7 text-teal-600">
                Intersection Observer
              </h3>
              <p>
                API fetching is initialized when the element is scrolled onto
                screen.
              </p>
              <h3 class="mt-8 text-base font-semibold leading-7 text-teal-600">
                Emoji Flags
              </h3>
              <p>
                Emoji Flags are generated from country codes provided in the
                users API response.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="contents">
        <h1 class="my-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Implementation
        </h1>
        {isIntersecting() ? <UserCards /> : null}
      </div>
    </>
  );
};
export default FetchUsersExample;
