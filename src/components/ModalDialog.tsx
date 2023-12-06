import * as React from "react";
import { useTranslation } from "react-i18next";
import { XIcon } from "./XIcon";

type ModalProps = React.PropsWithChildren & {
  /**
   * Controls whether or not the modal dialog is open.
   */
  open: boolean;
  /**
   * Fired when the dialog is closed or cancelled.
   */
  onClose?: () => void;
  /**
   * Fired when the user cancels the currently open dialog by closing it with
   * the Esc key or clicking the X button.
   *
   * Whenever `onCancel` fires, `onClose` also fires.
   */
  onCancel?: () => void;
  /**
   * Whether or not to cancel the modal dialg when the user hits the escape key.
   *
   * Defaults to `true`.
   */
  cancelOnEscapeKey?: boolean;
  /**
   * Whether or not to cancel the modal dialog when the user clicks on the modal
   * backdrop.
   *
   * Defaults to `true`.
   */
  cancelOnBackdropClick?: boolean;
};

/**
 * Simple wrapper around the native `<dialog>` element.
 *
 * Open state is controlled externally by setting the `open`
 * prop and reacting to the `onClose`/`onCancel` events.
 *
 * @example
 *
 * ```tsx
 * <ModalDialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
 *   Content
 * </ModalDialog>
 * ```
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
 */
export function ModalDialog({
  children,
  open,
  onCancel,
  onClose,
  cancelOnEscapeKey = true,
  cancelOnBackdropClick = true,
}: ModalProps) {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const dialogContentRef = React.useRef<HTMLDivElement>(null);
  const { t } = useTranslation(["common"]);

  const onXButtonClick = () => {
    onCancel?.();
    onClose?.();
  };

  /**
   * Implements the `open` prop.
   */
  React.useEffect(() => {
    if (!dialogRef.current) return;
    if (!open && dialogRef.current.open) {
      dialogRef.current.close();
    }
    if (open && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [open]);

  /**
   * Forwards the native `cancel` and `close` events to the `onCancel` and
   * `onClose` props.
   */
  React.useEffect(() => {
    if (!dialogRef.current) return;
    if (!open) return;
    const dialog = dialogRef.current;
    const _onCancel = (event: Event) => {
      event.preventDefault();
      if (!cancelOnEscapeKey) return;
      onCancel?.();
      onClose?.();
    };
    const _onClose = (event: Event) => {
      event.preventDefault();
      onClose?.();
    };

    dialog.addEventListener("cancel", _onCancel);
    dialog.addEventListener("close", _onClose);

    return () => {
      dialog.removeEventListener("cancel", _onCancel);
      dialog.removeEventListener("close", _onClose);
    };
  }, [onClose, onCancel, open, cancelOnEscapeKey]);

  /**
   * Implements the `cancelOnBackdropClick` prop.
   */
  React.useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (!dialogRef.current?.open) return;
      if (!cancelOnBackdropClick) return;
      if (dialogContentRef.current?.contains(event.target as Node)) return;
      onCancel?.();
      onClose?.();
    };
    document.addEventListener("click", onDocumentClick, { capture: true });
    return () => {
      document.removeEventListener("click", onDocumentClick);
    };
  }, [onClose, onCancel, cancelOnBackdropClick]);

  return (
    <dialog ref={dialogRef}>
      <div ref={dialogContentRef}>
        {children}
        <button onClick={onXButtonClick} aria-label={t("common:close")}>
          <XIcon />
        </button>
      </div>
    </dialog>
  );
}
