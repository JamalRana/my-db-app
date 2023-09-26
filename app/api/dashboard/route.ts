import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface ipointstarget{
    partyname:string;
regionname:string;
pointswallet:string;
schemename:string;
pointstarget:number;
pointsreceived:number;


}


export async function GET(request: NextRequest) {

    const data:ipointstarget[] = await prisma.$queryRaw`EXEC usp_points_target_vs_achieved`;

    const mappedresult:ipointstarget[] =  data.map(item  => ({
        partyname: item.partyname,
        schemename: item.schemename,
        regionname: item.regionname,
        pointswallet: item.pointswallet,
        pointstarget: item.pointstarget,
        pointsreceived: item.pointsreceived, 
        
    }));



    if (!request) {
        throw new Error('Invalid request');
    }
    // Process the request
    return NextResponse.json(mappedresult, { status: 200 });
}