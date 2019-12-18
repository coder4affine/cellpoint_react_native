/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import TextInput from '../../components/textInput/TextInput';
import { REGISTER_USER, REQUEST } from '../../constants/actionTypes';

const fieldData = [
  {
    name: 'username',
    component: TextInput,
    validate: value => {
      let errorMessage = '';
      if (!value) {
        errorMessage = 'Required';
      }
      return errorMessage;
    },
  },
  {
    name: 'password',
    component: TextInput,
    secureTextEntry: true,
    validate: value => {
      let errorMessage = '';
      if (!value) {
        errorMessage = 'Required';
      }
      return errorMessage;
    },
  },
];

const Register = ({ registerUser }) => {
  return (
    <View>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={registerUser}
      >
        {({ handleSubmit, isSubmitting, status }) => {
          return (
            <View style={{ marginTop: 100 }}>
              {status && status.serverError && <Text>{status.serverError}</Text>}
              {status && status.successMessage && <Text>{status.successMessage}</Text>}
              {fieldData.map(x => (
                <Field key={x.name} {...x} />
              ))}
              <Button title="Submit" disabled={isSubmitting} onPress={handleSubmit} />
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    registerUser: (values, actions) =>
      dispatch({
        type: `${REGISTER_USER}_${REQUEST}`,
        payload: values,
        meta: actions,
      }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
