import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className="w-full h-screen pt-5 flex *:px-10">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
      </div>
    </main>
  );
}
