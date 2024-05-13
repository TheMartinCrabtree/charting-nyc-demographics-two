import MainContainer from "./components/MainContainer";
import Store from "./Store";

function App() {
  return (
    <div>
      <div>Main Window</div>
      <Store>
        <MainContainer />
      </Store>
    </div>
  );
}

export default App;
