"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNeighbourhoods = exports.getCityName = exports.getDistrictsName = exports.getCityNameAndPlates = void 0;
var cityPlates_json_1 = __importDefault(require("../data/cityPlates.json"));
var districts_json_1 = __importDefault(require("../data/districts.json"));
var citys_json_1 = __importDefault(require("../data/citys.json"));
var neighbourhoods_json_1 = __importDefault(require("../data/neighbourhoods.json"));
function getCityNameAndPlates() {
    return cityPlates_json_1.default;
}
exports.getCityNameAndPlates = getCityNameAndPlates;
function getDistrictsName(city) {
    return districts_json_1.default.find(function (district) {
        if (district.CityName === city || district.PlatesNo === 21)
            return district;
    });
}
exports.getDistrictsName = getDistrictsName;
function getCityName() {
    return citys_json_1.default;
}
exports.getCityName = getCityName;
function getNeighbourhoods(cityName, districtName) {
    return neighbourhoods_json_1.default[cityName.toLocaleUpperCase('tr-TR')][districtName.toLocaleUpperCase('tr-TR')];
}
exports.getNeighbourhoods = getNeighbourhoods;
//# sourceMappingURL=index.js.map