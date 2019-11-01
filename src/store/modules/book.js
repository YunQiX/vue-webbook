const book = {
    state: {
        bookName:''
    },
    mutations: {
        setBookName:(state,bookName) => {
            state.bookName = bookName
        }
    },
    actions: {
        setBookName:({commit},bookName) => {
           return commit('setBookName',bookName)
        }
    }
}

export default book;