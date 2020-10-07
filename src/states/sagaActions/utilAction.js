
export const HANDLE_ALERT_ACTION ='HANDLE_ALERT_ACTION';

// 產生view 使用saga會用到的payload方法
export const HandleAlertDispatcher = (payload) => {
  return {
    type: HANDLE_ALERT_ACTION,
    payload,
  };
};
