export enum OperatingSystem {
  IOS = "iOS",
  ANDROID = "Android",
  UNKNOWN = "unknown",
}

export const useMobileOperatingSystem = () => {
  if (typeof window !== `undefined`) {
    if (navigator.userAgent.match(/iPad|iPhone|iPod/i)) {
      return OperatingSystem.IOS;
    }
    if (navigator.userAgent.match(/android/i)) {
      return OperatingSystem.ANDROID;
    }
  }

  return OperatingSystem.UNKNOWN;
};
