import React from 'react';
import { View, SafeAreaView, TextInput, Button } from 'react-native'
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

    // old way
    /*
    <Formik
      initialValues={{
        todo: ''
      }}
      onSubmit={onSubmit}
      render={formikProps => 
        {
          <>
            <TextInput
              value={formikProps.values.todo}
              onChangeText={formikProps.handleChange('name')}
            />
            <Button 
              title="Submit"
              onPress={() => formikProps.handleSubmit()}
            />
          </>
        }
      }
    />
    */

  );
}

export default EntryForm;