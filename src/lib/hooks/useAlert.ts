import { LAYOUT_ALERT } from './../types/alert';
import Noty from 'noty'
import { AlertType, LayoutAlert, TimeOutAlert, TOAST_TYPE } from '../types/alert'

const useAlert = () => {

  const showMessage = (
    text: string,
    type: AlertType = TOAST_TYPE.SUCCESS,
    modal: boolean = true,
    layout: LayoutAlert = LAYOUT_ALERT.BOTTOMRIGTH,
    timeout: TimeOutAlert = 3000,
  ) => {
      new Noty({
        type: type,
        theme: 'bootstrap-v4',
        layout: layout,
        text: text,
        timeout: timeout,
        modal,
      }).show()
  }
  return {
    showMessage,
  }
}

export default useAlert
