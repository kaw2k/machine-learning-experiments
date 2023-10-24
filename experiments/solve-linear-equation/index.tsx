import "../_shared/index.css";
import "./index.css";
import { createRoot } from "react-dom/client";

const container = document.getElementsByTagName("body")![0];
const root = createRoot(container);
root.render(<App />);

function App() {
  return <h1>Hello World</h1>;
}
