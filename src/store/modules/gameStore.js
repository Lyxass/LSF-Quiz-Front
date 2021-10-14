const gameModule = {
    state: () => ({
        currentWord: "",
        currentInput:"",
        isFinish: false,
        isCorrect: false

    }),
    mutations: {
        setState(state, {stateToUpdate, newValue}) {
            console.log("update : ", stateToUpdate ," with value : ", newValue)
            state[stateToUpdate] = newValue
        }
    },
    actions: {},
    getters: {}

}
export default gameModule
