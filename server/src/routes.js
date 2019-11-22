const AuthenticationController = require("./controllers/AuthenticateController");
const AuthenticateContorllerPolicies = require("./policies/AuthenticationControllerPolicy");

module.exports = app => {
  app.post(
    "/register",
    AuthenticateContorllerPolicies.register,
    AuthenticationController.register
  ),
  app.post(
    "/login",
    AuthenticationController.login
  );
};
