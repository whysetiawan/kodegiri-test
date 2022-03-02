import React from 'react';
import {View} from 'react-native';

interface ISpacer {
  width?: number;
  height?: number;
}

const Spacer: React.FC<ISpacer> = ({height, width}) => (
  <View
    style={{
      height,
      width,
    }}
  />
);

export default Spacer;
