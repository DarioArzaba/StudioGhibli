import {NetInfoState, useNetInfo} from '@react-native-community/netinfo';

export const useConnectionStatus = (): boolean | null => {
  const netInfo: NetInfoState = useNetInfo();
  return netInfo.isInternetReachable;
};
