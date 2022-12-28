import MealItem from "./MealItem";
import {FlatList, StyleSheet, View} from "react-native";

function MealList({items}){
    function renderMealItem(itemData){
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        }
        return(
            <MealItem {...mealItemProps}/> //sintassi per distribuire tutte le proprieta ai parametri del componente
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});
