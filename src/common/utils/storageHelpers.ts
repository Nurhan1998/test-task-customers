export const getStorageData = (key: string | string): string | null => {
  if (typeof localStorage === 'undefined') return null;
  return localStorage.getItem(key);
};

export const removeStorageData = async (key: string): Promise<void> => {
  if (typeof localStorage === 'undefined') return;
  await localStorage.removeItem(key);
};

export const setStorageData = async (key: string, value: string): Promise<void> => {
  if (typeof localStorage === 'undefined') return;
  await localStorage.setItem(key, value);
};
