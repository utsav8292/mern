const subAdminMiddleware = async (req, res, next) => {
  try {
    console.log(req.user);
    // res.status(200).json({msg:req.user});
    const subAdminRole = req.user.issubAdmin;

    if (!subAdminRole) {
      return res
        .status(403)
        .json({ message: "Access denied. User is not an subadmin." });
    }
    // if user is admin we will move to next middleware
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = subAdminMiddleware;
