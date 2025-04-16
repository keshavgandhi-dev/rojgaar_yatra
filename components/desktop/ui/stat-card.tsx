import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
  icon?: LucideIcon
  className?: string
  iconClassName?: string
}

export function StatCard({ title, value, icon: Icon, className, iconClassName }: StatCardProps) {
  return (
    <div className={cn("rounded-lg border bg-card p-4 shadow-sm", className)}>
      <div className="flex items-center gap-4">
        {Icon && (
          <div className={cn("flex h-12 w-12 items-center justify-center rounded-full bg-primary/10", iconClassName)}>
            <Icon className="h-6 w-6 text-primary" />
          </div>
        )}
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
      </div>
    </div>
  )
}

