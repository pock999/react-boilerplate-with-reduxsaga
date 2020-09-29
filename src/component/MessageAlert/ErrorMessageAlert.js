import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// 錯誤提示訊息彈窗，基本訊息(多行)
function ErrorMessageAlert(props) {

  const MySwal = withReactContent(Swal);

  useEffect(() => {
    if(props.show) {
      MySwal.fire({
        icon: 'error',
        timer: props.timer,
        timerProgressBar: true,
        title: props.title,
        html: props.children,
        confirmButtonColor: props.color,
        confirmButtonText: props.confirmButtonText || '確認',
      }).then(result => {
        if (result.value || result.dismiss === Swal.DismissReason.timer) {
          props.onConfirm();
        } else if (result.isDismissed) {
          props.onCancel();
        }
      });
    }
  });
  

  return (
    <></>
  );
}

export default ErrorMessageAlert;
