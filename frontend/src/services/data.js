import { users } from './sample.json'

const GetUsers = () =>{
    return Promise.resolve(users);
}

export { GetUsers }