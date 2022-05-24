import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { connect, useDispatch } from 'react-redux';
import PopupMessage from '../commons/popupMessage/PopupMessage';
import { toastMessage } from '../../actions/toast/toast';

export const ToastWrapper = ({ message, status }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      if (status) {
        toast(<PopupMessage msg={message} />);
      } else {
        toast.error(<PopupMessage msg={message} error />);
      }
      dispatch(toastMessage(null, null));
    }
  }, [message]);
  return null;
};

const mapStateToProps = (state) => ({
  message: state.toastReducer.message,
  status: state.toastReducer.status,
});

export default connect(mapStateToProps)(ToastWrapper);
