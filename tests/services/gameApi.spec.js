import axios from "axios";
import {getRandomFromApi} from "../../src/services/gameApi";

beforeEach(async () => {
    jest.clearAllMocks();
});

jest.mock('axios');

describe("Test Api Service", () => {

    test('Test get word', async () => {
        jest.mock("axios")

        axios.get.mockImplementation(() => Promise.resolve({
            status: 200, data: "tesst"
        }));

        expect(await getRandomFromApi("URL in useless in test")).toBe("tesst");
    })

    test('Test get word', async () => {
        jest.mock("axios")

        axios.get.mockImplementation(() => Promise.reject({
            status: 400, data: "tesst"
        }));

        expect(await getRandomFromApi("URL in useless in test")).toBe(null);
    })
})






