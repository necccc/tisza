"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
process.env.APP_TOKEN = "abcd1234";
const validate_request_1 = __importDefault(require("./validate-request"));
const reply = {
    badRequest: jest.fn()
};
describe('request validation', () => {
    afterAll(() => {
        process.env.APP_TOKEN = null;
        delete process.env.APP_TOKEN;
    });
    beforeEach(() => {
        reply.badRequest.mockClear();
    });
    test('validate missing token', () => {
        validate_request_1.default({ query: {} }, reply);
        expect(reply.badRequest).toHaveBeenCalledTimes(1);
    });
    test('validate wrong token', () => {
        validate_request_1.default({ query: { token: "asd" } }, reply);
        expect(reply.badRequest).toHaveBeenCalledTimes(1);
    });
    test('validate proper token', () => {
        validate_request_1.default({ query: { token: "abcd1234" } }, reply);
        expect(reply.badRequest).toHaveBeenCalledTimes(0);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtcmVxdWVzdC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hvb2tzL3ZhbGlkYXRlLXJlcXVlc3QudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQTtBQUVsQywwRUFBZ0Q7QUFFaEQsTUFBTSxLQUFLLEdBQUc7SUFDWixVQUFVLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtDQUN0QixDQUFBO0FBRUQsUUFBUSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRTtJQUVsQyxRQUFRLENBQUMsR0FBRyxFQUFFO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO1FBQzVCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUE7SUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtJQUM5QixDQUFDLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEVBQUU7UUFDbEMsMEJBQWUsQ0FBQyxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUVuQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEdBQUcsRUFBRTtRQUNoQywwQkFBZSxDQUFDLEVBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFDLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFFakQsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLEVBQUU7UUFDakMsMEJBQWUsQ0FBQyxFQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXZELE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbInByb2Nlc3MuZW52LkFQUF9UT0tFTiA9IFwiYWJjZDEyMzRcIlxuXG5pbXBvcnQgdmFsaWRhdGVSZXF1ZXN0IGZyb20gJy4vdmFsaWRhdGUtcmVxdWVzdCdcblxuY29uc3QgcmVwbHkgPSB7XG4gIGJhZFJlcXVlc3Q6IGplc3QuZm4oKVxufVxuXG5kZXNjcmliZSgncmVxdWVzdCB2YWxpZGF0aW9uJywgKCkgPT4ge1xuXG4gIGFmdGVyQWxsKCgpID0+IHtcbiAgICBwcm9jZXNzLmVudi5BUFBfVE9LRU4gPSBudWxsXG4gICAgZGVsZXRlIHByb2Nlc3MuZW52LkFQUF9UT0tFTlxuICB9KTtcblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICByZXBseS5iYWRSZXF1ZXN0Lm1vY2tDbGVhcigpXG4gIH0pO1xuXG4gIHRlc3QoJ3ZhbGlkYXRlIG1pc3NpbmcgdG9rZW4nLCAoKSA9PiB7XG4gICAgdmFsaWRhdGVSZXF1ZXN0KHtxdWVyeToge319LCByZXBseSlcblxuICAgIGV4cGVjdChyZXBseS5iYWRSZXF1ZXN0KS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSk7XG4gIH0pO1xuXG4gIHRlc3QoJ3ZhbGlkYXRlIHdyb25nIHRva2VuJywgKCkgPT4ge1xuICAgIHZhbGlkYXRlUmVxdWVzdCh7cXVlcnk6IHsgdG9rZW46IFwiYXNkXCIgfX0sIHJlcGx5KVxuXG4gICAgZXhwZWN0KHJlcGx5LmJhZFJlcXVlc3QpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcbiAgfSk7XG5cbiAgdGVzdCgndmFsaWRhdGUgcHJvcGVyIHRva2VuJywgKCkgPT4ge1xuICAgIHZhbGlkYXRlUmVxdWVzdCh7cXVlcnk6IHsgdG9rZW46IFwiYWJjZDEyMzRcIiB9fSwgcmVwbHkpO1xuXG4gICAgZXhwZWN0KHJlcGx5LmJhZFJlcXVlc3QpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygwKTtcbiAgfSk7XG59KVxuIl19