class HomeController {
  index(req, res) {
    return res.json({ msg: true });
  }
}

export default new HomeController();
