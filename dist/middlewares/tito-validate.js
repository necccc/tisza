"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-useless-concat */
const crypto_1 = __importDefault(require("crypto"));
const events_config_1 = __importDefault(require("../../events.config"));
exports.default = (request, response, next) => {
    const signature = request.headers['tito-signature'];
    const event = request.body.event.slug;
    const data = JSON.stringify(request.body)
        .replace(/</g, '\\' + 'u003c')
        .replace(/>/g, '\\' + 'u003e')
        .replace(/&/g, '\\' + 'u0026')
        .replace(/\r/g, '\\' + 'r')
        .replace(/\n/g, '\\' + 'n');
    const hmac = crypto_1.default
        .createHmac('sha256', events_config_1.default[event].titoToken)
        .update(data)
        .digest('base64');
    if (signature !== hmac) {
        // next(new errors.UnauthorizedError('invalid token'))
        console.warn(`Tito signature STILL CANNOT BE VERIFIED "${signature}"`);
    }
    return next(null);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0by12YWxpZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy90aXRvLXZhbGlkYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0NBQXNDO0FBQ3RDLG9EQUE0QjtBQUM1Qix3RUFBK0M7QUFFL0Msa0JBQWUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ3pDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNwRCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFFdEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQ3RDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLE9BQU8sQ0FBQztTQUM3QixPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksR0FBRyxPQUFPLENBQUM7U0FDN0IsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsT0FBTyxDQUFDO1NBQzdCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQztTQUMxQixPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUU5QixNQUFNLElBQUksR0FBRyxnQkFBTTtTQUNoQixVQUFVLENBQUMsUUFBUSxFQUFFLHVCQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDO1NBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDWixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFcEIsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO1FBQ3RCLHNEQUFzRDtRQUN0RCxPQUFPLENBQUMsSUFBSSxDQUFDLDRDQUE0QyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0tBQ3hFO0lBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlbGVzcy1jb25jYXQgKi9cbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmltcG9ydCBldmVudHNDb25maWcgZnJvbSAnLi4vLi4vZXZlbnRzLmNvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IChyZXF1ZXN0LCByZXNwb25zZSwgbmV4dCkgPT4ge1xuICBjb25zdCBzaWduYXR1cmUgPSByZXF1ZXN0LmhlYWRlcnNbJ3RpdG8tc2lnbmF0dXJlJ107XG4gIGNvbnN0IGV2ZW50ID0gcmVxdWVzdC5ib2R5LmV2ZW50LnNsdWc7XG5cbiAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHJlcXVlc3QuYm9keSlcbiAgICAucmVwbGFjZSgvPC9nLCAnXFxcXCcgKyAndTAwM2MnKVxuICAgIC5yZXBsYWNlKC8+L2csICdcXFxcJyArICd1MDAzZScpXG4gICAgLnJlcGxhY2UoLyYvZywgJ1xcXFwnICsgJ3UwMDI2JylcbiAgICAucmVwbGFjZSgvXFxyL2csICdcXFxcJyArICdyJylcbiAgICAucmVwbGFjZSgvXFxuL2csICdcXFxcJyArICduJyk7XG5cbiAgY29uc3QgaG1hYyA9IGNyeXB0b1xuICAgIC5jcmVhdGVIbWFjKCdzaGEyNTYnLCBldmVudHNDb25maWdbZXZlbnRdLnRpdG9Ub2tlbilcbiAgICAudXBkYXRlKGRhdGEpXG4gICAgLmRpZ2VzdCgnYmFzZTY0Jyk7XG5cbiAgaWYgKHNpZ25hdHVyZSAhPT0gaG1hYykge1xuICAgIC8vIG5leHQobmV3IGVycm9ycy5VbmF1dGhvcml6ZWRFcnJvcignaW52YWxpZCB0b2tlbicpKVxuICAgIGNvbnNvbGUud2FybihgVGl0byBzaWduYXR1cmUgU1RJTEwgQ0FOTk9UIEJFIFZFUklGSUVEIFwiJHtzaWduYXR1cmV9XCJgKTtcbiAgfVxuXG4gIHJldHVybiBuZXh0KG51bGwpO1xufTtcbiJdfQ==