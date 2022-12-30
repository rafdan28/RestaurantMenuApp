import MealList from "../components/MealsList/MealList";
// import {useContext} from "react";
// import {FavoriteContext} from "../store/context/favorite-context";
import {MEALS} from "../data/dummy-data";
import {StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";

function FavoriteScreen(){
    // const favoriteMealCtx = useContext(FavoriteContext);
    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

    // const favoriteMeals = MEALS.filter(meal => favoriteMealCtx.ids.includes(meal.id));
    const favoriteMeals = MEALS.filter(meal => favoriteMealsIds.includes(meal.id));


    if(favoriteMeals.length === 0){
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        );
    }

    return (
        <MealList items={favoriteMeals}/>
    );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});