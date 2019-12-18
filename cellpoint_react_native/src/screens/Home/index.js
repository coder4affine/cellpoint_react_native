/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Formik, Field } from 'formik';
import TextInput from '../../components/textInput/TextInput';
import Button from '../../components/button/Button';
import { ADD_PRODUCT, REQUEST } from '../../constants/actionTypes';

const fields = [
  {
    name: 'productName',
    component: TextInput,
    validate: value => {
      let errorMessage = '';
      if (!value) {
        errorMessage = 'Required';
      }
      if (value.length < 3) {
        errorMessage = 'Min Length 3';
      }
      return errorMessage;
    },
  },
  {
    name: 'productPrice',
    component: TextInput,
    validate: value => {
      let errorMessage = '';
      if (!value) {
        errorMessage = 'Required';
      }
      if (!/\d/i.test(value)) {
        errorMessage = 'Invalid Entry';
      }
      return errorMessage;
    },
  },
];

class Home extends Component {
  displayName = 'Home';

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    addProduct: PropTypes.func.isRequired,
  };

  onButtonPress = path => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate(path);
  };

  render() {
    const { addProduct } = this.props;
    return (
      <View>
        <Formik
          initialValues={{
            productName: '',
            productPrice: '',
          }}
          onSubmit={addProduct}
        >
          {({ handleSubmit }) => {
            return (
              <View>
                {fields.map(x => (
                  <Field key={x.name} {...x} />
                ))}
                <Button title="Submit" onPress={handleSubmit} />
              </View>
            );
          }}
        </Formik>
      </View>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addProduct: (values, actions) =>
      dispatch({ type: `${ADD_PRODUCT}_${REQUEST}`, payload: values, meta: actions }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
