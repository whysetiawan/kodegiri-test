import React, {memo, useState} from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import colors from '../constants/colors';
import {percentageHeight} from '../helpers/screen_size';
import globalStyles from '../styles/globalStyles';
import Spacer from './Spacer';

interface inputType extends TextInputProps {
  focusedColor?: string;
  onFocus?: () => void;
  label?: string | JSX.Element;
  prefix?: JSX.Element;
}

const FormTextField = React.forwardRef<TextInput, inputType>((props, ref) => {
  const [borderColor, setBorderColor] = useState(colors.gray4);

  function _onFocus(): void {
    setBorderColor(props.focusedColor ?? colors.primary);
  }

  function _onBlur(): void {
    setBorderColor(colors.gray4);
  }

  return (
    <>
      {typeof props.label === 'string' ? (
        <>
          <Text style={globalStyles.bodyText2}>props.label</Text>
          <Spacer height={percentageHeight(1.25)} />
        </>
      ) : (
        props.label
      )}
      <View
        style={[
          styles.rounded,
          styles.defaultPadding,
          {
            borderColor,
          },
        ]}>
        <View style={globalStyles.row}>
          {props.prefix ? props.prefix : null}
          <TextInput
            placeholderTextColor={colors.primary}
            onFocus={_onFocus}
            onBlur={_onBlur}
            {...props}
            style={globalStyles.displayFlex}
            underlineColorAndroid={'transparent'}
            ref={ref}
          />
        </View>
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  rounded: {
    borderRadius: 12,
    borderWidth: 1,
  },
  defaultPadding: {
    paddingHorizontal: 8,
  },
});

export default memo(FormTextField);
