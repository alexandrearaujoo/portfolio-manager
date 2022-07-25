import { ReactNode } from "react"
import { UserProvider } from "./User"

interface Props {
  children: ReactNode
}

const Provider = ({children}: Props) => {
  return (
    <UserProvider>
    {children}
    </UserProvider>
  )
}

export default Provider

