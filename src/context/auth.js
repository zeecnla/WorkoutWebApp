import { useAuth } from "../providers/AuthProvider"

function useUser() {
  const context = useAuth()

  if (!context) {
    throw new Error("useUser must be wrapped within UserProvider")
  }

  return context
}

export default useUser
