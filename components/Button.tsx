import { apple, ghost, sunset, zincColors } from "@/colors";
import Text from "@/components/ui/Text";
import * as React from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
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
  textStyle = {},
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
        // return "#fff";
        return zincColors[50];
      case "danger":
        // return "black";
        return zincColors[50];
      default:
        return zincColors[50];
    }
  }

  function getVariantStyles(): ViewStyle {
    switch (variant) {
      case "sunset":
        // return { backgroundColor: "#D17842" };
        return { backgroundColor: sunset };
      case "danger":
        return {
          // backgroundColor: "#fff",
          backgroundColor: apple,
          borderWidth: 1,
          borderColor: "black",
        };
      default:
        // return { backgroundColor: ghost, borderWidth: 5, borderColor: sunset };
        return { backgroundColor: ghost };
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
          opacity: disabled || loading ? 0.7 : 1,
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
