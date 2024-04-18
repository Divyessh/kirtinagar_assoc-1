'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import MembersTable from './membersTable';
import SuperadminTable from '../superadmin/superAdminTable'; // Import SuperadminTable component

function MemberDetails() {
  // Change function name to start with a lowercase letter
  const { data: session } = useSession();

  return <div>{session?.user?.role === 'superadmin' ? <SuperadminTable /> : <MembersTable />}</div>;
}

export default MemberDetails;
