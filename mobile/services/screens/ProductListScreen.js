
import { FlatList, Text, SafeAreaView } from "react-native";

export default function ProductListScreen() {
  const data = [
    { id: 1, title: "Matematik Kitabı", price: 0 },
    { id: 2, title: "Fizik Defteri", price: 50 }
  ];

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>
            {item.title} - {item.price === 0 ? "Bağış" : item.price + " TL"}
          </Text>
        )}
      />
    </SafeAreaView>
  );
}
