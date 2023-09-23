"use client";

//import { Metadata } from "next"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "@/components/date-range-picker"
import { MainNav } from "@/components/main-nav"
import { Overview } from "@/components/overview"
import { RecentSales } from "@/components/recent-sales"
import { Search } from "@/components/search"
import TeamSwitcher from "@/components/team-switcher"
import { UserNav } from "@/components/user-nav"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// export const metadata: Metadata = {
//   title: "Dashboard",
//   description: "Example dashboard app built using the components.",
// }

export default function DashboardPage() {
  return (
    <>
      {/* <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div> */}
      <div className="flex-col">
        {/* <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div> */}
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Points Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              {/* <TabsTrigger value="analytics" disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger> */}
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 ">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Target Acheived Points
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Rs.45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% till date
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Scheme Signed Profiles
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">
                      +18.1% of Active Profiles
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Month Points</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Now
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">
                      +201 since last hour
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Points Received</CardTitle>
                    <CardDescription>
                      265 Profiles Received Points this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>

              </div>
              <div className="grid gap-4">
                <Card className="col-span-4">
                  <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Party Name</TableHead>
                        <TableHead className="w-[200px]">Scheme</TableHead>
                        <TableHead>Region</TableHead>
                        <TableHead>Points Wallet</TableHead>
                        <TableHead className="text-right">Target</TableHead>
                        <TableHead className="text-right">Points</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">HAJI RAJAN</TableCell>
                        <TableCell>NARAN TOUR SCHEME</TableCell>
                        <TableCell>MULTAN</TableCell>
                        <TableCell>RECEIVED</TableCell>
                        <TableCell className="text-right">Rs5,000,000.00</TableCell>
                        <TableCell className="text-right">Rs2,500,000.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">HAJI RAJAN</TableCell>
                        <TableCell>NARAN TOUR SCHEME</TableCell>
                        <TableCell>MULTAN</TableCell>
                        <TableCell>RECEIVED</TableCell>
                        <TableCell className="text-right">Rs5,000,000.00</TableCell>
                        <TableCell className="text-right">Rs2,500,000.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">HAJI RAJAN</TableCell>
                        <TableCell>NARAN TOUR SCHEME</TableCell>
                        <TableCell>MULTAN</TableCell>
                        <TableCell>RECEIVED</TableCell>
                        <TableCell className="text-right">Rs5,000,000.00</TableCell>
                        <TableCell className="text-right">Rs2,500,000.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">HAJI RAJAN</TableCell>
                        <TableCell>NARAN TOUR SCHEME</TableCell>
                        <TableCell>MULTAN</TableCell>
                        <TableCell>RECEIVED</TableCell>
                        <TableCell className="text-right">Rs5,000,000.00</TableCell>
                        <TableCell className="text-right">Rs2,500,000.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">HAJI RAJAN</TableCell>
                        <TableCell>NARAN TOUR SCHEME</TableCell>
                        <TableCell>MULTAN</TableCell>
                        <TableCell>RECEIVED</TableCell>
                        <TableCell className="text-right">Rs5,000,000.00</TableCell>
                        <TableCell className="text-right">Rs2,500,000.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">HAJI RAJAN</TableCell>
                        <TableCell>NARAN TOUR SCHEME</TableCell>
                        <TableCell>MULTAN</TableCell>
                        <TableCell>RECEIVED</TableCell>
                        <TableCell className="text-right">Rs5,000,000.00</TableCell>
                        <TableCell className="text-right">Rs2,500,000.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">HAJI RAJAN</TableCell>
                        <TableCell>NARAN TOUR SCHEME</TableCell>
                        <TableCell>MULTAN</TableCell>
                        <TableCell>RECEIVED</TableCell>
                        <TableCell className="text-right">Rs5,000,000.00</TableCell>
                        <TableCell className="text-right">Rs2,500,000.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">HAJI RAJAN</TableCell>
                        <TableCell>NARAN TOUR SCHEME</TableCell>
                        <TableCell>MULTAN</TableCell>
                        <TableCell>RECEIVED</TableCell>
                        <TableCell className="text-right">Rs5,000,000.00</TableCell>
                        <TableCell className="text-right">Rs2,500,000.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">HAJI RAJAN</TableCell>
                        <TableCell>NARAN TOUR SCHEME</TableCell>
                        <TableCell>MULTAN</TableCell>
                        <TableCell>RECEIVED</TableCell>
                        <TableCell className="text-right">Rs5,000,000.00</TableCell>
                        <TableCell className="text-right">Rs2,500,000.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}