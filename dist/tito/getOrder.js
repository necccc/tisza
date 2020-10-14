"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("../api"));
exports.default = async (account, event, registration, titoApi = api_1.default) => {
    const url = `https://api.tito.io/v3/${account}/${event}/registrations/${registration}?view=extended`;
    return titoApi(url, process.env.TITO_API_TOKEN);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0T3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGl0by9nZXRPcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlEQUF3QjtBQUV4QixrQkFBZSxLQUFLLEVBQ2xCLE9BQU8sRUFDUCxLQUFLLEVBQ0wsWUFBWSxFQUNaLE9BQU8sR0FBRyxhQUFHLEVBQ2IsRUFBRTtJQUVGLE1BQU0sR0FBRyxHQUFHLDBCQUEwQixPQUFPLElBQUksS0FBSyxrQkFBa0IsWUFBWSxnQkFBZ0IsQ0FBQTtJQUVwRyxPQUFPLE9BQU8sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNsRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBpIGZyb20gJy4uL2FwaSdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKFxuICBhY2NvdW50LFxuICBldmVudCxcbiAgcmVnaXN0cmF0aW9uLFxuICB0aXRvQXBpID0gYXBpXG4pID0+IHtcblxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkudGl0by5pby92My8ke2FjY291bnR9LyR7ZXZlbnR9L3JlZ2lzdHJhdGlvbnMvJHtyZWdpc3RyYXRpb259P3ZpZXc9ZXh0ZW5kZWRgXG5cbiAgcmV0dXJuIHRpdG9BcGkodXJsLCBwcm9jZXNzLmVudi5USVRPX0FQSV9UT0tFTik7XG59XG4iXX0=