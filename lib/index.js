"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNeighbourhoods = exports.getCityName = exports.getDistrictsName = exports.getCityNameAndPlates = void 0;
var data_1 = require("./data");
function getCityNameAndPlates() {
    return new Promise(function (resolve, reject) {
        try {
            resolve(data_1.CityPlates);
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.getCityNameAndPlates = getCityNameAndPlates;
function getDistrictsName(city) {
    return new Promise(function (resolve, reject) {
        try {
            data_1.Districts.find(function (district) {
                if (district.CityName === city || district.PlatesNo === city)
                    resolve(district);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.getDistrictsName = getDistrictsName;
function getCityName() {
    return new Promise(function (resolve, reject) {
        try {
            resolve(data_1.CityNames);
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.getCityName = getCityName;
function getNeighbourhoods(cityName, districtName) {
    return new Promise(function (resolve, reject) {
        try {
            resolve(data_1.Neighbourhoods[cityName.toLocaleUpperCase("tr-TR")][districtName.toLocaleUpperCase("tr-TR")]);
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.getNeighbourhoods = getNeighbourhoods;
//# sourceMappingURL=index.js.map