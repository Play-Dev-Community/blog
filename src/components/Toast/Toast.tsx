import { useEffect } from "react";

import './Toast.scss';

type ToastType = 'success' | 'error';

export interface Props {
  visible: boolean;
  type: ToastType;
  text: string;
}

export default function Toast({ visible, type, text }: Props) {

  useEffect(() => {
  });

  if (!visible) {
    return null;
  }

  if (visible) {
    return (
      <div className={`toast-wrapper--${type}`}>	
        { text }
      </div>
    );
  }
}
