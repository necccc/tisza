"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const round_to_1 = __importDefault(require("round-to"));
const get_catering_per_ticket_1 = __importDefault(require("./get-catering-per-ticket"));
exports.default = (tickets, eventConfig) => tickets.reduce((items, ticket) => {
    const { price, quantity, release_title: title, } = ticket;
    if (price === 0) {
        return items;
    }
    const date = eventConfig.getDate ? eventConfig.getDate(title) : eventConfig.date;
    const cateringPartial = get_catering_per_ticket_1.default(title, eventConfig);
    const ticketPartial = round_to_1.default(price - (cateringPartial * 1.27), 2);
    items.push({
        label: title,
        quantity,
        unit: 'qt',
        vat: 27,
        grossUnitPrice: ticketPartial,
        comment: `Ticket for ${eventConfig.label}, ${date}`,
    });
    items.push({
        label: 'Conference catering fee',
        quantity,
        unit: 'qt',
        vat: 27,
        grossUnitPrice: round_to_1.default(cateringPartial * 1.27, 2),
    });
    return items;
}, []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWl0ZW1pemVkLWNvc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2dldC1pdGVtaXplZC1jb3N0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdEQUErQjtBQUMvQix3RkFBNkQ7QUFFN0Qsa0JBQWUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQ3RFLE1BQU0sRUFDSixLQUFLLEVBQ0wsUUFBUSxFQUNSLGFBQWEsRUFBRSxLQUFLLEdBQ3JCLEdBQUcsTUFBTSxDQUFDO0lBRVgsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1FBQ2YsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDakYsTUFBTSxlQUFlLEdBQUcsaUNBQW9CLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2pFLE1BQU0sYUFBYSxHQUFHLGtCQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXJFLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDUCxLQUFLLEVBQUUsS0FBSztRQUNaLFFBQVE7UUFDUixJQUFJLEVBQUUsSUFBSTtRQUNWLEdBQUcsRUFBRSxFQUFFO1FBQ1AsY0FBYyxFQUFFLGFBQWE7UUFDN0IsT0FBTyxFQUFFLGNBQWMsV0FBVyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7S0FDcEQsQ0FBQyxDQUFDO0lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNULEtBQUssRUFBRSx5QkFBeUI7UUFDaEMsUUFBUTtRQUNSLElBQUksRUFBRSxJQUFJO1FBQ1YsR0FBRyxFQUFFLEVBQUU7UUFDUCxjQUFjLEVBQUUsa0JBQU8sQ0FBQyxlQUFlLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUNuRCxDQUFDLENBQUM7SUFFSCxPQUFPLEtBQUssQ0FBQztBQUNoQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcm91bmRUbyBmcm9tICdyb3VuZC10byc7XG5pbXBvcnQgZ2V0Q2F0ZXJpbmdQZXJUaWNrZXQgZnJvbSAnLi9nZXQtY2F0ZXJpbmctcGVyLXRpY2tldCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh0aWNrZXRzLCBldmVudENvbmZpZykgPT4gdGlja2V0cy5yZWR1Y2UoKGl0ZW1zLCB0aWNrZXQpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBwcmljZSxcbiAgICAgIHF1YW50aXR5LFxuICAgICAgcmVsZWFzZV90aXRsZTogdGl0bGUsXG4gICAgfSA9IHRpY2tldDtcblxuICAgIGlmIChwcmljZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGUgPSBldmVudENvbmZpZy5nZXREYXRlID8gZXZlbnRDb25maWcuZ2V0RGF0ZSh0aXRsZSkgOiBldmVudENvbmZpZy5kYXRlO1xuICAgIGNvbnN0IGNhdGVyaW5nUGFydGlhbCA9IGdldENhdGVyaW5nUGVyVGlja2V0KHRpdGxlLCBldmVudENvbmZpZyk7XG4gICAgY29uc3QgdGlja2V0UGFydGlhbCA9IHJvdW5kVG8ocHJpY2UgLSAoY2F0ZXJpbmdQYXJ0aWFsICogMS4yNyksIDIpO1xuXG5cdFx0aXRlbXMucHVzaCh7XG4gICAgICBsYWJlbDogdGl0bGUsXG4gICAgICBxdWFudGl0eSxcbiAgICAgIHVuaXQ6ICdxdCcsXG4gICAgICB2YXQ6IDI3LCAvLyBjYW4gYmUgYSBudW1iZXIgb3IgYSBzcGVjaWFsIHN0cmluZ1xuICAgICAgZ3Jvc3NVbml0UHJpY2U6IHRpY2tldFBhcnRpYWwsIC8vIGNhbGN1bGF0ZXMgZ3Jvc3MgYW5kIG5ldCB2YWx1ZXMgZnJvbSBwZXIgaXRlbSBuZXRcbiAgICAgIGNvbW1lbnQ6IGBUaWNrZXQgZm9yICR7ZXZlbnRDb25maWcubGFiZWx9LCAke2RhdGV9YCxcbiAgICB9KTtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIGxhYmVsOiAnQ29uZmVyZW5jZSBjYXRlcmluZyBmZWUnLFxuICAgICAgcXVhbnRpdHksXG4gICAgICB1bml0OiAncXQnLFxuICAgICAgdmF0OiAyNywgLy8gY2FuIGJlIGEgbnVtYmVyIG9yIGEgc3BlY2lhbCBzdHJpbmdcbiAgICAgIGdyb3NzVW5pdFByaWNlOiByb3VuZFRvKGNhdGVyaW5nUGFydGlhbCAqIDEuMjcsIDIpLCAvLyBjYWxjdWxhdGVzIGdyb3NzIGFuZCBuZXQgdmFsdWVzIGZyb20gcGVyIGl0ZW0gbmV0XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaXRlbXM7XG5cdH0sIFtdKTtcbiJdfQ==