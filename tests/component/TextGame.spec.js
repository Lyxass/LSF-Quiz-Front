import {render, fireEvent} from '@testing-library/vue'
import Game from '@/components/Game.vue'
import storeStruct from "../../src/store/storeStruct";
import Vuex from "vuex";
import {createLocalVue} from "@vue/test-utils";


beforeEach(async () => {
    jest.clearAllMocks();
});



test('Test write in input', async () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    let store = await new Vuex.Store(storeStruct)

    const {getByPlaceholderText} = await render(Game, {store})

    const input = getByPlaceholderText("Entrer votre mot ici")
    await fireEvent.update(input, "bob")

    expect(store.state.gameStore.currentInput).toBe("bob")

})

const param = [
    ["test", "test", true],
    ["tet", "zed", false],
    ["Test", "test", true], // test lowerCase
    ["test", "Test", true],
    ["Test", "Test", true],
    ["écouter", "ecouter", true], // test accent
    ["écouter", "écouter", true],
    ["ecouter", "écouter", true],
    ["élève", "eleve", true],
    ["Élève", "eleve", true],
    ["tôt", "tot", true],


]

test.each(param)('Test write in input', async (currentInput, currentWord, expectedResult) => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    let store = await new Vuex.Store(storeStruct)
    console.log("currentInput : " ,currentInput, " currentWord : " ,currentWord)

    store.commit("setCurrentWord", currentWord)
    store.commit("setIsFinish", false)
    store.commit("setCurrentWord", currentWord)


    const {getByPlaceholderText} = await render(Game, {store})

    const input = getByPlaceholderText("Entrer votre mot ici")
    await fireEvent.update(input, currentInput)
    await fireEvent.keyUp(input,{key: 'Enter', code: 'Enter', charCode: 13})


    expect(store.state.gameStore.isFinish).toBeTruthy()
    expect(store.state.gameStore.isCorrect).toBe(expectedResult)
})




