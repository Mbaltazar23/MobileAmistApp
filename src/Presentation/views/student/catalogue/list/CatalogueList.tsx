import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { StudentStackStackParamList } from "../../../../navigator/StudentStackNavigator";
import useViewModel from "./ViewModel";
import { StudentCategoryItem } from "./Item";
import Carousel from "react-native-reanimated-carousel";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface Props
  extends StackScreenProps<
    StudentStackStackParamList,
    "StudentCatalogueListScreen"
  > {}

export const StudentCatalogueListScreen = ({ navigation, route }: Props) => {
  const { categories, getCategories } = useViewModel();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const [mode, setMode] = useState<any>("horizontal-stack");
  const [snapDirection, setSnapDirection] = useState<"left" | "right">("left");

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <GestureHandlerRootView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View
        style={{
          position: "absolute",
          alignSelf: "center",
          top: height * 0.1,
        }}
      >
        <Carousel
          loop={false}
          width={width}
          height={height}
          autoPlay={false}
          data={categories}
          scrollAnimationDuration={10000}
          renderItem={({ item }) => (
            <StudentCategoryItem
              category={item}
              height={height * 0.62}
              width={width - 70}
            />
          )}
          modeConfig={{
            snapDirection,
            stackInterval: 30,
          }}
          mode={mode}
        />
      </View>
    </GestureHandlerRootView>
  );
};
