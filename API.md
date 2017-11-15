
  **Get Bookshelf**
  ----
    Returns json data about a single book.

  * **URL**

    /book

  * **Method:**

    `GET`

  *  **URL Params**

    None

  * **Data Params**

    None

  * **Success Response:**

    * **Code:** 200 <br />
      **Data:** `[
                      {
                        objectId: string,
                        title: string,
                        author: string,
                        image: string,
                      },
                      ...
                    ]`


**Get Book**
----
  Returns json data about a single book.

* **URL**

  /book/:id

* **Method:**

  `GET`

*  **URL Params**

   **Required:**

   `id=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Data:** `{
                    objectId: string,
                    isbn: string,
                    title: string,
                    subtitle: string,
                    author: string,
                    image: string,
                    publisher: string,
                    published_date: string,
                    page_count: string,
                    description: text,
                    user_id: string | null,
                  }`


**Add Book**
----
  Returns json data about a single book.

* **URL**

  /book

* **Method:**

  `POST`

*  **URL Params**

  None

* **Data Params**

  **Headers:** `{
                  user-token: string,
                }`


  **Data:** `{
                  isbn: string,
                  title: string,
                  subtitle: string,
                  author: string,
                  image: string,
                  publisher: string,
                  published_date: string,
                  page_count: string,
                  description: text,
                }`

* **Success Response:**

  * **Code:** 200 <br />
    **Data:** `{
                    objectId: string,
                    isbn: string,
                    title: string,
                    subtitle: string,
                    author: string,
                    image: string,
                    publisher: string,
                    published_date: string,
                    page_count: string,
                    description: text,
                    user_id: string | null,
                  }`


**Register user**
----
  Returns json data about a single book.

* **URL**

  /users/register

* **Method:**

  `POST`

*  **URL Params**

  None

* **Data Params**

  **Data:** `{
                email: string,
                name: string,
                password: string,
              }`

* **Success Response:**

  * **Code:** 200 <br />
    **Data:** `{
                    objectId: string,
                    email: string,
                    name: string,
                    password: string,
                  }`



**Login User**
----
  Returns json data about a single book.

* **URL**

  /data/comment

* **Method:**

  `POST`

*  **URL Params**

  None

* **Data Params**

  **Data:** `{
               login: string,
               password: string,
             }`

* **Success Response:**

  * **Code:** 200 <br />
    **Data:** `{
                  objectId: string,
                  user-token: string,
                  name: string,
                  email: string,
                  role: string,
                }`


**Get Comments**
----
  Returns json data about a single book.

* **URL**

  /data/comment

* **Method:**

  `GET`

*  **URL Params**

  None

* **Data Params**

  **Headers:** `{
                  user-token: string,
                }`

* **Success Response:**

  * **Code:** 200 <br />
    **Data:** `[
                 {
                   id: string,
                   ownerId: string,
                   postDate: string,
                   bookId: string,
                   text: string,
                   username: string,
                 },
                 ...
               ]`


**Add Comment**
----
  Returns json data about a single book.

* **URL**

  /data/comment

* **Method:**

  `GET`

*  **URL Params**

  None

* **Data Params**

  **Headers:** `{
                  user-token: string,
                }`

  **Data:** `{
               postDate: string,
               bookId: string,
               text: string,
               username: string,
             }`

* **Success Response:**

  * **Code:** 200 <br />
    **Data:** `{
                 id: string,
                 ownerId: string,
                 postDate: string,
                 bookId: string,
                 text: string,
                 username: string,
               }`

**Get History**
----
  Returns json data about a single book.

* **URL**

  /data/history

* **Method:**

  `GET`

*  **URL Params**

  None

* **Data Params**

  **Headers:** `{
                  user-token: string,
                }`

  **Data:** `{
               postDate: string,
               bookId: string,
               text: string,
               username: string,
             }`

* **Success Response:**

  * **Code:** 200 <br />
    **Data:** `{
                 id: string,
                 ownerId: string,
                 postDate: string,
                 bookId: string,
                 text: string,
                 username: string,
               }`