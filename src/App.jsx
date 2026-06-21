import Background from "./components/Background";
import CounterCard from "./components/CounterCard";

const App = () => (
  <div className="flex items-center justify-center min-h-screen min-h-dvh px-4">
    <Background />
    <CounterCard />
  </div>
);

export default App;