import style from "./ProgressBar.module.scss";

import Process from "../Process/Process";
import { ProcessStatusI } from "./../../../../app/request/page";

const ProgressBar = ({
  processes,
  nowStep,
}: {
  processes: ProcessStatusI[];
  nowStep: number;
}) => {
  return (
    <ul className={style.wrapper}>
      {processes.map((process, idx) => {
        return (
          <>
            <Process
              isNow={nowStep === process.step}
              processStatus={process}
              key={`${idx}progressIdx`}
            ></Process>
            <div
              className={
                // isCompletedAndNotSelfStep과 동일한 컨디션
                nowStep !== process.step && process.isDone
                  ? `${style.adjacencyItem} ${style.isCompletedAndNotSelfStep}`
                  : `${style.adjacencyItem}`
              }
            ></div>
          </>
        );
      })}
    </ul>
  );
};

export default ProgressBar;
