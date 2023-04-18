import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Dimensions, Image, TouchableOpacity, View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RoundedButton } from "../../../../components/RoundedButton";
import Carousel from "react-native-reanimated-carousel";
import useViewModel from "./ViewModel";
import styles from "./Styles";
import { StudentProductStackParamList } from "../../../../navigator/StudentProductNavigator";

interface Props
  extends StackScreenProps<
    StudentProductStackParamList,
    "StudentProductDetailScreen"
  > {}

export const StudentProductDetailScreen = ({ navigation, route }: Props) => {
  const { product } = route.params;
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  const { addToBag, productImagesList } = useViewModel(product);

  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <Carousel
          loop={false}
          width={width}
          height={height}
          autoPlay={false}
          data={productImagesList}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.productImage} />
          )}
        />
      </GestureHandlerRootView>
      <View style={styles.productDetail}>
        <View style={styles.productInfo}>
          {/*NOMBRE */}
          <Text style={styles.name}>{product.name}</Text>
          <View style={styles.divider}></View>
          {/*DESCRIPTION */}
          <Text style={styles.descriptionTitle}>Tipo</Text>
          <Text style={styles.descriptionContent}>{product.category}</Text>
          <View style={styles.divider}></View>
          {/*STOCK */}
          <Text style={styles.descriptionTitle}>Stock disponible</Text>
          <Text style={styles.descriptionContent}>{product.stock}</Text>
          <View style={styles.divider}></View>
          {/*PRECIO */}
          <Text style={styles.descriptionTitle}>Puntos </Text>
          <Text style={styles.descriptionContent}>{product.points} c/u</Text>
          <View style={styles.divider}></View>
        </View>

        <View style={styles.productActions}>
          <View style={styles.buttonAdd}>
            <RoundedButton text="CANJEAR" onPress={() => addToBag()} />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.back} onPress={() => navigation.pop()}>
        <Image
          style={styles.backImage}
          source={require("../../../../../../assets/back.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
