export type AlertType = "warning" | "info" | "error" | "success" | "alert" | "information" | undefined;
export type LayoutAlert =  "top" | "topLeft" | "topCenter" | "topRight" | "center" | "centerLeft" | "centerRight" | "bottom" | "bottomLeft" | "bottomCenter" | "bottomRight" | undefined;
export type TimeOutAlert = number | false | undefined

export enum TOAST_TYPE {
    WARNING = 'warning',
    INFO= 'info',
    ERROR= 'error',
    SUCCESS= 'success',
  }
   
  export enum LAYOUT_ALERT  {
    BOTTOMLEFT= 'topLeft',
    BOTTOMRIGTH= 'bottomRight',
    TOPRIGTH= 'topRight',
    TOPLEFT= 'topLeft',
  }