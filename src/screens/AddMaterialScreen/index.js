import React, { useEffect } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { useDispatch } from "react-redux";

import OutlineInput from "../../components/OutlineInput";
import RadiusCornerButton from "../../components/RadiusCornerButton";
import styles from "./styles";

const AddMaterialScreen = ({ navigation }) => {

  const dispatch = useDispatch();

  const onSavePress = () => {
    // dispatch(fetchCategoryInfo(categoryId));
  }

  const onCancelPress = () => {
    // dispatch(fetchCategoryInfo(categoryId));
  }

  const Col = ({ numRows, children }) => {
    return (
      <View style={styles[`${numRows}col`]}>{children}</View>
    )
  }

  const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
  )

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.app}>
        <Row>
          <Col numRows={1}>
            <OutlineInput />
          </Col>
        </Row>
        <Row>
          <Col numRows={1}>
            <OutlineInput />
          </Col>
          <Col numRows={1}>
            <OutlineInput />
          </Col>
        </Row>
        <Row>
          <Col numRows={1}>
            <OutlineInput />
          </Col>
        </Row>
        <Row>
          <Col numRows={1}>
            <Text style={styles.smallTitle}>ADD STORAGE LOCATION</Text>
          </Col>
        </Row>
        <Row>
          <Col numRows={1}>

          </Col>
        </Row>
        <Row>
          <Col numRows={1}>
            <OutlineInput />
          </Col>
          <Col numRows={1}>
            <OutlineInput />
          </Col>
        </Row>
        <Row>
          <Col numRows={1}>
            <OutlineInput />
          </Col>
        </Row>
        <Row>
          <Col numRows={1}>
            <RadiusCornerButton onClick={onCancelPress} />
          </Col>
          <Col numRows={1}>

          </Col>
        </Row>
      </View>
    </ScrollView>

  );
};

export default AddMaterialScreen;
