import { shape, string } from 'prop-types';
import React from 'react';

import { useForm } from './hooks';
import withStyle from './style';

export const Form = ({ className, data }) => {
  const {
    fields: {
      'keep-logged-in': keepLoggedIn,
      name,
      email,
      password,
      subscriptions,
    },
    values,
    handleSubmit,
  } = useForm(data);

  return (
    <form className={className} onSubmit={handleSubmit}>
      <h1>Your profile</h1>
      <pre>{JSON.stringify(values, null, 2)}</pre>
      <dl>
        <dt>
          <label htmlFor="name">Name</label>
        </dt>
        <dd>{name}</dd>
      </dl>
      <dl>
        <dt>
          <label htmlFor="email">E-mail</label>
        </dt>
        <dd>{email}</dd>
      </dl>
      <dl>
        <dt>
          <label htmlFor="password">Password</label>
        </dt>
        <dd>{password}</dd>
      </dl>
      <dl>
        <dt>Preferences</dt>
        <dd>
          {keepLoggedIn}
          <dl>
            <dt>Subscriptions</dt>
            <dd>{subscriptions}</dd>
          </dl>
        </dd>
      </dl>
      <button type="submit">Submit</button>
    </form>
  );
};

Form.propTypes = {
  className: string.isRequired,
  data: shape({
    name: string.isRequired,
    email: string.isRequired,
    password: string.isRequired,
  }).isRequired,
};

Form.defaultProps = {};

export default withStyle(Form);
