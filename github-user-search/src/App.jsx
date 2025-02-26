import Search from "./components/Search";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">GitHub User Search</h1>
      <Search />
    </div>
  );
};

export default App;