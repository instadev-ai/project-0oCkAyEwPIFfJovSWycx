import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface DocsSidebarProps {
  className?: string
}

export function DocsSidebar({ className }: DocsSidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Documentation
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              Introduction
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Getting Started
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Key Features
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Components
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Guides
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              Basic Usage
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Advanced Features
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Best Practices
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Troubleshooting
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Resources
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              Examples
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              API Reference
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Community
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}