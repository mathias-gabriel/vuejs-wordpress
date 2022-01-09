import { createStore } from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import hub from './modules/hub'
import user from './modules/user'
import post from './modules/post'
import page from './modules/page'
import categories from './modules/categories'

const store = createStore({
    actions,
    getters,
    modules: {
        hub,
        user,
        post,
        page,
        categories
    }
});

export default store;
