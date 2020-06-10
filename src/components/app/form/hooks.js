import { useForm as useFormGenerator } from 'hooks';
import { Checkbox, Input } from 'components/fields';

export const useForm = ({
  'keep-me-logged-in': keepMeLoggedIn,
  subscriptions = [{ type: 'weekly' }, 'monthly', [1, 2, 3]],
  name,
  email,
  password,
}) =>
  useFormGenerator({
    fields: [
      {
        name: 'name',
        value: name,
        render: Input,
        settings: {
          id: 'name',
        },
      },
      {
        name: 'email',
        value: email,
        render: Input,
        settings: {
          type: 'email',
          id: 'email',
        },
      },
      {
        name: 'password',
        value: password,
        render: Input,
        settings: {
          type: 'password',
          id: 'password',
        },
      },
      /*
      {
        name: 'keep-logged-in',
        value: keepMeLoggedIn,
        render: Checkbox,
        settings: {
          label: 'Keep me logged in',
        },
      },
      */
      {
        name: 'subscriptions',
        value: subscriptions,
        render: Checkbox,
        settings: {
          options: [
            { label: 'Daily notifications', value: 'daily' },
            { label: 'Weekly notifications', value: { type: 'weekly' } },
            { label: 'Monthly notifications', value: 'monthly' },
            { label: 'Yearly notifications', value: [1, 2, 3] },
          ],
        },
      },
    ],
    onSubmit: data => console.log('onSubmit();', JSON.stringify(data, null, 2)),
  });
