import type { Component } from "solid-js";
import HeroHeader from "./components/HeroHeader";
import UserCards from "./components/UserCards";

const App: Component = () => {
  return (
    <>
      <HeroHeader />
      <div class="max-w-xl mx-auto my-16">
        <UserCards />
      </div>
    </>
  );
};

export default App;
