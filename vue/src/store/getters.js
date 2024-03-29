const getters = {
    breadCrumbLinkPath: state => state.app.breadCrumbLinkPath,
    sidebar: state => state.app.sidebar,
    size: state => state.app.size,
    device: state => state.app.device,
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    introduction: state => state.user.introduction,
    roles: state => state.user.roles,
    roleNames: state => state.user.roleNames,
    permissions: state => state.user.permissions,
    code: state => state.user.code,
    email: state => state.user.email,
    department: state => state.user.department,
    authCurrency: state => state.user.authCurrency,
    authAmount: state => state.user.authAmount,
    errorLogs: state => state.errorLog.logs,
    caseInfo: state => state.case.caseInfo,
    hasCaseRunning: state => state.app.hasCaseRunning,
    innerToken: state => state.user.innerToken,
    loading: state => state.app.loading,
    countrys: state => state.dc.countrys,
    env: state => state.settings.env,
    actionEnable: state => state.settings.actionEnable,
    routes: state => state.permission.routes,
    vocabulary: state => state.vocabulary.list
  }
  export default getters
  