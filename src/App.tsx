import type { Component } from "solid-js";
import FetchUsersExample from "./components/Examples/FetchUsersExample";
import HeroHeader from "./components/HeroHeader";
import Section from "./components/Section";

const App: Component = () => {
  return (
    <>
      <HeroHeader />
      <Section title="Fetch Users" id="fetch-users">
        <FetchUsersExample />
      </Section>
    </>
  );
};

export default App;
