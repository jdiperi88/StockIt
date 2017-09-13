const authController = {};

authController.signup = (req,res) => {
    console.log('here');
    res.json({
        user: "test",
        data: 'Put a user profile on this route'
      });
}

module.exports = authController;