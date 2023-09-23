import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface items{
    itemcode: string;
    category: string;
    display:string;
    points: number;
    comname: string;
    categoryname:string;
    allowed:boolean;

}


export async function GET(request: NextRequest) {

    const data:items[] = await prisma.$queryRaw`EXEC	usp_qr_items_pivot`;

    const mappedresult =  data.map(item  => ({
        itemcode: item.itemcode,
        category: item.category,
        display: item.display,
        points: item.points,
        comname: item.comname,
        categoryname: item.categoryname, 
        allowed: item.allowed
    }));



    if (!request) {
        throw new Error('Invalid request');
    }
    // Process the request
    return NextResponse.json(mappedresult, { status: 200 });
}