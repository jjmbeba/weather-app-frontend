import { WeatherForecastItem } from "@/types/forecast";
import { clsx, type ClassValue } from "clsx"
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getForecastsAtNoon(forecasts: WeatherForecastItem[]): WeatherForecastItem[] {
  const groupedByDate: Record<string, WeatherForecastItem[]> = {};

  forecasts.forEach((forecast) => {
    const date = dayjs(forecast.dt_txt).format('YYYY-MM-DD');
    if (!groupedByDate[date]) groupedByDate[date] = [];
    groupedByDate[date].push(forecast);
  });

  return Object.values(groupedByDate).map((dayForecasts) => {
    return dayForecasts.reduce((closest, current) => {
      const targetHour = 12;
      const currentHour = dayjs(current.dt_txt).hour();
      const closestHour = dayjs(closest.dt_txt).hour();
      return Math.abs(currentHour - targetHour) < Math.abs(closestHour - targetHour)
        ? current
        : closest;
    });
  });
}
