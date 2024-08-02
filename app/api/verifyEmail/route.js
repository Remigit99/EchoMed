"use client"
// app/api/verifyEmail/route.js
import { NextResponse } from 'next/server';
import { Client, Account } from 'appwrite';

const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID); // Your project ID

const account = new Account(client);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');
  const secret = searchParams.get('secret');

  try {
    await account.updateVerification(userId, secret);
    return NextResponse.redirect('/SignIn');
  } catch (error) {
    console.error('Verification failed:', error);
    return new NextResponse('Verification failed', { status: 500 });
  }
}
