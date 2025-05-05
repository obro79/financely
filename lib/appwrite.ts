"use server";

import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";

export async function createSessionClient() {
  console.log('Creating session client with endpoint:', process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT);
  console.log('Project ID:', process.env.NEXT_PUBLIC_APPWRITE_PROJECT);
  
  if (!process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) {
    console.error('NEXT_PUBLIC_APPWRITE_ENDPOINT is not defined');
  }
  if (!process.env.NEXT_PUBLIC_APPWRITE_PROJECT) {
    console.error('NEXT_PUBLIC_APPWRITE_PROJECT is not defined');
  }

  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

  const session = cookies().get("appwrite-session");

  if (!session || !session.value) {
    console.log('No session found in cookies');
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createAdminClient() {
  console.log('Creating admin client with endpoint:', process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT);
  console.log('Project ID:', process.env.NEXT_PUBLIC_APPWRITE_PROJECT);
  console.log('API Key present:', !!process.env.NEXT_APPWRITE_KEY);

  if (!process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) {
    console.error('NEXT_PUBLIC_APPWRITE_ENDPOINT is not defined');
  }
  if (!process.env.NEXT_PUBLIC_APPWRITE_PROJECT) {
    console.error('NEXT_PUBLIC_APPWRITE_PROJECT is not defined');
  }
  if (!process.env.NEXT_APPWRITE_KEY) {
    console.error('NEXT_APPWRITE_KEY is not defined');
  }

  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.NEXT_APPWRITE_KEY!);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
    get user() {
      return new Users(client);
    }
  };
}

