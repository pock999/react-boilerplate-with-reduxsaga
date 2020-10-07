
export const HANDLE_TEST_ACTION ='HANDLE_TEST_ACTION';

// 產生view 使用saga會用到的payload方法
export const HandleTestDispatcher = (payload) => {
  return {
    type: HANDLE_TEST_ACTION,
    payload,
  };
};
