"use client";
import { useOrganization, useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { UploadButton } from "./upload-button";
import { FileCard } from "./file-card";
import Image from "next/image";
import { GridIcon, Loader2, RowsIcon } from "lucide-react";
import { SearchBar } from "./search-bar";
import { useState, useEffect } from "react";
import { DataTable } from "./file-table";
import { columns } from "./columns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Doc } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";

function Placeholder() {
  return (
    <div className="flex flex-col gap-8 w-full items-center mt-24">
      <Image
        alt="an image of a picture and directory icon"
        width="300"
        height="300"
        src="/empty.svg"
      />
      <div className="text-2xl text-center">You have no files, upload one now</div>
      <UploadButton />
    </div>
  );
}

export function FileBrowser({
  title,
  favoritesOnly,
  deletedOnly,
}: {
  title: string;
  favoritesOnly?: boolean;
  deletedOnly?: boolean;
}) {
  const organization = useOrganization();
  const user = useUser();
  const [query, setQuery] = useState("");
  const [type, setType] = useState<Doc<"files">["type"] | "all">("all");
  const [, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let orgId: string | undefined = undefined;
  if (organization.isLoaded && user.isLoaded) {
    orgId = organization.organization?.id ?? user.user?.id;
  }

  const favorites = useQuery(
    api.files.getAllFavorites,
    orgId ? { orgId } : "skip"
  );

  const files = useQuery(
    api.files.getFiles,
    orgId
      ? {
          orgId,
          type: type === "all" ? undefined : type,
          query,
          favorites: favoritesOnly,
          deletedOnly,
        }
      : "skip"
  );
  const isLoading = files === undefined;

  const modifiedFiles =
    files?.map((file) => ({
      ...file,
      isFavorited: (favorites ?? []).some(
        (favorite) => favorite.fileId === file._id
      ),
    })) ?? [];

  return (
    <div className="w-full max-w-full">
      <div className="flex flex-col items-center mb-8 gap-4 w-full">
        <h1 className="text-4xl font-bold">{title}</h1>

        <div className="flex flex-col w-full gap-4">
          <SearchBar query={query} setQuery={setQuery} />
          <UploadButton />
        </div>
      </div>

      <Tabs defaultValue="grid" className="w-full">
        <div className="flex flex-col items-center gap-4 mb-4 w-full">
          <TabsList className="mb-2 w-full">
            <TabsTrigger value="grid" className="flex gap-2 items-center flex-1">
              <GridIcon />
              Grid
            </TabsTrigger>
            <TabsTrigger value="table" className="flex gap-2 items-center flex-1">
              <RowsIcon /> Table
            </TabsTrigger>
          </TabsList>

          <div className="flex gap-2 items-center w-full">
            <Label htmlFor="type-select" className="whitespace-nowrap">Type Filter</Label>
            <Select
              value={type}
              onValueChange={(newType) => {
                setType(newType as Doc<"files">["type"] | "all");
              }}
            >
              <SelectTrigger id="type-select" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="image">Image</SelectItem>
                <SelectItem value="csv">CSV</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {isLoading && (
          <div className="flex flex-col gap-8 w-full items-center mt-24">
            <Loader2 className="h-32 w-32 animate-spin text-gray-500" />
            <div className="text-2xl">Loading your files...</div>
          </div>
        )}

        <TabsContent value="grid" className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {modifiedFiles?.map((file) => {
              return <FileCard key={file._id} file={file} />;
            })}
          </div>
        </TabsContent>
        <TabsContent value="table" className="w-full">
          <div className="w-full">
            {/* @ts-expect-error - DataTable types may not match modifiedFiles structure */}
            <DataTable columns={columns} data={modifiedFiles} />
          </div>
        </TabsContent>
      </Tabs>

      {files?.length === 0 && <Placeholder />}
    </div>
  );
}
