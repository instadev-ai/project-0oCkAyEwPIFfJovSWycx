import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { DocsSidebar } from "./docs-sidebar"

interface DocsLayoutProps {
  children: React.ReactNode
}

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden border-r bg-background md:block md:w-[280px]">
        <div className="flex h-[60px] items-center border-b px-6">
          <a href="/" className="flex items-center gap-2 font-bold">
            <span className="text-xl">SuperDev</span>
          </a>
        </div>
        <ScrollArea className="h-[calc(100vh-60px)]">
          <DocsSidebar />
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="h-full px-4 py-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-8">
            {children}
            <DocsContent />
          </div>
        </div>
      </div>
    </div>
  )
}

function DocsContent() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Welcome to SuperDev
        </h1>
        <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
          SuperDev is a powerful platform that helps developers create and modify web applications in real-time through natural language interactions.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Getting Started
        </h2>
        <p className="leading-7 text-muted-foreground">
          Start building your web application by describing what you want to create. SuperDev understands natural language and can help you with:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Creating new components and pages</li>
          <li>Modifying existing code</li>
          <li>Implementing features and functionality</li>
          <li>Styling and design improvements</li>
          <li>Debugging and problem-solving</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Key Features
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Real-time Preview</h3>
            <p className="text-sm text-muted-foreground">
              See your changes instantly in the live preview window
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Natural Language Interface</h3>
            <p className="text-sm text-muted-foreground">
              Describe your needs in plain English
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Modern Tech Stack</h3>
            <p className="text-sm text-muted-foreground">
              Built with Vite, React, TypeScript, and more
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Component Library</h3>
            <p className="text-sm text-muted-foreground">
              Access to shadcn/ui components
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}