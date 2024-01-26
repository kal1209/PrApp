import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import CategoryBox from '../../components/CategoryBox';

import { fetchCategories, fetchCategoryInfo } from "../../redux/actions/category";
import styles from "./styles";

const HomeScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(state => state.category);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const onClick = (categoryId) => {
    // dispatch(fetchCategoryInfo(categoryId));.
  }

  return (
    <ScrollView style={styles.homeContainer}>
      <View style={styles.mainContainer}>
        {categories.map(category => (
          <CategoryBox key={category.id} category={category} onClick={onClick} />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
