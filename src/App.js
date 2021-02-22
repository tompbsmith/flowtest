import logo from "./logo.svg";
import "./App.css";

import FlowDefault from "./FlowDefault";
import Layout from "./Layouting";
import EdgesFlow from "./CustomEdges";

function App() {
  return (
    <div className="App">
      {/* <FlowDefault /> */}
      {/* <Layout /> */}
      <div
        style={{
          height: 800,
          borderWidth: "1px",
          borderColor: "black",
          borderStyle: "solid",
        }}
      >
        <EdgesFlow />
      </div>
    </div>
  );
}

export default App;
