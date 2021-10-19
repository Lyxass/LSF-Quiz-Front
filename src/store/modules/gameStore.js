const gameModule = {
    state: () => ({
        currentWord: "",
        currentInput: "",
        isFinish: false,
        isCorrect: false

    }),
    mutations: {
        setCurrentWord(state,value) {
            console.log("set to value ", value)
            state.currentWord = value;
        },
        setCurrentInput(state,value) {
            state.currentInput = value;
        },
        setIsFinish(state,value) {
            state.isFinish = value;
        },setIsCorrect(state,value) {
            state.isCorrect = value;
        }
    },
    actions: {},
    getters: {}

}
export default gameModule
