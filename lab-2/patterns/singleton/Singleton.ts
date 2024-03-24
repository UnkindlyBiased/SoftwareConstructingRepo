import AuthData from "./utils/AuthData"

export default class Authenticator {
    private static authInstance: Authenticator
    private static userCount: number = 0

    private constructor() { }

    public static getAuthInstance(): Authenticator {
        if (!Authenticator.authInstance) {
            Authenticator.authInstance = new Authenticator()
        }
        return Authenticator.authInstance
    }

    public authenticate(username: string): void {
        if (!AuthData.find(name => name === username)) {
            AuthData.push(username)
            console.log(`${username} was successfully added`)
            return
        }

        console.log("This user already exists")
    }
}