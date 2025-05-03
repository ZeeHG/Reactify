import React, { AnchorHTMLAttributes, AllHTMLAttributes } from "react";
import classNames from "classnames";

export type AlertType = "default" | "success" | "danger" | "warning";

interface BaseAlertProps {
    className?: string; 
    alertType?: AlertType;
    title?: string;
    description?: string;
}
type NativeAlertProps = BaseAlertProps & AllHTMLAttributes<HTMLElement>;
type TitleAlertProps = BaseAlertProps & AnchorHTMLAttributes<HTMLElement>;
export type AlertProps = Partial<NativeAlertProps & TitleAlertProps>;

const Alert :React.FC < AlertProps >= (props)=> {
  const { className, type, title, description } = props
  if(type==="default"){  return(
    <div className={classNames("alert",className,{
      [`alert-${type}`]:type
    })}>
      {title && <h4 className="alert-title">{title}</h4>}
      {description && <p className="alert-description">{description}</p>}
    </div>
    )}

}


export default Alert;
