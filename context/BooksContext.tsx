import { createContext, useState, useEffect } from 'react'
import { useUser } from '../hooks/useUser'
import { databases } from '../lib/appwrite'
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
      console.log(response.documents)
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
    if (user) {
      fetchBooks()
    } else {
      setBooks([])
    }
  }, [user])

  return (
    <BooksContext.Provider value={{ books, fetchBooks, fetchBookById, createBook, deleteBook}}>
      {children}
    </BooksContext.Provider>
  )
}