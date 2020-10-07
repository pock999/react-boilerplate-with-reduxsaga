# use React Hooks

# My react project commonly used

 - axios
 - react-redux
 - redux-saga
 - sweetalert2
 - sweetalert2-react-content(make sweetalert2 can render JSX)
 - lodash
 - dayjs

# project struct

 - component
 - exception (customized exception)
 - route (contain gaurd router .etc)
 - state (contain saga and reducer)
 - utility (some commonly used methods, like localStorage...)



  - sagaActions : 在 **saga註冊** 以及 **view dispatch** 用的
      **常數(XXX_XXX)** 為saga註冊的action string, **方法為 view dispatch 用的方法**
      __需要註冊至全域__

  - reducerAction : 供 **saga操作reducer** 的方法