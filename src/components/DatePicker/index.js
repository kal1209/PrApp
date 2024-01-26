import React, { useState } from 'react';
import { Platform, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
import styles from './styles';

const DatePicker = ({ date: initialDate, placeholder }) => {
  const [dateString, setDateString] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [date, setDate] = useState(initialDate || new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    console.log(currentDate);
    setDateString(moment(currentDate).format('YYYY-MM-DD'));
    setDate(currentDate);
  };

  const showOverlay = () => {
    setShow(true);
  };

  const hideOverlay = () => {
    setShow(false);
  };

  return (
    <View style={{ flex: 1, borderRadius: 100 }}>
      <TouchableOpacity onPress={showOverlay} style={styles.inputContainerStyle}>
        <Text style={dateString ? styles.textStyle : styles.placeholderStyle}>
          {dateString || placeholder}
        </Text>
      </TouchableOpacity>
      {Platform.OS === 'ios' ? (
        <Overlay isVisible={show} onBackdropPress={hideOverlay} overlayStyle={styles.overlayStyle}>
          <View style={styles.headerStyle}>
            <TouchableOpacity onPress={hideOverlay}>
              <Text style={{ paddingHorizontal: 15 }}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={hideOverlay}>
              <Text style={{ paddingHorizontal: 15, color: 'green' }}>Done</Text>
            </TouchableOpacity>
          </View>
          <DateTimePicker
            value={date}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={onChange}
            style={{ backgroundColor: 'white' }}
          />
        </Overlay>
      ) : (
        <>
          {show &&
            <DateTimePicker
              value={date}
              mode={'date'}
              is24Hour={true}
              display="default"
              onChange={onChange}
              style={{ backgroundColor: 'white' }}
            />
          }
        </>
      )}
    </View>
  );
};


export default DatePicker;
