import {render, fireEvent} from '@testing-library/vue'
import Home from '@/views/Home.vue'
import router from "../../src/router/index";

let params = [
    ["randomWords", "game/randomWords"],
    ["alphabet", "game/alphabet"]
]

beforeEach(() => {
    window.location.href = process.env.VUE_APP_BASE_URL
});

test.each(params)('Test Home view', async (testId, path) => {
    // The render method returns a collection of utilities to query your component.
    const {getByTestId} = render(Home, {router})
    expect(window.location.href).toBe(process.env.VUE_APP_BASE_URL)
    await fireEvent.click(getByTestId(testId))
    expect(window.location.href).toBe(process.env.VUE_APP_BASE_URL + path)
})

