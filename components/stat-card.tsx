import type { ReactNode } from "react"

interface StatCardProps {
  value: string
  label: string
  icon?: ReactNode
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <span className="text-xl font-bold text-white">{value}</span>
      </div>
      <span className="text-sm text-blue-200">{label}</span>
    </div>
  )
}

