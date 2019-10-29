const AuthenticationController = require("./controllers/AuthenticateContorller");
const AuthenticateContorllerPolicies = require("./policies/AuthenticationControllerPolicy");

module.exports = app => {
  app.post(
    "/register",
    AuthenticateContorllerPolicies.register,
    AuthenticationController.register
  );
};
