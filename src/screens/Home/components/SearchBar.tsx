import React from 'react';
import {View} from 'react-native';
import FormTextField from '../../../shared/components/FormTextField';
import globalStyles from '../../../shared/styles/globalStyles';

const SearchBar: React.FC<{
  onChangeText: (text: string) => void;
}> = ({onChangeText}) => {
  return (
    <View
      style={[
        globalStyles.verticalDefaultPadding,
        globalStyles.horizontalDefaultPadding,
      ]}>
      <FormTextField onChangeText={onChangeText} />
    </View>
  );
};
export default SearchBar;
