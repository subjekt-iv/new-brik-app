import { Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useAtom } from "jotai";
import { tokenAtom } from "../../services/store/user";

function HomeScreen({ navigation }) {
  const [token, setToken] = useAtom(tokenAtom);

  const handleOnPress = () => {
    setToken(null);
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={handleOnPress}>
        <Text>Go to Onboarding</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreen;
