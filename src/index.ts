import CityPlates from "../data/cityPlates.json";
import Districts from "../data/districts.json";
import Citys from "../data/citys.json";
import Neighbourhoods from "../data/neighbourhoods.json";

export function getCityNameAndPlates(): object {
  return CityPlates;
}

export function getDistrictsName(city: any): object {
  return (<any>Districts).find((district: any) => {
    if (district.CityName === city || district.PlatesNo === 21) return district;
  });
}

export function getCityName(): object {
  return Citys;
}

export function getNeighbourhoods(cityName: string, districtName: string): object {
  return (<any>Neighbourhoods)[cityName.toLocaleUpperCase('tr-TR')][districtName.toLocaleUpperCase('tr-TR')]
}