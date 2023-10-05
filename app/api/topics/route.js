import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";


//add details
export async function POST(request) {
    const {title , description} = await request.json();
    await connectMongoDB();
    await Topic.create({title , description });
    return NextResponse.json({message: "Topic Created"} , {status : 201});
}

//see all details in database
export async function GET() {
    await connectMongoDB();
    const topic = await Topic.find();
    return NextResponse.json({topic});
}


//delete any data using its id
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMOngoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message : "Topic Deleted"} ,  {status : 200});
}