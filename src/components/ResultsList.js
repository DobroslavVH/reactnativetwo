import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

const ResultsList = ({title, results, navigation}) => {
    
    if(!results.length) {
        return null
    }

    return (
    <View style={styles.containr}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => results.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>
                )
            }}
        />
        <Text>Results: {results.length}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    containr: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsList);