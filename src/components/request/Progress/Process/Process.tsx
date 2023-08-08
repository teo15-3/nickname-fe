import style from "./Process.module.scss";

import Image from "next/image";
import { REQUESTPAGE_COMMON_IMAGE_PATH } from "@/utils/requestPageConstants";
import { ProcessStatusI } from "./../../../../app/request/page";

const Process = ({
  processStatus,
  isNow,
}: {
  processStatus: ProcessStatusI;
  isNow: boolean;
}) => {
  const isCompletedAndNotSelfStep = !isNow && processStatus.isDone;
  const isNotCompleteAndNotSelfStep = !isNow && !processStatus.isDone;

  return (
    <>
      <li className={style.container}>
        {isNow && (
          <span className={`${style.item} ${style.isSelected}`}>
            {processStatus.step}
          </span>
        )}
        {isNotCompleteAndNotSelfStep && (
          <span className={`${style.item} ${style.isNotSelected}`}>
            {processStatus.step}
          </span>
        )}
        {isCompletedAndNotSelfStep && (
          <Image
            width={32}
            height={32}
            alt="doneIcon"
            src={`${REQUESTPAGE_COMMON_IMAGE_PATH}process-done.png?v=2`}
          ></Image>
        )}
      </li>
    </>
  );
};

export default Process;
