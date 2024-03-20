import {useState, useEffect} from 'react';
import {Dimensions, ScaledSize} from 'react-native';

export const useDeviceDimensions = () => {
  const [dimensions, setDimensions] = useState<ScaledSize>(
    Dimensions.get('window'),
  );

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', () =>
      setDimensions(Dimensions.get('window')),
    );
    return () => subscription.remove();
  }, []);

  const isDeviceInPortraitMode = dimensions.height >= dimensions.width;

  return {isDeviceInPortraitMode};
};
