import type { State, CountyData, CityData, NeighborhoodData } from '@/types/geo';

import { jackson } from './jackson';
import { clay } from './clay';
import { platte } from './platte';
import { wyandotte } from './wyandotte';
import { johnson } from './johnson';

export { jackson, clay, platte, wyandotte, johnson };

export const allCounties: CountyData[] = [jackson, clay, platte, wyandotte, johnson];

export function getCountiesByState(state: State): CountyData[] {
  return allCounties.filter((c) => c.state === state);
}

export function getCountyBySlug(state: State, slug: string): CountyData | undefined {
  return allCounties.find((c) => c.state === state && c.slug === slug);
}

export function getCityBySlug(
  state: State,
  countySlug: string,
  citySlug: string
): CityData | undefined {
  const county = getCountyBySlug(state, countySlug);
  if (!county) return undefined;
  return county.cities.find((city) => city.slug === citySlug);
}

export function getNeighborhoodBySlug(
  state: State,
  countySlug: string,
  citySlug: string,
  neighborhoodSlug: string
): NeighborhoodData | undefined {
  const city = getCityBySlug(state, countySlug, citySlug);
  if (!city) return undefined;
  return city.neighborhoods.find((n) => n.slug === neighborhoodSlug);
}

export function getAllCities(): CityData[] {
  return allCounties.flatMap((county) => county.cities);
}

export function getAllNeighborhoods(): Array<{
  neighborhood: NeighborhoodData;
  city: CityData;
  county: CountyData;
}> {
  return allCounties.flatMap((county) =>
    county.cities.flatMap((city) =>
      city.neighborhoods.map((neighborhood) => ({
        neighborhood,
        city,
        county,
      }))
    )
  );
}
