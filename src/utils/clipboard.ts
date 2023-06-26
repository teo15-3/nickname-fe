/* eslint-disable import/prefer-default-export */
export const copy = async (copyUrl: string) => {
  const isIphone = /iPhone|iPod/.test(navigator.userAgent);
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  if (isMobile && isIphone) {
    try {
      await navigator.clipboard.writeText(copyUrl);
      return true;
    } catch (error) {
      console.error("실패의경우 에러!!:", error);
      return false;
    }
  } else {
    const input = document.createElement("textarea");
    input.value = copyUrl;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    return true;
  }
};
