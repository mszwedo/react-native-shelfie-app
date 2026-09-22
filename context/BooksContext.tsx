import { createContext, useState, useEffect } from 'react'
import { useUser } from '../hooks/useUser'
import { databases, client } from '../lib/appwrite'
import { ID, Permission, Query, Role } from 'react-native-appwrite'

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID
const BOOKS_TABLE_ID = process.env.EXPO_PUBLIC_APPWRITE_BOOKS_TABLE_ID

export const BooksContext = createContext({})

export function BooksProvider({ children }) {

  const [books, setBooks] = useState([])
  const { user } = useUser()

  async function fetchBooks() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        BOOKS_TABLE_ID,
        [
          Query.equal('userId', user.$id)
        ]
      )
      setBooks(response.documents)
    } catch (error) {
      console.error(error.message)
    }
  }

  async function fetchBookById(id: string) {
    try {

    } catch (error) {
      console.error(error.message)
    }
  }

  async function createBook(data) {
    try {
      const newBook = await databases.createDocument(
        DATABASE_ID, 
        BOOKS_TABLE_ID, 
        ID.unique(), 
        {...data, userId: user.$id},
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      )
    } catch (error) {
      console.error(error.message)
    }
  }

  async function deleteBook(id: string) {
    try {

    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    let unsubscribe
    const channel = `databases.${DATABASE_ID}.collections.${BOOKS_TABLE_ID}.documents`

    if (user) {
      fetchBooks()

      unsubscribe = client.subscribe(channel, (response) => {
        const { payload, events } = response
        if (events[0].includes('create')) {
          setBooks((prevBooks) => [...prevBooks, payload])
        }
      })
    } else {
      setBooks([])
    }

    return () => {
      if (unsubscribe) unsubscribe()
    }
  }, [user])

  return (
    <BooksContext.Provider value={{ books, fetchBooks, fetchBookById, createBook, deleteBook}}>
      {children}
    </BooksContext.Provider>
  )
}