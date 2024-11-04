function userInfo(req, res, next) {
  console.log("Username: Shayan Shah");
  console.log("Email: dummy@gmail.com");
  console.log("Age: 21");
  console.log("Country: Pakistan");
  next();
}

export default userInfo;
