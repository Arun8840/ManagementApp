import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
interface PropTypes {
  children: any;
  styles?: string;
}
const CardContainer = ({children, styles}: PropTypes) => {
  let defaultStyle = styles
    ? styles
    : 'border rounded-lg p-2 bg-white shadow-lg border-stone-100';
  return <View style={tw`${defaultStyle}`}>{children}</View>;
};

export default CardContainer;
