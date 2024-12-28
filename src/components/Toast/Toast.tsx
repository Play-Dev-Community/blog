import { useEffect } from "react";
import './Toast.scss';

export type ToastType = 'success' | 'error';

export interface Props {
  visible: boolean;
  type: ToastType;
  text: string;
  onClose?: () => void;  // Nova prop para controlar o fechamento
}

export default function Toast({ visible, type, text, onClose }: Props) {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (visible && onClose) {
      // Define o timeout para fechar o Toast após 3 segundos
      timeoutId = setTimeout(() => {
        onClose();
      }, 3000);
    }

    // Cleanup function para limpar o timeout se o componente for desmontado
    // ou se as dependências mudarem
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [visible, onClose]); // Dependências do useEffect

  if (!visible) {
    return null;
  }

  return (
    <div className={`toast--${type}`}>
      {text}
    </div>
  );
}