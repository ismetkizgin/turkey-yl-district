import { CityNames, CityPlates, Districts, Neighbourhoods } from "./data";

export function getCityNameAndPlates(): any {
  return new Promise((resolve, reject) => {
    try {
      resolve(CityPlates);
    } catch (error) {
      reject(error);
    }
  });
}

export function getDistrictsName(city: any): object {
  return new Promise((resolve, reject) => {
    try {
      resolve(
        (<any>Districts).find((district: any) => {
          if (district.CityName === city || district.PlatesNo === 21)
            return district;
        })
      );
    } catch (error) {
      reject(error);
    }
  });
}

export function getCityName(): object {
  return new Promise((resolve, reject) => {
    try {
      resolve(CityNames);
    } catch (error) {
      reject(error);
    }
  });
}

export function getNeighbourhoods(
  cityName: string,
  districtName: string
): object {
  return new Promise((resolve, reject) => {
    try {
      resolve(
        (<any>Neighbourhoods)[cityName.toLocaleUpperCase("tr-TR")][
          districtName.toLocaleUpperCase("tr-TR")
        ]
      );
    } catch (error) {
      reject(error);
    }
  });
}
