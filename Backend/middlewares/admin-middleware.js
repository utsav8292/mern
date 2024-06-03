const adminMiddleware = async (req, res, next) => {
  try {
    console.log(req.user);
    // res.status(200).json({msg:req.user});
    const adminRole = req.user.isAdmin

    if (!adminRole) {
      return res
        .status(403)
        .json({ message: "Access denied. User is not an admin." });
    }
    // if user is admin we will move to next middleware
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = adminMiddleware;