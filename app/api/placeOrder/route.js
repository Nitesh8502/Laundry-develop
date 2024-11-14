import { CONNECTION_STRING } from '@/app/lib/dbConnect';
import { User } from '@/app/lib/model/user';
import mongoose  from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET() {
    let data;
    try {
        await mongoose.connect(CONNECTION_STRING);
        data  = await User.find();
    } catch(e) {
        console.log(e);
    }
    return NextResponse.json(data);
 }

 export async function POST(request) {
    const dataBody = await request.json();
    try {
        await mongoose.connect(CONNECTION_STRING);
        const user = new User(dataBody);
        const result  = await user.save();
        return NextResponse.json({result: true});
    } catch(e) {
        return NextResponse.json({result: false})
    }
 }