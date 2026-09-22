import { createContext, useState } from 'react'
import { databases } from '../lib/appwrite'

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID
const BOOKS_TABLE_ID = process.env.EXPO_PUBLIC_APPWRITE_BOOKS_TABLE_ID

export const BooksContext = createContext({})

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([])

  async function fetchBooks() {
    try {

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

  return (
    <BooksContext.Provider value={{ books, fetchBooks, fetchBookById, createBook, deleteBook}}>
      {children}
    </BooksContext.Provider>
  )
}