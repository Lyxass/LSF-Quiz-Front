import axios from "axios";
import {getRandomFromApi} from "../../src/services/gameApi";

beforeEach(async () => {
    jest.clearAllMocks();
});

jest.mock('axios');

describe("Test Api Service", () => {

    test('Test get word', async () => {
        jest.mock("axios")

        let response = {
            data: {
                data: "tesst"
            },
            "status": 200,
        }

        axios.get.mockImplementation(() => Promise.resolve(response));
        let result = await getRandomFromApi("URL in useless in test")
        expect(result.data).toBe("tesst");
    })

    test('Test on error', async () => {
        jest.mock("axios")

        let response = {
            "data": {
                "data": "tesst"
            },
            "status": 400,
        }
        axios.get.mockImplementation(() => Promise.reject(response));

        expect(await getRandomFromApi("URL in useless in test")).toBe(null);
    })
})






