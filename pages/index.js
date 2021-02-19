import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/page/1');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-secondary d-flex justify-content-center next-body align-items-center">
      <div className="spinner-border mx-2 text-light" role="status" aria-hidden="true"></div>
      <div className="mx-2 text-light">Loading...</div>
    </div>
  );
}
