import { Footer } from './Footer'
import { Header } from './Header'

export const Layout: React.FC = ({ children }) => {
  return (
    <main className="w-full max-w-5xl mx-auto">
      <Header />
      {children}
      <Footer />
    </main>
  )
}
