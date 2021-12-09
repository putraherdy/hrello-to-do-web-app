const actions = {
  async onAuthStateChangedAction(state: any, { authUser, claims }: any): Promise<void> {
    if (!authUser) {
      // remove state
      state.commit("SET_USER", null);

      //redirect from here
      (this as any).$router.push({
        path: "/auth/signin",
      });
    } else {
      const { uid, email } = authUser;
      state.commit("SET_USER", {
        uid,
        email,
      });
    }
  },
};

const mutations = {
  SET_USER(state: { user: any; }, user: any) {
    state.user = user;
  },
};

const state = () => ({
  user: null,
});

const getters = {
  getUser(state: { user: any; }) {
    return state.user;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
