/**
 * <div id="parent">
 *  <div id="child">
 *      <h1>This is a h1 Tag.</h1>
 *  </div>
 * </div>
 *
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is a h1 tag!"),
    React.createElement("h2", {}, "This is a h2 tag!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is a h1 tag!"),
    React.createElement("h2", {}, "This is a h2 tag!"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
