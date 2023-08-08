import style from "./Btn.module.scss";

const Btn = ({
  disabled,
  onNext,
  text,
}: {
  disabled: boolean;
  onNext: () => void;
  text: string;
}) => {
  return (
    <button
      className={
        disabled
          ? `${style.btn} ${style.nonVisible}`
          : `${style.btn} ${style.visible}`
      }
      disabled={disabled}
      onClick={onNext}
      type="button"
    >
      {text}
    </button>
  );
};

export default Btn;
