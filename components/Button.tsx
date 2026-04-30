import * as React from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

type ButtonVariants = "sunset" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  onPress?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariants;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Button({
  onPress,
  children,
  disabled = false,
  loading = false,
  size = "md",
  variant,
  style,
  textStyle,
}: ButtonProps) {
  const sizeStyles: Record<
    ButtonSize,
    { height: number; fontSize: number; paddingHorizontal: number }
  > = {
    sm: { height: 36, fontSize: 14, paddingHorizontal: 12 },
    md: { height: 44, fontSize: 16, paddingHorizontal: 16 },
    lg: { height: 55, fontSize: 18, paddingHorizontal: 20 },
  };

  function getTextColor(): string {
    switch (variant) {
      case "sunset":
        return "#fff";
      case "danger":
        return "black";
      default:
        return "#fff";
    }
  }

  function getVariantStyles(): ViewStyle {
    switch (variant) {
      case "sunset":
        return { backgroundColor: "#D17842" };
      case "danger":
        return {
          backgroundColor: "#fff",
          borderWidth: 1,
          borderColor: "black",
        };
      default:
        return { backgroundColor: "#252A32" };
    }
  }

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={StyleSheet.flatten([
        getVariantStyles(),
        {
          height: sizeStyles[size].height,
          paddingHorizontal: sizeStyles[size].paddingHorizontal,
          // backgroundColor: disabled ? "#52555A" : "#D17842",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 12,
          opacity: disabled || loading ? 0.5 : 1,
        },
        style,
      ])}
    >
      <Text
        style={[
          { fontSize: sizeStyles[size].fontSize, color: getTextColor() },
          textStyle,
        ]}
      >
        {loading ? <ActivityIndicator /> : children}
      </Text>
    </Pressable>
  );
}
