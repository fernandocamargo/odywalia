import { createElement } from 'react';
import { useFormik } from 'formik';

export default settings => {
  const initialValues = settings.fields.reduce(
    (stack, { name, value }) => Object.assign(stack, { [name]: value }),
    {}
  );
  const formik = useFormik({ initialValues, onSubmit: settings.onSubmit });
  const fields = settings.fields.reduce(
    (stack, { settings: custom, name, render }) =>
      Object.assign(stack, {
        [name]: createElement(render, {
          value: formik.values[name],
          onChange: value => formik.setFieldValue(name, value),
          ...custom,
        }),
      }),
    {}
  );

  return { fields, ...formik };
};
