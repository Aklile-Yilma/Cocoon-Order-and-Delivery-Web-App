const verifyRoles = (...allowedRoles) => {
  // an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
  return (req, res, next) => {
    if (!req?.role) return res.sendStatus(401);

    const rolesArray = [...allowedRoles];

    const result = rolesArray.find((role) => role == req.role);
    if (!result) return res.sendStatus(401);
    next();
  };
};

module.exports = verifyRoles;
