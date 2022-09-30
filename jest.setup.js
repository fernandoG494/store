// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
import 'setimmediate';

jest.setTimeout(30000); // To run the long-time tests (API calls, async functions)

require('dotenv').config({
    path: '.env.test'
});

jest.mock('./src/helpers/getEnvironments.js', () => ({
    getEnvironments: () => ({ ...process.env })
}));
