import {render} from '@testing-library/vue'
import Media from '@/components/Media.vue'
import storeStruct from "../../src/store/storeStruct";
import Vuex from "vuex";
import {createLocalVue} from "@vue/test-utils";

beforeEach(async () => {
    jest.clearAllMocks();
});

const arg = [
    [true,"manger", process.env.VUE_APP_BACK_END_GET_VIDEO],
    [false,"a", process.env.VUE_APP_BACK_END_GET_PICTURE]
]

test.each(arg)('Test if the media src is correctly set', async (isVideo, currentWord,baseUrl) => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    let store = await new Vuex.Store(storeStruct)

    store.commit("setCurrentWord", currentWord.toLowerCase())

    const {getByTestId} = await render(Media, {
        store, props: {
            isVideo: isVideo
        }
    })

    let media
    if(isVideo){
        media = getByTestId("video")
    }
    else{
        media = getByTestId("image")
    }
    expect(media.src).toBe(baseUrl+currentWord)
    console.log(media.src)

})
