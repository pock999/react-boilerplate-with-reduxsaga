import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import './style/NegativeImportant.css';

// 負向、負面行為確認彈窗（是否刪除、淘汰等）
function NegativeConfirmAlert(props) {

  const MySwal = withReactContent(Swal);

  useEffect(() => {
    if(props.show) {
      MySwal.fire({
        icon: 'question',
        showCancelButton: true,
        title: props.title,
        html: props.children,
        confirmButtonColor: props.color,
        confirmButtonText: props.confirmButtonText || '確認',
        cancelButtonText: props.cancelButtonText || '取消',
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
    <React.Fragment></React.Fragment>
  );
}

export default NegativeConfirmAlert;
