import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { DocsLayout } from "@/components/docs-layout"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="superdev-theme">
      <div className="min-h-screen bg-background">
        <DocsLayout>
          <div className="absolute right-4 top-4">
            <ModeToggle />
          </div>
        </DocsLayout>
      </div>
    </ThemeProvider>
  )
}

export default App