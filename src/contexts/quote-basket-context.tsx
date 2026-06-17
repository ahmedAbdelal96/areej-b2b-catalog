"use client"

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react"

export interface QuoteItem {
  id: string
  slug: string
  name: string
  arabicName: string
  brand: string
  category: string
  moq: string
  quantity: number
  destinationMarket?: string
}

interface QuoteBasketContextType {
  items: QuoteItem[]
  addItem: (item: Omit<QuoteItem, "quantity"> & { quantity?: number }) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  updateMarket: (id: string, market: string) => void
  clearBasket: () => void
  itemCount: number
}

const QuoteBasketContext = createContext<QuoteBasketContextType | undefined>(
  undefined
)

export function QuoteBasketProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([])

  const addItem = useCallback(
    (newItem: Omit<QuoteItem, "quantity"> & { quantity?: number }) => {
      setItems((prev) => {
        const existing = prev.find((item) => item.id === newItem.id)
        if (existing) {
          return prev.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + (newItem.quantity || 1) }
              : item
          )
        }
        return [...prev, { ...newItem, quantity: newItem.quantity || 1 }]
      })
    },
    []
  )

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }, [removeItem])

  const updateMarket = useCallback((id: string, market: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, destinationMarket: market } : item
      )
    )
  }, [])

  const clearBasket = useCallback(() => {
    setItems([])
  }, [])

  return (
    <QuoteBasketContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        updateMarket,
        clearBasket,
        itemCount: items.length,
      }}
    >
      {children}
    </QuoteBasketContext.Provider>
  )
}

export function useQuoteBasket() {
  const context = useContext(QuoteBasketContext)
  if (!context) {
    throw new Error(
      "useQuoteBasket must be used within a QuoteBasketProvider"
    )
  }
  return context
}
