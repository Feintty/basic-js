const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return (Array.isArray(members))? members.map(element => (typeof element==="string")?element.replace(/\s+/g, '')[0].toUpperCase():"").sort().join(""):false;
};
