/**
 * Configure Auth Key
 * jsonwebtoken functions such as verify() 
 * or sign() use algorithm that 
 * needs a secret key (as String) to 
 * encode and decode token.
*/
module.exports = {
    secret: "bezkoder-secret-key"
  };
  //JWT is encoded and serialized and signed with it's own secret key.