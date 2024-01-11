import React from "react";
import { useAtom } from "jotai";

import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { tokenAtom } from "../../services/store/user";

function OnBoardingScreen({ navigation }) {
  const [token, setToken] = useAtom(tokenAtom);

  const handleOnPress = () => {
    setToken("token");
    navigation.navigate("HomeStack");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={handleOnPress}
          style={{
            padding: 20,
            borderRadius: 10,
            backgroundColor: "#eee",
          }}
        >
          <Text>Onboarding done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default OnBoardingScreen;
