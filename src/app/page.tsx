import Forecast from "@/components/forecast";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <>
      <main className="w-full h-screen pt-5 -pb-5 flex *:px-10">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <Forecast />
        </div>
      </main>
      <footer className="text-xs text-gray-500 flex justify-center">
        Uicons by <a href="https://www.flaticon.com/uicons">Flaticon</a>
      </footer>
    </>
  );
}
