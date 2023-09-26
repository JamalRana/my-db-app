'use client';

//import { Metadata } from "next"

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
import { Overview } from "@/app/dashboard/overview"
import { RecentSales } from "@/app/dashboard/recent-sales"
import { DataTable } from "./data-table";
import prisma from "@/prisma/client";
import { PointsTarget, columns } from "./columns"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

interface ipointstarget {
  partyname: string;
  regionname: string;
  pointswallet: string;
  schemename: string;
  pointstarget: number;
  pointsreceived: number;


}

interface icarddata {
  signedprofile: number;
  pointsreceived: number;
  pointstarget: number;
  targetpercent: number;
  monthpoints: number;
  recentactive: number;
  activeprofilepercent: number;
  previousmonthpoints: number;
}

interface ioverviewdata {
  name: string;
  total: number;
}

interface irecentdata {
  name: string;
  total: number;
  avatar: string;
  shopname: string;
}

// export const metadata: Metadata = {
//   title: "Dashboard",
//   description: "Example dashboard app built using the components.",
// }

export default function DashboardPage() {

  const [maindata, setData] = useState<ipointstarget[]>();
  const [carddata, setCardData] = useState<icarddata[]>();
  const [overviewdata, setOverviewData] = useState<ioverviewdata[]>();
  const [recentpointsdata, setRecentPointData] = useState<irecentdata[]>();


  useEffect(() => {

    getdata();

  }, [])


  const getdata = async () => {
    const response = await fetch('http://localhost:3000/api/dashboard', { cache: 'no-store' });
    const _data: ipointstarget[] = await response.json();
    //const data: ipointstarget[] = await prisma.$queryRaw`EXEC	usp_points_target_vs_achieved`;
    const responsecard = await fetch('http://localhost:3000/api/dashboard/carddata/achieved', { cache: 'no-store' });
    const _datacard: icarddata[] = await responsecard.json();

    const responseoverview = await fetch('http://localhost:3000/api/dashboard/overview', { cache: 'no-store' });
    const _dataoverview: ioverviewdata[] = await responseoverview.json();

    const responserecent = await fetch('http://localhost:3000/api/dashboard/recentpoints', { cache: 'no-store' });
    const _datarecentpoints: irecentdata[] = await responserecent.json();

    setData(_data);
    setCardData(_datacard);
    setOverviewData(_dataoverview);
    setRecentPointData(_datarecentpoints);

  }


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
            {/* <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Generate</Button>
            </div> */}
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            {/* <TabsList>
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
            {/* </TabsList> */}
            <TabsContent value="overview" className="space-y-4">
              {carddata && carddata.map((data: icarddata, index: number) => (
                <div key={index} className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
                      <div className="text-2xl font-bold">Rs.{data.pointsreceived.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">
                        +{data.targetpercent}% till date
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
                      <div className="text-2xl font-bold">+{data.signedprofile}</div>
                    <p className="text-xs text-muted-foreground">
                        +{data.activeprofilepercent}% of Active Profiles
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
                      <div className="text-2xl font-bold">+{data.monthpoints}</div>
                    <p className="text-xs text-muted-foreground">
                        +{data.previousmonthpoints} from last month
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
                      <div className="text-2xl font-bold">+{data.recentactive}</div>
                    <p className="text-xs text-muted-foreground">
                        +{ } since last hour
                    </p>
                  </CardContent>
                </Card>
                </div>))}
              <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-3 sm:grid-cols-1">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <ResponsiveContainer width="100%" height={350}>
                      <BarChart data={overviewdata}>
                        <XAxis
                          dataKey="name"
                          stroke="#888888"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                        />
                        <YAxis
                          stroke="#888888"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                          tickFormatter={(value) => `Rs.${value}`}
                        />
                        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
                <Card className="col-span-4 xs:grid-cols-1  sm:grid-cols-1 lg:grid-cols-3">
                  <CardHeader>
                    <CardTitle>Recent Points Received</CardTitle>
                    <CardDescription>
                      Profiles Received Points this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {recentpointsdata && recentpointsdata.map((data: irecentdata, index: number) => (
                      <div key={index} className="space-y-6">
                        <div className="flex items-center">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src="/avatars/01.png" alt="Avatar" />
                            <AvatarFallback>{data.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none">{data.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {data.shopname}
                            </p>
                          </div>
                          <div className="ml-auto font-medium">+Rs.{data.total.toLocaleString()}</div>
                        </div>
                      </div>))}
                  </CardContent>
                </Card>

              </div>
              <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
                <Card className="col-span-4 px-2">
                  <DataTable columns={columns} data={maindata || []} />
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
