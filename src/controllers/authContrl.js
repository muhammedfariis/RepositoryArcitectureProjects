class Authcontroller {
  constructor(Authservice) {
    this.Authservice = Authservice;
  }

  register = async (req, res) => {
    const user = await this.Authservice.register(req.body);
    res.json(user);
  };

  login = async (req, res) => {
    const result = await this.Authservice.login(req.body);
    res.json(result);
  };
}

export default Authcontroller;
