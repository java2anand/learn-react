import { createElement } from "react";
import { createRoot } from "react-dom/client";

const heading1 = createElement("h1", { id: "title1" }, "Heading 1");

const JSX = (
  <h1 id="id" title="title" key="id">
    Namaste React
  </h1>
);

const FunctionalComponent = () => {
    return (
        <h1>Functional Component</h1>
    )
}

const HeaderComponent1 = () => {
  return (
    <div>
      {JSX}
      <FunctionalComponent />
      {FunctionalComponent() }
      <h1>Header Component</h1>
      <h2>H2 Component</h2>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<HeaderComponent1 />);
