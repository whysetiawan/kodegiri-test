import React from 'react';
import {View} from 'react-native';
import FormTextField from '../../../shared/components/FormTextField';
import globalStyles from '../../../shared/styles/globalStyles';

const SearchBar: React.FC<{
  onChangeText: (text: string) => void;
  placeholder?: string;
}> = ({onChangeText, placeholder}) => {
  return (
    <View
      style={[
        globalStyles.verticalDefaultPadding,
        globalStyles.horizontalDefaultPadding,
      ]}>
      <FormTextField
        onChangeText={onChangeText}
        placeholder={placeholder ?? 'Search ...'}
      />
    </View>
  );
};
export default SearchBar;
