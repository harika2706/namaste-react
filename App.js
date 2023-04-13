const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from React!!!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//nested html using react
// <div id="parent">
//      <div id="child">
//            <h1></h1>
//      </div>
// </div>

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "Nested HtmL")
  )
);
//heading will be replaced with parent
root.render(parent);

//siblings
const siblings = React.createElement("div", {}, [
  React.createElement("div", {}, [
    React.createElement("h2", {}, "This is inner sibling"),
    React.createElement("h2", {}, "This is inner sibling"),
  ]),
  React.createElement("div", {}, [
    React.createElement("h2", {}, "This is inner sibling"),
    React.createElement("h2", {}, "This is inner sibling"),
  ]),
]);
const root1 = ReactDOM.createRoot(document.getElementById("rootOne"));
root1.render(siblings);
