export const getProfile = () => ({
  name: `Fernando (fetched at ${new Date().getTime()})`,
  email: 'f.camargo@expertlead.de',
  password: Math.floor(Math.random() * 16777215).toString(16),
  'keep-me-logged-in': true,
});

export const getError = () => new Error('Server is down');
