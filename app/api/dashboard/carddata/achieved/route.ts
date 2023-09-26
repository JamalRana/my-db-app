import prisma from "@/prisma/client";
import { endOfToday } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

interface icarddata {
  signedprofile: number;
  pointsreceived: number;
  pointstarget: number;
  targetpercent: number;
  monthpoints: number;
  recentactive: number;
  activeprofilepercent:number;
  previousmonthpoints:number;


}


export async function GET(request: NextRequest) {
  const data:icarddata[] = await prisma.$queryRaw`EXEC	usp_points_target_vs_achieved_summary`;

 


    if (!request) {
        throw new Error('Invalid request');
    }
    // Process the request
    return NextResponse.json(data, { status: 200 });
}