import React, { useEffect } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import MaterialList from '../../components/MaterialList';
import RoundButton from "../../components/RoundButton";

import { fetchCategories, fetchCategoryInfo } from "../../redux/actions/category";
import styles from "./styles";

const CategoryScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const { categoryInfo, loading, error } = useSelector(state => state.category);
  useEffect(() => {
    dispatch(fetchCategoryInfo());
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const onClick = (categoryId) => {
    // dispatch(fetchCategoryInfo(categoryId));
  }

  const onAddPress = () => {
    // dispatch(fetchCategoryInfo(categoryId));
  }


  return (
    <ScrollView style={styles.homeContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.buttonContainer}>
          <RoundButton onAddPress={onAddPress} />
        </View>
        {categoryInfo?.length === 0 ? (
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/Images/no_item.png')}
              style={styles.image}
            />
            <Text style={styles.text}>No Items</Text>
          </View>
        ) : (
          categoryInfo.map(material => (
            <MaterialList key={material.id} material={material} onClick={onClick} />
          ))
        )}
      </View>
    </ScrollView>

  );
};

export default CategoryScreen;
