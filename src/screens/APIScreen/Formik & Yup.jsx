/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import Colors from '../../utils/Colors/colors';
import DropDown from 'react-native-dropdown-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Layout from '../../components/Layout';

const FormikAndYup = () => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Ahmedabad', value: 'ahmedabad' },
    { label: 'Surat', value: 'surat' },
    { label: 'Vadodara', value: 'vadodara' },
    { label: 'Rajkot', value: 'rajkot' },
    { label: 'Bhavnagar', value: 'bhavnagar' },
    { label: 'Jamnagar', value: 'jamnagar' },
    { label: 'Junagadh', value: 'junagadh' },
    { label: 'Gandhinagar', value: 'gandhinagar' },
  ]);

  const options = ['Male', 'Female', 'Other'];

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name not valid (min 3 chars)')
      .required('Name is required'),

    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),

    city: Yup.string()
      .oneOf(
        items.map(i => i.value),
        'Please select a valid city',
      )
      .required('City is required'),

    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),

    address: Yup.string()
      .min(10, 'Address must be at least 10 characters')
      .required('Address is required'),

    isSaved: Yup.boolean(),

    gender: Yup.string()
      .oneOf(['Male', 'Female', 'Other'], 'Please select a gender')
      .required('Gender is required'),

    terms: Yup.boolean().oneOf([true], 'You must accept Terms & Conditions'),
  });

  return (
    <Layout keyboardAvoidingView style={styles.container}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          city: '',
          address: '',
          isSaved: false,
          gender: '',
          terms: false,
        }}
        validationSchema={validationSchema}
        onSubmit={values => {}}
      >
        {({ values, setFieldValue, errors,dirty }) => {
          return (
            <View style={styles.innerContainer}>
              <Text style={styles.header}>Formik & Yup</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  placeholderTextColor={'gray'}
                  clearButtonMode="while-editing"
                  returnKeyType="next"
                  returnKeyLabel="return"
                  value={values.name}
                  onChangeText={txt => setFieldValue('name', txt)}
                />
                { errors.name && (
                  <Text style={{ color: 'red' }}>{errors.name}</Text>
                )}

                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor={'gray'}
                  clearButtonMode="while-editing"
                  returnKeyType="next"
                  returnKeyLabel="return"
                  value={values.email}
                  onChangeText={txt => setFieldValue('email', txt)}
                />
                { errors.email && (
                  <Text style={{ color: 'red' }}>{errors.email}</Text>
                )}

                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor={'gray'}
                  clearButtonMode="while-editing"
                  returnKeyType="next"
                  returnKeyLabel="return"
                  secureTextEntry
                  value={values.password}
                  onChangeText={txt => setFieldValue('password', txt)}
                />
                {errors.password && (
                  <Text style={{ color: 'red' }}>{errors.password}</Text>
                )}

                <DropDown
                  open={open}
                  value={values.city}
                  items={items}
                  setOpen={setOpen}
                  setValue={callback => {
                    const val = callback(values.city);
                    setFieldValue('city', val);
                  }}
                  setItems={setItems}
                  placeholder="Select City"
                  style={styles.dropdown}
                  dropDownContainerStyle={styles.dropdownContainer}
                  itemSeparator
                  itemSeparatorStyle={styles.seperator}
                />
                {errors.city && (
                  <Text style={{ color: 'red' }}>{errors.city}</Text>
                )}

                <TextInput
                  style={[styles.input, styles.addressInput]}
                  placeholder="Enter Full Address"
                  placeholderTextColor={'gray'}
                  multiline={true}
                  numberOfLines={5}
                  textAlignVertical="top"
                  returnKeyLabel="return"
                  returnKeyType="done"
                  value={values.address}
                  onChangeText={txt => setFieldValue('address', txt)}
                />
                { errors.address && (
                  <Text style={{ color: 'red' }}>{errors.address}</Text>
                )}

                <View style={styles.switchRow}>
                  <Text style={styles.switchLabel}>Save information</Text>
                  <Switch
                    value={values.isSaved}
                    onValueChange={() => setFieldValue('isSaved', !values.isSaved)}
                    thumbColor={Colors.white}
                    trackColor={{ false: Colors.white, true: Colors.primary }}
                  />
                </View>

                <View style={styles.radioContainer}>
                  <Text style={styles.radioHeader}>Select Gender:</Text>
                  {options.map((option, index) => (
                    <Pressable
                      key={index}
                      style={styles.radioRow}
                      onPress={() => setFieldValue('gender', option)}
                    >
                      <View style={styles.outerCircle}>
                        {values.gender === option && (
                          <View style={styles.innerCircle} />
                        )}
                      </View>
                      <Text style={styles.radioLabel}>{option}</Text>
                    </Pressable>
                  ))}
                  { errors.gender && (
                    <Text style={{ color: 'red' }}>{errors.gender}</Text>
                  )}
                </View>
              </View>
              <View style={styles.checkContainer}>
                <TouchableOpacity
                  style={[
                    values.terms ? styles.activeCheckBox : styles.checkBox,
                  ]}
                  onPress={() => setFieldValue('terms', !values.terms)}
                >
                  {values.terms && (
                    <FontAwesomeIcon
                      icon={faCheck}
                      size={12}
                      color={Colors.white}
                    />
                  )}
                </TouchableOpacity>

                <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                  <Text style={{ fontSize: 14 }}>
                    I confirm that the information provided is correct and I
                    agree to the{' '}
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: Colors.primary,
                        textDecorationLine: 'underline',
                      }}
                    >
                      Terms & Conditions
                    </Text>
                    .
                  </Text>
                </View>
              </View>
              { errors.terms && (
                <Text style={{ color: 'red' }}>{errors.terms}</Text>
              )}

              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  alignSelf: 'center',
                  marginTop: 10,
                }}
              >
                <TouchableOpacity
                  style={[styles.button, { backgroundColor: Colors.primary }]}
                >
                  <Text style={[styles.text, { color: Colors.white }]}>
                    Submit
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, { backgroundColor: Colors.red }]}
                >
                  <Text style={styles.text}>Reset</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      </Formik>
    </Layout>
  );
};

export default FormikAndYup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  innerContainer: {
    marginTop: 10,
    gap: 10,
  },
  header: {
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  inputContainer: {
    gap: 18,
  },
  input: {
    borderColor: Colors.primary,
    borderWidth: 1.5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  addressInput: {
    height: 90,
  },
  dropdownContainer: {
    borderWidth: 2,
    borderColor: Colors.primary,
    fontSize: 24,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  dropdown: {
    borderColor: Colors.primary,
    borderWidth: 1.5,
    paddingVertical: 15,
  },
  seperator: {
    backgroundColor: Colors.primary,
  },
  switchRow: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  switchLabel: {
    fontSize: 18,
    fontWeight: '600',
  },
  radioContainer: {
    paddingHorizontal: 5,
  },
  radioHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  outerCircle: {
    height: 22,
    width: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: Colors.primary,
  },
  radioLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  checkContainer: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  checkBox: {
    borderWidth: 2,
    padding: 9,
    borderColor: Colors.secondary,
  },
  activeCheckBox: {
    padding: 5,
    backgroundColor: Colors.primary,
  },
  button: {
    borderRadius: 10,
    width: '45%',
    padding: 20,
  },
  text: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 18,
  },
});
