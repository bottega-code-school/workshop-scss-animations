import * as React from "react";
import HorizontalTree from "./HorizontalTree";
import Layout from "./Layout";

const App = () => {
  return (
    <Layout>
      <div className="fade-in">
        <HorizontalTree width={1200} height={400} />
      </div>
    </Layout>
  );
};

export default App;
