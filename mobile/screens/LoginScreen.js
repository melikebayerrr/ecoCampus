
import { View, Text, Button, SafeAreaView } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text>Giriş Yap</Text>
        <Button title="Giriş" onPress={() => navigation.navigate("Products")} />
      </View>
    </SafeAreaView>
  );
}
