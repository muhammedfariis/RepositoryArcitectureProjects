
class AuthControl {
  constructor(AuthService) {
    this.AuthService = AuthService;
  }

  register = async (req, res) => {
    try {
      const user = this.AuthService.register(req.body);
       res.json(user)
    } catch (err) {
      next(err);
    }
  };

  login = async (req, res) => {
    try {
      const logger = this.AuthService.login(req.body);
       res.json(logger)
    } catch (err) {
      next(err);
    }
  };
}

export default AuthControl;
