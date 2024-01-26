import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, } from "react-native";
// import DatePicker from "react-native-datepicker";
import { useDispatch } from "react-redux";

import OutlineInput from "../../components/OutlineInput";
import RadiusCornerButton from "../../components/RadiusCornerButton";
import DatePicker from "../../components/DatePicker";
import styles from "./styles";

const AddMaterialScreen = ({ navigation }) => {

  const [state, setState] = useState({ date: new Date(), name: '' });

  const handleDateChange = (newDate) => {
    setState(prevState => ({ ...prevState, date: newDate }));
  };
  const handleNameChange = (name) => {
    setState(prevState => ({ ...prevState, date: name }));
  };

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
            <OutlineInput label={'name'} defaultValue={state.name} onChange={handleNameChange} />
          </Col>
        </Row>
        <Row>
          <Col numRows={1}>
            <OutlineInput label={'Inventory Number'} />
          </Col>
          <Col numRows={1}>
            <OutlineInput label={'Date Entered'} />
          </Col>
        </Row>
        <Row>
          <Col numRows={1}>
            <OutlineInput label={'Storage location'} />
          </Col>
        </Row>
        <Row>
          <Col numRows={1}>
            <Text style={styles.smallTitle}>ADD STORAGE LOCATION</Text>
          </Col>
        </Row>
        <Row>
          <Col numRows={1}>
            <DatePicker
            // date={state.date}
            // mode="date"
            // onDateChange={(newDate) => handleDateChange(newDate)}
            />
          </Col>
        </Row>
        <Row>
          <Col numRows={1}>
            <OutlineInput label={'Pounds'} />
          </Col>
          <Col numRows={1}>
            <OutlineInput label={'Ounces'} />
          </Col>
        </Row>
        <Row>
          <Col numRows={1}>
            <OutlineInput label={'Additional Notes'} />
          </Col>
        </Row>
        <Row>
          <Col numRows={1}>
            <RadiusCornerButton title={'CANCEL'} type={'outline'} onClick={onCancelPress} />
          </Col>
          <Col numRows={2}>
            <RadiusCornerButton title={'SAVE'} type={'primary'} onClick={onSavePress} />
          </Col>
        </Row>
      </View>
    </ScrollView>

  );
};

export default AddMaterialScreen;
