/* eslint-disable import/prefer-default-export */
export const copy = async (copyUrl: string) => {
  document.execCommand(copyUrl);
};
