import Link from "next/link"

// import { siteConfig } from "@/config/site"
// import { Button, buttonVariants } from "@/components/ui/button"
// import { CalendarDateRangePicker } from "@/components/date-range-picker"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Overview } from "@/app/dashboard/overview"
// import { RecentSales } from "@/app/dashboard/recent-sales"
import DashboardPage from "@/app/dashboard/page"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-3 py-3 md:py-10">
      <DashboardPage  />
    </section>
  )
}
