import { UserCredential } from "firebase/auth"

export interface AuthStateContext {
    user: any
    register: (email: string, password: string) => Promise<void>
    login: (email: string, password: string) => Promise<void>
    createUserWithEmailAndPassword: (auth:any, email: string, password: string) => Promise<void>
    signInWithEmailAndPassword: (auth:any, email: string, password: string) => Promise<void>
    signInWithPopup: (auth:any, responseGoogle:any) => Promise<void>
    loginWithGoogle: () => Promise<UserCredential>
    logout: () => Promise<void>
}