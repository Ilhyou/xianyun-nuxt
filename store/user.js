// 每个小仓库都必须暴露出 state, mutations, actions
export const state = {
  userInfo: {
    // 用户验证的token'
    token: "",
    // 用户信息
    user: {

    }
  }
}

export const mutations = {
  setUserInfo(state, data) {
    state.userInfo = data
  }
}
