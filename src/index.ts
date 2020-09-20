import { CityNames, CityPlates, Districts, Neighbourhoods } from "./data";

export function getCityNameAndPlates(): object {
  return CityPlates;
}

export function getDistrictsName(city: any): object {
  return (<any>Districts).find((district: any) => {
    if (district.CityName === city || district.PlatesNo === city) return district;
  });
}

export function getCityName(): object {
  return CityNames;
}

export function getNeighbourhoods(
  cityName: string,
  districtName: string
): object {
  return (<any>Neighbourhoods)[cityName.toLocaleUpperCase("tr-TR")][
    districtName.toLocaleUpperCase("tr-TR")
  ];
}
