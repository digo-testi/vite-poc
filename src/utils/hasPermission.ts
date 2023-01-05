import store from "../store";

export const hasPermission = (permission: any) => {
  const user = store.getters["auth/getPermissions"];
  const userPermissions = user;
  if (permission && userPermissions) {
    const ind = userPermissions.findIndex(
      (x: any) => x.functionality.code === permission[0]
    );
    let hasAction = false;
    if (ind != -1) {
      for (let i = 0; i < userPermissions.length; i++) {
        if (
          userPermissions[i].functionality.action.indexOf(permission[1]) > -1
        ) {
          if (userPermissions[i].functionality.code === permission[0]) {
            hasAction = true;
          }
        }
      }
    }
    return hasAction;
  }
  return false;
};
