import { useEffect } from "react";

import './Toast.scss';

export interface Props {
  visible: boolean;
  type: string;
  text: string;
}

export default function Toast({ visible, text }: Props) {

  useEffect(() => {
  });

  if (!visible) {
    return null;
  }

  if (visible) {
    return (
      <div className="toast-wrapper">
        { text }
      </div>
    );
  }
}
