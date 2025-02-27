import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
// import { eq } from 'drizzle-orm';
// import { user as usersTable } from './db/schema';

export const db = drizzle(process.env.DATABASE_URL!);

// async function main() {
//   const user: typeof usersTable.$inferInsert = {
//     email: 'john@example.com',
//     clerkId: 'clerk_123',
//     createdAt: new Date().toISOString(),
//     updatedAt: new Date().toISOString(),
//   };

//   await db.insert(usersTable).values(user);
//   console.log('New user created!');

//   const users = await db.select().from(usersTable);
//   console.log('Getting all users from the database: ', users);
//   /*
//   const users: {
//     email: string;
//     clerkId: number;
//     createdAt: string;
//     updatedAt: string;
//   }[]
//   */

//   const singleUser = await db
//     .select()
//     .from(usersTable)
//     .where(eq(usersTable.id, 1))
//     .then((res) => res[0]);
//   console.log('Getting a single user from the database: ', singleUser);

//   await db
//     .update(usersTable)
//     .set({
//       email: 'john@example.com',
//     })
//     .where(eq(usersTable.email, user.email));
//   console.log('User info updated!');

//   await db.delete(usersTable).where(eq(usersTable.email, user.email));
//   console.log('User deleted!');
// }

// main();
