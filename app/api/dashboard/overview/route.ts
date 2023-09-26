import prisma from "@/prisma/client";
import { endOfToday } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

interface ioverviewdata {
  name: string;
  total: number;
  

}


export async function GET(request: NextRequest) {
  const data:ioverviewdata[] = await prisma.$queryRaw`EXEC	usp_points_target_vs_achieved_monthly`;

 


    if (!request) {
        throw new Error('Invalid request');
    }
    // Process the request
    return NextResponse.json(data, { status: 200 });
}