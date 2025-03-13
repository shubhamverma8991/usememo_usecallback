import logo from "./logo.svg";
import "./App.css";
import Memo from "./Memo";
import Callback from "./Callback";

function App() {
  return (
    <>
      <p>useMemo and useCallback</p>
      <Memo />
      <hr />
      <Callback />
    </>
  );
}

export default App;
