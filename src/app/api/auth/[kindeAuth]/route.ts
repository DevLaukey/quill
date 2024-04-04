import {
  handleAuth,
  createKindeManagementAPIClient,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: any
) {
   const client = await createKindeManagementAPIClient();
   const users = await client.usersApi.getUsers();
  const endpoint = params.kindeAuth
  console.log(users.users);
  
  return handleAuth(request, endpoint)
}

