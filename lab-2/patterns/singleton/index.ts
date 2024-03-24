import Authenticator from "./Singleton";

const auth = Authenticator.getAuthInstance()
const newAuth = Authenticator.getAuthInstance()

auth.authenticate("Hello")
newAuth.authenticate("Hello") // supposed not to add this user