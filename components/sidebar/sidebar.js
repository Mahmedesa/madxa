import PostAskPage from '@/app/asks/post/page';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4">
      <PostAskPage />
    </div>
  );
};

export default Sidebar;
