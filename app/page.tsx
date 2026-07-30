import { ThemeProvider } from "./components/ThemeProvider"
import Desktop from "./components/Desktop"

export default function Home() {
  return (
    <ThemeProvider>
      <Desktop />
    </ThemeProvider>
  )
}
