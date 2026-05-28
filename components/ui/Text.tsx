import { Text as RNText, TextStyle } from "react-native";

export default function Text({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
}) {
  return <RNText style={style}>{children}</RNText>;
}
