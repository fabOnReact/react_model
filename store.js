class Store { 
  constructor() {
    // this._data = ...
  }
}

class PostStore extends Store {
  constructor() { 
    super()
  }

  set store(params) {
    this._store = params
  }

  get id() {
    const { id } = this._store
    return id
  }

  get host() {
    return "https://surfcheck.xyz"
  }

  getUser = async () => {
    return await fetch(`${this.host}/users/${this.id}.json`)
  }
}

const post = new PostStore()
export default post
