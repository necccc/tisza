"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-useless-concat */
const crypto_1 = __importDefault(require("crypto"));
const events_config_1 = __importDefault(require("../../events.config"));
exports.default = async (request, reply) => {
    var _a, _b, _c;
    const signature = request.headers['tito-signature'];
    const event = (_c = (_b = (_a = request === null || request === void 0 ? void 0 : request.body) === null || _a === void 0 ? void 0 : _a.event) === null || _b === void 0 ? void 0 : _b.slug) !== null && _c !== void 0 ? _c : null;
    if (event == null) {
        reply.badRequest();
        return;
    }
    const hmac = crypto_1.default
        .createHmac('sha256', events_config_1.default[event].titoToken)
        .update(request.rawBody)
        .digest('base64');
    if (signature !== hmac) {
        reply.notAcceptable();
        console.warn(`Tito signature STILL CANNOT BE VERIFIED "${signature}"`);
        return;
    }
    return;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtdGl0by1wYXlsb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hvb2tzL3ZhbGlkYXRlLXRpdG8tcGF5bG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNDQUFzQztBQUN0QyxvREFBNEI7QUFDNUIsd0VBQStDO0FBRS9DLGtCQUFlLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7O0lBQ3RDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNwRCxNQUFNLEtBQUsscUJBQUcsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLElBQUksMENBQUUsS0FBSywwQ0FBRSxJQUFJLG1DQUFJLElBQUksQ0FBQztJQUVqRCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDakIsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ2xCLE9BQU07S0FDUDtJQUVELE1BQU0sSUFBSSxHQUFHLGdCQUFNO1NBQ2hCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsdUJBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUM7U0FDbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDdkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXBCLElBQUksU0FBUyxLQUFLLElBQUksRUFBRTtRQUN0QixLQUFLLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN2RSxPQUFNO0tBQ1A7SUFFRCxPQUFNO0FBQ1IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlbGVzcy1jb25jYXQgKi9cbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmltcG9ydCBldmVudHNDb25maWcgZnJvbSAnLi4vLi4vZXZlbnRzLmNvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXF1ZXN0LCByZXBseSkgPT4ge1xuICBjb25zdCBzaWduYXR1cmUgPSByZXF1ZXN0LmhlYWRlcnNbJ3RpdG8tc2lnbmF0dXJlJ107XG4gIGNvbnN0IGV2ZW50ID0gcmVxdWVzdD8uYm9keT8uZXZlbnQ/LnNsdWcgPz8gbnVsbDtcblxuICBpZiAoZXZlbnQgPT0gbnVsbCkge1xuICAgIHJlcGx5LmJhZFJlcXVlc3QoKVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgaG1hYyA9IGNyeXB0b1xuICAgIC5jcmVhdGVIbWFjKCdzaGEyNTYnLCBldmVudHNDb25maWdbZXZlbnRdLnRpdG9Ub2tlbilcbiAgICAudXBkYXRlKHJlcXVlc3QucmF3Qm9keSlcbiAgICAuZGlnZXN0KCdiYXNlNjQnKTtcblxuICBpZiAoc2lnbmF0dXJlICE9PSBobWFjKSB7XG4gICAgcmVwbHkubm90QWNjZXB0YWJsZSgpXG4gICAgY29uc29sZS53YXJuKGBUaXRvIHNpZ25hdHVyZSBTVElMTCBDQU5OT1QgQkUgVkVSSUZJRUQgXCIke3NpZ25hdHVyZX1cImApO1xuICAgIHJldHVyblxuICB9XG5cbiAgcmV0dXJuXG59O1xuIl19