"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNeighbourhoods = exports.getCityName = exports.getDistrictsName = exports.getCityNameAndPlates = void 0;
var data_1 = require("./data");
function getCityNameAndPlates() {
    return data_1.CityPlates;
}
exports.getCityNameAndPlates = getCityNameAndPlates;
function getDistrictsName(city) {
    return data_1.Districts.find(function (district) {
        if (district.CityName === city || district.PlatesNo === 21)
            return district;
    });
}
exports.getDistrictsName = getDistrictsName;
function getCityName() {
    return data_1.CityNames;
}
exports.getCityName = getCityName;
function getNeighbourhoods(cityName, districtName) {
    return data_1.Neighbourhoods[cityName.toLocaleUpperCase("tr-TR")][districtName.toLocaleUpperCase("tr-TR")];
}
exports.getNeighbourhoods = getNeighbourhoods;
//# sourceMappingURL=index.js.map