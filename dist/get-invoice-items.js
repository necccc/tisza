"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_itemized_costs_1 = __importDefault(require("./get-itemized-costs"));
exports.default = (event, order) => {
    const costs = get_itemized_costs_1.default(order.line_items, event);
    return costs;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWludm9pY2UtaXRlbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZ2V0LWludm9pY2UtaXRlbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4RUFBb0Q7QUFHcEQsa0JBQWUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDOUIsTUFBTSxLQUFLLEdBQUcsNEJBQWdCLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUV4RCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRJdGVtaXplZENvc3RzIGZyb20gJy4vZ2V0LWl0ZW1pemVkLWNvc3RzJztcblxuXG5leHBvcnQgZGVmYXVsdCAoZXZlbnQsIG9yZGVyKSA9PiB7XG4gIGNvbnN0IGNvc3RzID0gZ2V0SXRlbWl6ZWRDb3N0cyhvcmRlci5saW5lX2l0ZW1zLCBldmVudCk7XG5cbiAgcmV0dXJuIGNvc3RzO1xufTtcbiJdfQ==