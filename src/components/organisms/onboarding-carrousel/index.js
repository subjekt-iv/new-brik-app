import * as React from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Logo from "@components/atoms/logo";

function Index() {
  const width = Dimensions.get("window").width;

  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Carousel
        loop
        width={width / 1.2}
        height={width / 2}
        data={[...new Array(4).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={() => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Logo />
          </View>
        )}
      />
      <Text style={{ color: "#fff", fontSize: 17, marginTop: 32 }}>
        {currentIndex}
      </Text>
    </View>
  );
}

export default Index;
