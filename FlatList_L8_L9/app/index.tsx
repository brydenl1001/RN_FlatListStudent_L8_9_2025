import ListItem from "@/components/ListItem";
import ListItemSeparator from "@/components/ListItemSeperator";
import { DATA, dataType } from "@/data/appData";
import defaultStyles from "@/styles/defaultStyles";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from "react-native";

export default function Index() {

  // Create a state variable to keep track of selected id
  const [selectedId, setSelectedId] = useState<string>("");

  const itemSelect = (item: dataType) => {
    console.log(item.title);
    setSelectedId(item.id);
  };

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList 
            data={DATA}
            keyExtractor={(item: dataType) => item.id}
            extraData={selectedId}
            renderItem={({item}) => <ListItem onPress={itemSelect} isSelected={item.id === selectedId} item={item}/>}
            ItemSeparatorComponent={() => <ListItemSeparator />}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
});
