import {StyleSheet, ImageResizeMode} from 'react-native';
import colors from '../constants/colors';
import {percentageHeight, percentageWidth} from '../helpers/screen_size';

function percentageImage(
  w: string,
  h: string,
  resizeMode: ImageResizeMode = 'contain',
) {
  const result = StyleSheet.create({
    style: {
      width: `${w}%`,
      height: `${h}%`,
      resizeMode: resizeMode,
    },
  });
  return result;
}

const createdStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  growContainer: {
    flexGrow: 1,
  },
  displayFlex: {
    flex: 1,
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifyEven: {
    justifyContent: 'space-evenly',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 16,
    lineHeight: percentageHeight(5),
  },
  bodyText1: {
    fontSize: 14,
  },
  bodyText2: {
    fontSize: 16,
  },
  caption: {
    fontSize: 10.5,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  horizontalDefaultPadding: {
    paddingHorizontal: percentageWidth(4),
  },
  verticalDefaultPadding: {
    paddingVertical: percentageHeight(2.7),
  },
  topDefaultPadding: {
    paddingTop: percentageHeight(2.7),
  },
  bottomDefaultPadding: {
    paddingBottom: percentageHeight(2.7),
  },
  subtitle: {
    fontSize: 12,
  },
  h5: {
    fontSize: 24,
  },
  h6: {
    fontSize: 18,
  },
  absolute: {
    position: 'absolute',
  },
  bottom: {
    bottom: 0,
  },
  row: {
    flexDirection: 'row',
  },
  atBottom: {
    bottom: 0,
    left: 0,
  },
  useWhiteColor: {
    color: colors.white,
  },
  usePrimaryColor: {
    color: colors.primary,
  },
  useGray3Color: {
    color: colors.gray3,
  },
  useGray3BgColor: {
    backgroundColor: colors.gray3,
  },
  usePrimaryBgColor: {
    backgroundColor: colors.primary,
  },
  xs_btn: {
    padding: percentageWidth(0.9),
    borderRadius: 3,
  },
  itemListImage: {
    width: percentageWidth(14.5),
    height: percentageWidth(14.5),
    resizeMode: 'contain',
  },
  itemListPaddingVertical: {
    paddingVertical: percentageHeight(1.6),
  },
  itemListContent: {
    width: '60%',
    paddingHorizontal: percentageWidth(4),
  },
  grayRoundedInputContainer: {
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: '#F4F4F4',
    width: '100%',
  },
});

const mergedStyles = {
  center: StyleSheet.flatten([
    createdStyles.justifyCenter,
    createdStyles.alignCenter,
  ]),
};
const globalStyles = {
  ...mergedStyles,
  ...createdStyles,
  percentageImage,
};

export default globalStyles;
