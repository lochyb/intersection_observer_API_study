import { Component, JSXElement } from "solid-js";

interface Section {
  title: string;
  id: string;
  children: JSXElement;
}

const Section: Component<Section> = (props) => {
  return (
    <section class="max-w-4xl mx-auto my-16">
      <div class="px-6 mx-auto max-w-7xl lg:px-8">
        <h2
          class="text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-6xl"
          id={props.id}
        >
          <a class="mr-4 text-black" href={`#${props.id}`}>
            #
          </a>
          {props.title}
        </h2>

        {props.children}
      </div>
    </section>
  );
};

export default Section;
