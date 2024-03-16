import React from "react";

type Props = {
  heading: String;
  description: String | null;
  image: String | null;
};

function BentoBox({ heading, description, image }: Props) {
  return (
    <div className="flex flex-col gap-1 p-6 border border-border rounded-lg">
      <h1 className="text-sm">Heading</h1>
      <p className="font-semibold">Content</p>
    </div>
  );
}

export default BentoBox;
