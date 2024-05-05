'use server'

import { revalidatePath } from "next/cache"
import User from "../models/user.model"
import { connectToDB } from "../mongoose"

interface Params {
  userId: string
  username: string
  name: string
  bio: string
  image: string
  path: string
}

export async function fetchUser(userId: string) {
  try {
    await connectToDB()

    return await User.findOne({ id: userId })

  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`)
  }
}