const homeCont = (req, res) => {
  const data = {
    name: "Shayan Shah",
    id: 20,
  };
  res.render("home", data);
};

export default homeCont;
