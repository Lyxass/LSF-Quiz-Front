import {render} from '@testing-library/vue'
import Game from '@/views/Game.vue'
import storeStruct from "../../src/store/storeStruct";
import * as GameApi from "@/models/gameApi";
import Vuex from "vuex";
import {createLocalVue} from "@vue/test-utils";

beforeEach(async () => {
    jest.clearAllMocks();
});


test('Test randomWords correctly set in store', async () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    let store = await new Vuex.Store(storeStruct)

    const mockApiCall = jest.spyOn(GameApi,"getRandomFromApi")

    mockApiCall.mockImplementation((apiUrl)=>{
        expect(apiUrl).toBe(process.env.VUE_APP_BACK_END_BASE_URL + "game/random-word")
        return new Promise((resolve) =>{
            resolve("allumer")
        })
    })

    await render(Game, {
        store, props: {
            gameName: "randomWords"
        }
    })

    expect(store.state.gameStore.isFinish).toBeFalsy()
    expect(store.state.gameStore.currentInput).toBe("")
    expect(store.state.gameStore.currentWord).toBe("allumer")
})

test('Test alphabet correctly set in store', async () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    let store = await new Vuex.Store(storeStruct)

    const mockApiCall = jest.spyOn(GameApi,"getRandomFromApi")

    mockApiCall.mockImplementation((apiUrl)=>{
        expect(apiUrl).toBe(process.env.VUE_APP_BACK_END_BASE_URL + "game/random-letter")
        return new Promise((resolve) =>{
            resolve("a")
        })
    })

    await render(Game, {
        store, props: {
            gameName: "alphabet"
        }
    })
    expect(store.state.gameStore.isFinish).toBeFalsy()
    expect(store.state.gameStore.currentInput).toBe("")
    expect(store.state.gameStore.currentWord).toBe("a")
})

