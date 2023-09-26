import prisma from "@/prisma/client";
import { endOfToday } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

interface irecentdata {
  name: string;
  total: number;
  avatar:string;
  shopname:string;
}


export async function GET(request: NextRequest) {
  const data:irecentdata[] = await prisma.$queryRaw`EXEC	usp_points_achieved_profiles_monthly`;

 


    if (!request) {
        throw new Error('Invalid request');
    }
    // Process the request
    return NextResponse.json(data, { status: 200 });
}