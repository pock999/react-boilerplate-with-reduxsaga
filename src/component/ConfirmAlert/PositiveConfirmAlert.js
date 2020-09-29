import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import './style/PositiveImportant.css';

// 正向、正面行為確認彈窗（是否提交、更新、核准等）
function PositiveConfirmAlert(props) {
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

export default PositiveConfirmAlert;
