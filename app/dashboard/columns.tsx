"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type PointsTarget = {
    partyname: string
    regionname: string
    pointswallet: string
    schemename: string
    pointstarget: number
    pointsreceived: number
}

export const columns: ColumnDef<PointsTarget>[] = [
    {
        accessorKey: "partyname",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Party Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "regionname",
        header: "Region Name",
    },
    {
        accessorKey: "pointswallet",
        header: "Wallet",
    },
    {
        accessorKey: "schemename",
        header: "Scheme Name",
    },
    {
        accessorKey: "pointstarget",
        header: "Target",
    },
    {
        accessorKey: "pointsreceived",
        header: "Achieved",
    },
]
