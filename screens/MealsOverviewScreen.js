import {View, StyleSheet, FlatList} from "react-native";
import {MEALS} from "../data/dummy-data";
import MealItem from "../components/MealItem";
function MealsOverviewScreen({route}){
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    function renderMealItem(itemData){
        const item = itemData.item;
        const mealItemProps = {
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
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});
