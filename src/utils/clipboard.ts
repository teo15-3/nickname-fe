/* eslint-disable import/prefer-default-export */
export const copy = async (copyUrl: string): Promise<void> => {
  await navigator.clipboard.writeText(copyUrl);
};
