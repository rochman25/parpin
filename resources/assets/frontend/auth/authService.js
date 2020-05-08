import EventEmitter from 'events'
import authConfig from './../../../../auth_config.json'


class AuthService extends EventEmitter {

    isAuthenticated() {
        return (
            localStorage.getItem('userInfo')
        );
    }
}

export default new AuthService();