import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export const post = async (req: Request) => {
    try {
        const {userId} = auth();

        const {title} = await req.json();

        if(!userId) {
            return new NextResponse("Unauthorized", {status: 401});
        }

        if (!title) {
            return new NextResponse("Title is required", {status: 401});
        }
        const job = await db.job.create({
            data: {
                userId,
                title,
            }
        })

        return NextResponse.json(job);
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Server Error", {status: 500});
    }
}