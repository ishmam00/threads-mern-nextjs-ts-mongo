import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import PostThread from '@/components/forms/PostThread';
import { fetchUser } from '@/lib/actions/user.actions';

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  // fetch organization list created by user
  const userInfo = await fetchUser(user.id);
  // console.log('User info:', userInfo);
  // if (!userInfo?.onboarded) redirect('/onboarding');

  // console.log(user.id);

  return (
    <>
      <h1 className="head-text">Create Thread</h1>

      <PostThread userId={userInfo?._id} />
    </>
  );
}

export default Page;
