import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {Formik, ErrorMessage, Field} from 'formik';
import TextInput from '../../components/textInput/TextInput';

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

export default class index extends Component {
  onSubmit = async (values, actions) => {
    try {
      await wait(2000);
      const res = await fetch('http://localhost:3004/users/');
      const users = await res.json();
      if (
        users.find(
          x => x.username === values.username && x.password === values.password,
        )
      ) {
        actions.resetForm();
      } else {
        actions.setStatus({serverError: 'Invalid credentials'});
      }
    } catch (error) {}
  };

  render() {
    return (
      <View>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          onSubmit={this.onSubmit}>
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
