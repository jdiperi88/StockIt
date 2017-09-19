//gets jwt strategy
const requireAuth = passport.authenticate('jwt', {session: false})
console.log(requireAuth);
//gets local strategy helper method
const requireSignin = passport.authenticate('local', {session: false})

module.exports = {
    requireAuth,
    requireSignin
}