export type State = 'mo' | 'ks';

export interface NeighborhoodData {
  name: string;
  slug: string;
  description: string;
  landmarks: string[];
  medianHomeValue: string;
  distressFactors: string[];
  localHook: string;
}

export interface CityData {
  name: string;
  slug: string;
  state: State;
  county: string;
  countySlug: string;
  description: string;
  population: string;
  medianHomeValue: string;
  neighborhoods: NeighborhoodData[];
}

export interface CountyData {
  name: string;
  slug: string;
  state: State;
  stateName: string;
  description: string;
  seatCity: string;
  population: string;
  medianHomeValue: string;
  taxLienInfo: string;
  probateInfo: string;
  cities: CityData[];
}

export interface StateData {
  name: string;
  slug: State;
  fullName: string;
  counties: CountyData[];
}
