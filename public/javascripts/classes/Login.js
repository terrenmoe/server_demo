'use strict';
//TODO import syntax review
import 
class Login {
    // input user:'username', pw:'password' // logs in using input for authorize resolves 
    doLogin(user,pw) {
        Auth.authorize( {
            username: user,
            password: pw
        } );
    }
}
export default Login
