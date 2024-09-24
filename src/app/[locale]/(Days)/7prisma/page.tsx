import prisma from '@/lib/db'
import React from 'react'

type User = {
  id: string;
  name?: string;
}

const Page: React.FC = async () => {
  try {
    const data: User[] = await prisma.user.findMany()
    console.log('Fetched data:', data) // Log the entire data array
    console.log('Data length:', data.length)

    return (
      <div>
        <h1>User List (Total: {data.length})</h1>
        {data.length === 0 ? (
          <p>No users found</p>
        ) : (
          data.map((user: User) => (
            <div key={user.id}>
              ID: {user.id}, Name: {user.name}
            </div>
          ))
        )}
      </div>
    )
  } catch (error) {
    console.error("Failed to fetch users:", error)
    return <div>Error: Failed to load users</div>
  }
}

export default Page