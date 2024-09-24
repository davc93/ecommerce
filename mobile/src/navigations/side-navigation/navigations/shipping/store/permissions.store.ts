import {Platform} from 'react-native';
import {
  openSettings,
  PERMISSIONS,
  request,
  type PermissionStatus as RNPermissionStatus,
} from 'react-native-permissions';
import {create, StateCreator} from 'zustand';
export type PermissionStatus =
  | 'granted'
  | 'denied'
  | 'blocked'
  | 'limited'
  | 'unavailable'
  | 'undetermined';

export const requestLocationPermission =
  async (): Promise<PermissionStatus> => {
    let status: RNPermissionStatus = 'unavailable';
    if (Platform.OS === 'ios') {
      status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else if (Platform.OS === 'android') {
      status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else {
      throw new Error('Unsupported platform');
    }
    if (status === 'blocked') {
      await openSettings();
      return await checkLocationPermission();
    }
    const permissionsMapper: Record<RNPermissionStatus, PermissionStatus> = {
      granted: 'granted',
      denied: 'denied',
      blocked: 'blocked',
      unavailable: 'unavailable',
      limited: 'limited',
    };

    return permissionsMapper[status] ?? 'unavailable';
  };

const checkLocationPermission = async (): Promise<PermissionStatus> => {
  let status: RNPermissionStatus = 'unavailable';
  if (Platform.OS === 'ios') {
    status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
  } else if (Platform.OS === 'android') {
    status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  } else {
    throw new Error('Unsupported platform');
  }
  const permissionsMapper: Record<RNPermissionStatus, PermissionStatus> = {
    granted: 'granted',
    denied: 'denied',
    blocked: 'blocked',
    unavailable: 'unavailable',
    limited: 'limited',
  };

  return permissionsMapper[status] ?? 'unavailable';
};

interface PermissionsState {
  status: PermissionStatus;

  requestLocationPermission: () => Promise<PermissionStatus>;
  checkLocationPermission: () => Promise<PermissionStatus>;
}

const store: StateCreator<PermissionsState> = set => ({
  status: 'undetermined',
  requestLocationPermission: async () => {
    const status = await requestLocationPermission();
    set({status});
    return status;
  },
  checkLocationPermission: async () => {
    const status = await checkLocationPermission();
    set({status});
    return status;
  },
});


export const usePermissionStore = create<PermissionsState>()(store)

