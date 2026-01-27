'use client';

import { toast } from 'sonner';

function SignOutLink() {
  const handleLogout = () => {
    toast.success('Logout Successful');
  };
  return (
    <button className='w-full text-left' onClick={handleLogout}>
      Logout
    </button>
  );
}
export default SignOutLink;