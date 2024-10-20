"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { createFile } from "@/convex/files";
import { SignedIn, SignedOut, SignInButton, SignOutButton, useSession } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";

export default function Home() {
  const files = useQuery(api.files.getFiles);
  const createFile = useMutation(api.files.createFile);
  const  session = useSession
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <SignedIn>
       <SignOutButton>
       <Button>Sign out</Button>
       </SignOutButton>
       </SignedIn>
       <SignedOut>
       <SignInButton mode="modal">
        <Button>Sign in</Button>
       </SignInButton>
       </SignedOut>
       {files?.map((file) => (
        <div key={file._id}>{file.name}</div>
       ))}
       <Button onClick={() => createFile({name: "New File"})}>Create File</Button>
      
      </main>
     
  );
}
