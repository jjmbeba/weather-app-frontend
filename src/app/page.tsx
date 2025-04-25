import ExtraInfo from "@/components/extra-info";
import Forecast from "@/components/forecast";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { CurrentWeather } from "@/types/current";

export default async function Home() {
  const data: CurrentWeather = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/weather/current?city=Nairobi`).then((res) => res.json())

  const { main: { humidity }, wind } = data

  return (
    <>
      <main className="w-full py-8 flex *:px-10">
        <Sidebar data={data} />
        <div className="flex-1 md:pl-1/4 lg:pl-[27%]">
          <Navbar />
          <Forecast />
          <ExtraInfo humidity={humidity} wind={wind} />
        </div>
      </main>
      <footer className="text-xs text-gray-500 flex justify-center">
        Uicons by <a href="https://www.flaticon.com/uicons">Flaticon</a>
      </footer>
    </>
  );
}
