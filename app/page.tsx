import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="w-full max-w-screen-xl mx-auto xl:px-3 flex items-center justify-between text-white">
        <div>LOGO</div>
        <SearchBar />
        <div>ITEM</div>
      </div>
    </main>
  );
}
