import ExtraInfo from "@/components/extra-info";
import Forecast from "@/components/forecast";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { CurrentWeather } from "@/types/current";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams
  const city = searchParams.city || 'Nairobi'
  const units = searchParams.units || 'metric'

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/weather/current?city=${city}&units=${units}`);

    if (!response.ok) {
      throw new Error(`Weather API returned ${response.status}`)
    }

    const data: CurrentWeather = await response.json()
    const { main: { humidity }, wind } = data

    return (
      <>
        <main className="w-full py-8 flex *:px-10">
          <Sidebar data={data} units={units} />
          <div className="flex-1 md:pl-1/4 lg:pl-[27%]">
            <Navbar searchedCity={city as string} />
            <Forecast searchedCity={city as string} units={units as string} />
            <ExtraInfo humidity={humidity} wind={wind} />
          </div>
        </main>
        <footer className="text-xs text-gray-500 flex justify-center">
          Uicons by <a href="https://www.flaticon.com/uicons">Flaticon</a>
        </footer>
      </>
    );
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Failed to load weather data. Please try again later.</p>
      </div>
    );
  }
}
