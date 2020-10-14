const axios = require('axios');
const getBuyer = require('../lib/get-buyer');
const getSeller = require('../lib/get-seller');
const getInvoiceItems = require('../lib/get-invoice-items');
const createInvoice = require('../lib/create-invoice');
const sendMail = require('../lib/send-mail');
const eventConfig = require('../events.config');
const createErrorMessage = require('../lib/create-error-email');
module.exports = async (req, res) => {
    const { receipt: { payment_provider, }, event: { account_slug, slug: event_slug, }, slug: registration_slug, } = req.body;
    const event = eventConfig[event_slug];
    if (!payment_provider) {
        res.send('No payment, no invoice');
        return;
    }
    try {
        const titoRequest = await axios.get(`https://api.tito.io/v3/${account_slug}/${event_slug}/registrations/${registration_slug}?view=extended`, {
            headers: {
                Authorization: `Token token=${process.env.TITO_API_TOKEN}`,
                Accept: 'application/json',
            },
        });
        const order = titoRequest.data.registration;
        const result = await createInvoice({
            comment: `The invoice includes mediated services. \nPaid in full. \nThis document was issued electronically and is therefore valid without signature.`,
            orderNumber: order.reference,
            invoiceIdPrefix: event.invoiceIdPrefix,
            logoImage: event.logoImage,
            buyer: getBuyer(event, order),
            seller: getSeller(event, order),
            items: getInvoiceItems(event, order),
        });
        res.send(result);
    }
    catch (error) {
        await sendMail('ERROR: Invoice creation failed', createErrorMessage(req.body, error));
        console.log(error);
        res.send('Error');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGFuZGxlcnMvcmVnaXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzdDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQy9DLE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQzVELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzdDLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2hELE1BQU0sa0JBQWtCLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFFaEUsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBRWxDLE1BQU0sRUFDSixPQUFPLEVBQUUsRUFDUCxnQkFBZ0IsR0FDakIsRUFDRCxLQUFLLEVBQUUsRUFDTCxZQUFZLEVBQ1osSUFBSSxFQUFFLFVBQVUsR0FDakIsRUFDRCxJQUFJLEVBQUUsaUJBQWlCLEdBQ3hCLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztJQUViLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUV0QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7UUFDckIsR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ25DLE9BQU87S0FDUjtJQUVELElBQUk7UUFDRixNQUFNLFdBQVcsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQ2pDLDBCQUEwQixZQUFZLElBQUksVUFBVSxrQkFBa0IsaUJBQWlCLGdCQUFnQixFQUN2RztZQUNFLE9BQU8sRUFBRTtnQkFDUCxhQUFhLEVBQUUsZUFBZSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRTtnQkFDMUQsTUFBTSxFQUFFLGtCQUFrQjthQUMzQjtTQUNGLENBQ0YsQ0FBQztRQUVGLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBRTVDLE1BQU0sTUFBTSxHQUFHLE1BQU0sYUFBYSxDQUFDO1lBQ2pDLE9BQU8sRUFBRSw2SUFBNkk7WUFDdEosV0FBVyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzVCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQzdCLE1BQU0sRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUMvQixLQUFLLEVBQUUsZUFBZSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7U0FDckMsQ0FBQyxDQUFDO1FBRUgsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNsQjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsTUFBTSxRQUFRLENBQ1osZ0NBQWdDLEVBQ2hDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQ3BDLENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5CLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDbkI7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5jb25zdCBnZXRCdXllciA9IHJlcXVpcmUoJy4uL2xpYi9nZXQtYnV5ZXInKTtcbmNvbnN0IGdldFNlbGxlciA9IHJlcXVpcmUoJy4uL2xpYi9nZXQtc2VsbGVyJyk7XG5jb25zdCBnZXRJbnZvaWNlSXRlbXMgPSByZXF1aXJlKCcuLi9saWIvZ2V0LWludm9pY2UtaXRlbXMnKTtcbmNvbnN0IGNyZWF0ZUludm9pY2UgPSByZXF1aXJlKCcuLi9saWIvY3JlYXRlLWludm9pY2UnKTtcbmNvbnN0IHNlbmRNYWlsID0gcmVxdWlyZSgnLi4vbGliL3NlbmQtbWFpbCcpO1xuY29uc3QgZXZlbnRDb25maWcgPSByZXF1aXJlKCcuLi9ldmVudHMuY29uZmlnJyk7XG5jb25zdCBjcmVhdGVFcnJvck1lc3NhZ2UgPSByZXF1aXJlKCcuLi9saWIvY3JlYXRlLWVycm9yLWVtYWlsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG5cbiAgY29uc3Qge1xuICAgIHJlY2VpcHQ6IHtcbiAgICAgIHBheW1lbnRfcHJvdmlkZXIsXG4gICAgfSxcbiAgICBldmVudDoge1xuICAgICAgYWNjb3VudF9zbHVnLFxuICAgICAgc2x1ZzogZXZlbnRfc2x1ZyxcbiAgICB9LFxuICAgIHNsdWc6IHJlZ2lzdHJhdGlvbl9zbHVnLFxuICB9ID0gcmVxLmJvZHk7XG5cbiAgY29uc3QgZXZlbnQgPSBldmVudENvbmZpZ1tldmVudF9zbHVnXTtcblxuICBpZiAoIXBheW1lbnRfcHJvdmlkZXIpIHtcbiAgICByZXMuc2VuZCgnTm8gcGF5bWVudCwgbm8gaW52b2ljZScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdGl0b1JlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICBgaHR0cHM6Ly9hcGkudGl0by5pby92My8ke2FjY291bnRfc2x1Z30vJHtldmVudF9zbHVnfS9yZWdpc3RyYXRpb25zLyR7cmVnaXN0cmF0aW9uX3NsdWd9P3ZpZXc9ZXh0ZW5kZWRgLFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYFRva2VuIHRva2VuPSR7cHJvY2Vzcy5lbnYuVElUT19BUElfVE9LRU59YCxcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3Qgb3JkZXIgPSB0aXRvUmVxdWVzdC5kYXRhLnJlZ2lzdHJhdGlvbjtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZUludm9pY2Uoe1xuICAgICAgY29tbWVudDogYFRoZSBpbnZvaWNlIGluY2x1ZGVzIG1lZGlhdGVkIHNlcnZpY2VzLiBcXG5QYWlkIGluIGZ1bGwuIFxcblRoaXMgZG9jdW1lbnQgd2FzIGlzc3VlZCBlbGVjdHJvbmljYWxseSBhbmQgaXMgdGhlcmVmb3JlIHZhbGlkIHdpdGhvdXQgc2lnbmF0dXJlLmAsXG4gICAgICBvcmRlck51bWJlcjogb3JkZXIucmVmZXJlbmNlLFxuICAgICAgaW52b2ljZUlkUHJlZml4OiBldmVudC5pbnZvaWNlSWRQcmVmaXgsXG4gICAgICBsb2dvSW1hZ2U6IGV2ZW50LmxvZ29JbWFnZSxcbiAgICAgIGJ1eWVyOiBnZXRCdXllcihldmVudCwgb3JkZXIpLFxuICAgICAgc2VsbGVyOiBnZXRTZWxsZXIoZXZlbnQsIG9yZGVyKSxcbiAgICAgIGl0ZW1zOiBnZXRJbnZvaWNlSXRlbXMoZXZlbnQsIG9yZGVyKSxcbiAgICB9KTtcblxuICAgIHJlcy5zZW5kKHJlc3VsdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYXdhaXQgc2VuZE1haWwoXG4gICAgICAnRVJST1I6IEludm9pY2UgY3JlYXRpb24gZmFpbGVkJyxcbiAgICAgIGNyZWF0ZUVycm9yTWVzc2FnZShyZXEuYm9keSwgZXJyb3IpXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICByZXMuc2VuZCgnRXJyb3InKTtcbiAgfVxufTtcbiJdfQ==