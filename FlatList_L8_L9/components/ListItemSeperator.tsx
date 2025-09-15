import colors from "@/styles/colors";
import React from "react";
import { StyleSheet, View } from "react-native";

type propsType = {
  color?: string;
}

const ListItemSeparator: React.FC<propsType> = ({color}) => {
  return <View style={[styles.separator, {backgroundColor: color || colors.theme.dark.background}]}/>;
};

export default ListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    height: 3,
    width: '100%',
  },
});
