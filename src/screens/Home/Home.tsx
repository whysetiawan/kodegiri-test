import React from 'react';
import {View} from 'react-native';
import FormTextField from '../../shared/components/FormTextField';
import globalStyles from '../../shared/styles/globalStyles';
import type {HomeNavigationProps} from './Home.type';

const HomeScreen: React.FC<HomeNavigationProps> = () => {
  return (
    <View style={globalStyles.container}>
      <View
        style={[
          globalStyles.verticalDefaultPadding,
          globalStyles.horizontalDefaultPadding,
        ]}>
        <FormTextField />
      </View>
    </View>
  );
};

export default HomeScreen;
