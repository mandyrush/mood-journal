import { db } from '@/src';
import { eq } from 'drizzle-orm';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { user as usersTable } from '@/src/db/schema';

const createNewUser = async () => {
  const user = await currentUser();
  console.log('testing user: ', user);

  const match = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.clerkId, user.id))
    .then((res) => res[0]);
  console.log('match: ', match);

  if (!match) {
    const newUser: typeof usersTable.$inferInsert = {
      email: user?.emailAddresses[0]?.emailAddress,
      clerkId: user.id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    console.log('newUser: ', newUser);

    await db.insert(usersTable).values(newUser);
  }

  redirect('/journal');
};

const NewUser = async () => {
  await createNewUser();
  return <div>...loading</div>;
};

export default NewUser;
