import { View, Text, TouchableOpacity } from "react-native";
import { useAtom } from "jotai";
import { tokenAtom } from "../../services/store/user";

function HomeScreen({ navigation }) {
  const [token, setToken] = useAtom(tokenAtom);

  const handleOnPress = () => {
    setToken(null);
  };
  return (
    <View>
      <TouchableOpacity onPress={handleOnPress}>
        <Text>Go to Onboarding</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
