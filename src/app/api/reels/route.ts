import { NextResponse } from "next/server";
import instagramDl from "@sasmeee/igdl";


export const POST = async (req: Request) => {
    try {
        const { url } = await req.json();

        if (!url) {
            const response = NextResponse.json(
                { message: "URL is required" },
                { status: 400 }
            );
            response.headers.set('Access-Control-Allow-Origin', '*');
            return response;
        }

        const dataList = await instagramDl(url);
        const response = NextResponse.json({ message: "OK", data: dataList }, { status: 200 });
        response.headers.set('Access-Control-Allow-Origin', '*');
        return response;
    } catch (err) {
        const response = NextResponse.json(
            { message: "error", err },
            { status: 500 }
        );
        response.headers.set('Access-Control-Allow-Origin', '*');
        return response;
    }
};


export const GET = async (req: Request) => {
    const response = NextResponse.json({ message: "This API only supports POST requests" }, { status: 405 });
    response.headers.set('Access-Control-Allow-Origin', '*');
    return response;
};
