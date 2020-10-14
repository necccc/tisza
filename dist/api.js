"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
exports.default = async (url, token, client = axios_1.default.create()) => {
    const request = await client.get(url, {
        headers: {
            Authorization: `Token token=${token}`,
            Accept: 'application/json',
        },
    });
    return request.data;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUE2QztBQUU3QyxrQkFBZSxLQUFLLEVBQ2xCLEdBQVcsRUFDWCxLQUFhLEVBQ2IsU0FBd0IsZUFBSyxDQUFDLE1BQU0sRUFBRSxFQUN0QyxFQUFFO0lBQ0YsTUFBTSxPQUFPLEdBQUcsTUFBTSxNQUFNLENBQUMsR0FBRyxDQUM5QixHQUFHLEVBQ0g7UUFDRSxPQUFPLEVBQUU7WUFDUCxhQUFhLEVBQUUsZUFBZSxLQUFLLEVBQUU7WUFDckMsTUFBTSxFQUFFLGtCQUFrQjtTQUMzQjtLQUNGLENBQ0YsQ0FBQztJQUVGLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQTtBQUNyQixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NJbnN0YW5jZSB9IGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKFxuICB1cmw6IHN0cmluZyxcbiAgdG9rZW46IHN0cmluZyxcbiAgY2xpZW50OiBBeGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKClcbikgPT4ge1xuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgY2xpZW50LmdldChcbiAgICB1cmwsXG4gICAge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgVG9rZW4gdG9rZW49JHt0b2tlbn1gLFxuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfVxuICApO1xuXG4gIHJldHVybiByZXF1ZXN0LmRhdGFcbn1cbiJdfQ==