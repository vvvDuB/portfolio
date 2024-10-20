import Header from "./Header";

function App() {
  let currentLabel = "";

  return (
    <div className="w-screen h-screen bg-[#272932] px-96 py-16 font-custom">
      <Header></Header>
      <h1>{currentLabel}</h1>
    </div>
  );
}

export default App;
