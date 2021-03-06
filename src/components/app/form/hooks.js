import { useForm as useFormGenerator } from 'hooks';
import { Checkbox, Text } from 'components/fields';

export const useForm = ({
  'keep-me-logged-in': keepMeLoggedIn,
  subscriptions = [],
  name,
  email,
  password,
}) =>
  useFormGenerator({
    fields: [
      {
        name: 'name',
        value: name,
        render: Text,
        settings: {
          id: 'name',
        },
      },
      {
        name: 'email',
        value: email,
        render: Text,
        settings: {
          type: 'email',
          id: 'email',
        },
      },
      {
        name: 'password',
        value: password,
        render: Text,
        settings: {
          type: 'password',
          id: 'password',
        },
      },
      {
        name: 'keep-logged-in',
        value: keepMeLoggedIn,
        render: Checkbox,
        settings: {
          label: 'Keep me logged in',
        },
      },
      {
        name: 'subscriptions',
        value: subscriptions,
        render: Checkbox,
        settings: {
          options: [
            { label: 'Daily notifications', value: 'daily' },
            { label: 'Weekly notifications', value: 'weekly' },
            { label: 'Monthly notifications', value: 'monthly' },
            { label: 'Yearly notifications', value: 'yearly' },
          ],
        },
      },
    ],
    onSubmit: data => console.log('onSubmit();', JSON.stringify(data, null, 2)),
  });
