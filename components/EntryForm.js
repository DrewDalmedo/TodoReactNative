import React from 'react';
import { TextInput, Button } from 'react-native';

import ConditionalView from './ConditionalView'
import { Formik } from 'formik';

const EntryForm = ({ addTodo }) => {

  const onSubmit = (values, actions) => {
    addTodo(values["todo"]);
    actions.resetForm();
  }

  const validate = (values) => {
    const errors = {};

    if (values.todo === '') {
      errors.todo = 'You cannot enter a blank todo!';
    }

    return errors;
  }

  return (
    <Formik
      initialValues={{ todo: '' }}
      onSubmit={onSubmit}
      validate={validate}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <ConditionalView>
          <TextInput 
            onChangeText={handleChange('todo')}
            onBlur={handleBlur('todo')}
            value={values.todo}
          />
          <Button 
            onPress={handleSubmit}
            title="Submit"
          />
        </ConditionalView>
      )}
    </Formik>

  );
}

export default EntryForm;