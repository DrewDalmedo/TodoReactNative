import React from 'react';
import { SafeAreaView, TextInput, Button } from 'react-native'
import { Formik } from 'formik'

const EntryForm = ({ addTodo }) => {

  const onSubmit = (values, actions) => {
    addTodo(values["todo"])
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={{ todo: '' }}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <SafeAreaView>
          <TextInput 
            onChangeText={handleChange('todo')}
            onBlur={handleBlur('todo')}
            value={values.todo}
          />
          <Button 
            onPress={handleSubmit}
            title="Submit"
          />
        </SafeAreaView>
      )}
    </Formik>

  );
}

export default EntryForm;