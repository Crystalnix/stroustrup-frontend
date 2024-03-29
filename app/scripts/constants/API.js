const DOMAIN = 'https://api.backendless.com/09B44768-E0F1-8BB6-FF0B-70F6E3BA4500/6695E1F0-8850-57ED-FFE6-227C75556200'
const API = {
  ISBN: 'https://www.googleapis.com/books/v1/volumes?q=isbn:',
  LOGIN: `${DOMAIN}/users/login`,
  REGISTER: `${DOMAIN}/users/register`,
  BOOK: `${DOMAIN}/data/book`,
  COMMENTS: `${DOMAIN}/data/comment`,
  USERS: `${DOMAIN}/data/Users`,
  HISTORY: `${DOMAIN}/data/history`,
}

export default API
