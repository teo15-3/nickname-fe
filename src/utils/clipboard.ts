/* eslint-disable import/prefer-default-export */
export const copy = async (copyUrl: string) => {
  const isIphone = /iPhone|iPod/.test(navigator.userAgent);
  if (isIphone) {
    await navigator.clipboard.writeText(copyUrl);
  } else {
    document.execCommand(copyUrl);
  }
};
