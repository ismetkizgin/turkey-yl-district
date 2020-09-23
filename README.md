# Turkey Province, District List

With this package you get a list of cities in Turkey. It is possible to access district and neighborhood information of these provinces.

## Installation
```bash
$ npm install turkey-yl-district
```

## Quick Start

* To attract provincial names;

```js
const { getCityName } = require('turkey-yl-district');

const cityNames = await getCityName();
```

* To take the city names and license plate numbers;

```js
const { getCityNameAndPlates } = require('turkey-yl-district');

const cityNamesAndPlates = await getCityNameAndPlates();
```

* To draw a county list by sending the city name or license plate number;

```js
const { getDistrictsName } = require('turkey-yl-district');

const districtNames = await getDistrictsName('Manisa');

// or

const districtNames = await getDistrictsName('45');
```

* To draw the neighborhood names of the district;

```js
const { getNeighbourhoods } = require('turkey-yl-district');

const neighborhoodNames = await getNeighbourhoods('Manisa', 'Turgutlu');
```

## Useful resources
* [Changelog](https://github.com/ismetkizgin/turkey-yl-district/blob/master/CHANGELOG.md)
