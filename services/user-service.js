class UserRepository {
    getAllUsers() {
        return [
            { id: 1, name: 'Luan' },
            { id: 2, name: 'Afonso' },
        ]
    }
}

export default new UserRepository()
