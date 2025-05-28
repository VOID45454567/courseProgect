import userRepository from "../repositories/userRepository.js";
class UserService {
    async getUserByID(id){
        const user = await userRepository.getUserByID(id)
        if (!user) {
            throw new Error('not found')
        }
        return user
    }
    async getAllUers(){
        const users = await userRepository.getAll()
        return users
    }
    async deleteUser(id){
        const deletedUser = await userRepository.deleteUser(id)
        return deletedUser
    }
    async updateUser(id, data){
        const updatedUser = await userRepository.updateUser(id, data)
        return updatedUser
    }
   
}
export default new UserService()