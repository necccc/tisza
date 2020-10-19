"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-underscore-dangle */
exports.default = invoice => `<?xml version="1.0" encoding="UTF-8"?>
<xmlszamla xmlns="http://www.szamlazz.hu/xmlszamla" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.szamlazz.hu/xmlszamla https://www.szamlazz.hu/szamla/docs/xsds/agent/xmlszamla.xsd">
${invoice._generateXML()}
</xmlszamla>`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVidWcteG1sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlYnVnLXhtbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUF5QztBQUN6QyxrQkFBZSxPQUFPLENBQUMsRUFBRSxDQUFDOztFQUV4QixPQUFPLENBQUMsWUFBWSxFQUFFO2FBQ1gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5leHBvcnQgZGVmYXVsdCBpbnZvaWNlID0+IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbjx4bWxzemFtbGEgeG1sbnM9XCJodHRwOi8vd3d3LnN6YW1sYXp6Lmh1L3htbHN6YW1sYVwiIHhtbG5zOnhzaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXCIgeHNpOnNjaGVtYUxvY2F0aW9uPVwiaHR0cDovL3d3dy5zemFtbGF6ei5odS94bWxzemFtbGEgaHR0cHM6Ly93d3cuc3phbWxhenouaHUvc3phbWxhL2RvY3MveHNkcy9hZ2VudC94bWxzemFtbGEueHNkXCI+XG4ke2ludm9pY2UuX2dlbmVyYXRlWE1MKCl9XG48L3htbHN6YW1sYT5gO1xuXG4iXX0=