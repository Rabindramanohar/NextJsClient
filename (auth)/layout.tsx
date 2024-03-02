import React from "react";

export default function auth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="p-4 border-b text-center">20% off for next 3 days!! </div>
      {children}
    </div>
  );
}
