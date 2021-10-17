import createPersistedState from "vuex-persistedstate";
import gameStore from "./modules/gameStore";

const storeStruct = {
    plugins: [createPersistedState()],
    modules: {
        gameStore: gameStore
    }
}

export default storeStruct