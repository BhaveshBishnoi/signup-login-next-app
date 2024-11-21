import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { DbConnection } from "@/dbConfig/dbconfig";
import User from "@/models/userModel";

export async function GET(request: NextRequest) {
  try {
    await DbConnection();
    const userId = await getDataFromToken(request);

    const user = await User.findOne({ _id: userId }).select("-password");
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "User found",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
