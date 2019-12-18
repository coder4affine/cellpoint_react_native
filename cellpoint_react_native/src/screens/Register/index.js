import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {Formik, ErrorMessage, Field} from 'formik';
import TextInput from '../../components/textInput/TextInput';
import {REGISTER_USER, REQUEST} from '../../constants/actionTypes';

const wait = ms => new Promise(res => setTimeout(res, ms));

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

class Register extends Component {
  // onSubmit = async (values, actions) => {
  //   try {
  //     await wait(2000);
  //     const res = await fetch('http://localhost:3004/users/');
  //     const users = await res.json();
  //     if (
  //       users.find(
  //         x => x.username === values.username && x.password === values.password,
  //       )
  //     ) {
  //       actions.resetForm();
  //     } else {
  //       actions.setStatus({serverError: 'Invalid credentials'});
  //     }
  //   } catch (error) {}
  // };

  render() {
    return (
      <View>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          onSubmit={this.props.registerUser}>
          {({
            values,
            setFieldValue,
            handleSubmit,
            handleBlur,
            isSubmitting,
            status,
          }) => {
            return (
              <View style={{marginTop: 100}}>
                {status && status.serverError && (
                  <Text>{status.serverError}</Text>
                )}
                {status && status.successMessage && (
                  <Text>{status.successMessage}</Text>
                )}
                {fieldData.map(x => (
                  <Field key={x.name} {...x} />
                ))}
                <Button
                  title="Submit"
                  disabled={isSubmitting}
                  onPress={handleSubmit}
                />
              </View>
            );
          }}
        </Formik>
      </View>
    );
  }
}

function mapStateToProps(state) {
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
