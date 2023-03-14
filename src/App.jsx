import FullProfile from "./Components/FullProfile";
import { TimeLapseProvider } from "./Hooks/Context/TimeLapseContext";

function App() {
  return (
    <main>
      <TimeLapseProvider>
        <FullProfile />
      </TimeLapseProvider>
    </main>
  );
}

export default App;
