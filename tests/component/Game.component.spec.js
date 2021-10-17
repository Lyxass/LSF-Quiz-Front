import {render, fireEvent} from '@testing-library/vue'
import Game from '@/components/Game.vue'
import storeStruct from "../../src/store/storeStruct";
import Vuex from "vuex";
import {createLocalVue} from "@vue/test-utils";
import * as gameApi from "@/models/gameApi"
import router from "../../src/router/index";

beforeEach(async () => {
    jest.clearAllMocks();
    window.location.href = process.env.VUE_APP_BASE_URL
});

const arg = [
    [true, "manger"],
    [false, "a"]
]

test.each(arg)('Test success/failed message', async (isCorrect, currentWord) => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    let store = await new Vuex.Store(storeStruct)

    store.commit("setCurrentWord", currentWord.toLowerCase())
    store.commit("setIsCorrect", isCorrect)
    store.commit("setIsFinish", true)

    const {getByTestId, getByText} = await render(Game, {
        store, router, props: {
            isVideo: true
        }
    })

    getByTestId("endDiv")
    if (isCorrect) {
        getByText("Bravo !")
        getByText("La réponse était bien :")
    } else {
        getByText("Dommage !")
        getByText("La réponse était :")
    }
    getByText(currentWord)


})

test("When quiz not finish", async () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    let store = await new Vuex.Store(storeStruct)

    store.commit("setCurrentWord", "test")
    store.commit("setIsCorrect", false)
    store.commit("setIsFinish", false)

    const {queryByTestId} = await render(Game, {
        store,router, props: {
            isVideo: true
        }
    })

    expect(queryByTestId("endDiv")).toBeNull()

})

test("test button", async () => {
    const mockApiCall = jest.spyOn(gameApi, "getRandomFromApi")

    mockApiCall.mockImplementation((apiUrl) => {
        expect(apiUrl).toBe(process.env.VUE_APP_BACK_END_BASE_URL + "game/random-word")
        return new Promise((resolve) => {
            resolve("allumer")
        })
    })

    const localVue = createLocalVue()
    localVue.use(Vuex)
    let store = await new Vuex.Store(storeStruct)

    store.commit("setCurrentInput", "input")
    store.commit("setIsCorrect", true)
    store.commit("setIsFinish", true)

    const {getByText, emitted} = await render(Game, {
        store, router, props: {
            isVideo: true
        }
    })

    const btn = getByText("Suivant")
    expect(emitted().newRound.length).toBe(1) // Before mount
    await fireEvent.click(btn)
    expect(emitted().newRound.length).toBe(2) // nextRound emitted by the click event

})

const param = [
    [true, process.env.VUE_APP_BASE_URL + "game/randomWords"],
    [false, process.env.VUE_APP_BASE_URL + "game/alphabet"]
]
test.each(param)('Test back to home btn', async (isVideo, currentUrl) => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    let store = await new Vuex.Store(storeStruct)

    const {getByText} = render(Game, {
        store, router, props: {
            isVideo: isVideo
        }
    })
    window.location.href = currentUrl
    expect(window.location.href).toBe(currentUrl)
    await fireEvent.click(getByText("←"))
    expect(window.location.href).toBe(process.env.VUE_APP_BASE_URL)
})




