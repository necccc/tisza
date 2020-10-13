"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_catering_per_ticket_1 = __importDefault(require("./get-catering-per-ticket"));
exports.default = (data, eventConfig) => data.map((order) => {
    const catering = Object
        .values(order.quantities)
        .map((ticket) => get_catering_per_ticket_1.default(ticket.release, eventConfig));
    return { ...order, catering };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRlLWNhdGVyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NhbGN1bGF0ZS1jYXRlcmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdGQUE2RDtBQUU3RCxrQkFBZSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUNuRCxNQUFNLFFBQVEsR0FBRyxNQUFNO1NBQ3BCLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1NBQ3hCLEdBQUcsQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFLENBQUMsaUNBQW9CLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBRTNFLE9BQU8sRUFBRSxHQUFHLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQztBQUNoQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRDYXRlcmluZ1BlclRpY2tldCBmcm9tICcuL2dldC1jYXRlcmluZy1wZXItdGlja2V0JztcblxuZXhwb3J0IGRlZmF1bHQgKGRhdGEsIGV2ZW50Q29uZmlnKSA9PiBkYXRhLm1hcCgob3JkZXIpID0+IHtcbiAgICAgIGNvbnN0IGNhdGVyaW5nID0gT2JqZWN0XG4gICAgICAgIC52YWx1ZXMob3JkZXIucXVhbnRpdGllcylcbiAgICAgICAgLm1hcCgodGlja2V0OiBhbnkpID0+IGdldENhdGVyaW5nUGVyVGlja2V0KHRpY2tldC5yZWxlYXNlLCBldmVudENvbmZpZykpO1xuXG4gICAgICByZXR1cm4geyAuLi5vcmRlciwgY2F0ZXJpbmcgfTtcbiAgICB9KTtcbiJdfQ==