const allRoles = {
  user: ['getItems'],
  admin: ['getUsers', 'manageUsers', 'getItems', 'manageItems', 'manageCollections'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
