 const BASE_URL = 'https://api-for-finder.onrender.com'


export default class ApiService {
    constructor() {
        this.searchQuery = ''
        this.page = 1,
        this.loading = false
    }

    async fetchArticles() {
             this.loading = true
        try {
            const response = await fetch(`${BASE_URL}/proxy?searchQuery=${this.searchQuery}&page=${this.page}&limit=8`);
            if(!response.ok){
                throw new Error("Error fetching data")
            }

            const data = await response.json()
            
            return data

        } catch (error) {
            console.log(error)
        }finally{
            this.loading = false
        }
    }
    get query() {
        return this.searchQuery
    }
    set query(newQuery) {
        this.searchQuery = newQuery
    }
    incrementPage() {
        this.page += 1
    }
    decrementPage() {
        this.page -= 1
    }
    resetPage(){
        this.page = 1
    }
}
