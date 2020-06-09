export const getProfile = () => ({
  name: `Fernando (fetched at ${new Date().getTime()})`,
  email: "f.camargo@expertlead.de",
  password: Math.random(),
  "keep-me-logged-in": true
});

export const getError = () => new Error("Backend is down");
