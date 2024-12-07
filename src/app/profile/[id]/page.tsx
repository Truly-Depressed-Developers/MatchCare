import {
  Earth,
  Link as LinkIcon,
  LockKeyhole,
  MapPin,
  UserRoundPlus,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Project from "@/components/Project/Project";
import { Card } from "@/components/ui/card";
import prisma from "@/../db/db";

const Profile = async ({ params }: { params: { id: string } }) => {
  const response = await fetch("http://127.0.0.1:5000/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      where: { ID: { $eq: params.id } },
      include: ["documents", "distances", "metadatas"],
    }),
    cache: "no-store", // Prevent caching to ensure fresh data
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();

  const formatedData = data.results.metadatas[0][0];

  return (
    <>
      <Card className="mx-auto mb-10 flex min-h-screen max-w-3xl flex-col">
        <div className="relative inset-0 flex h-52 bg-blue-400">
          <div className="absolute -bottom-11 left-4 h-[11.125em] w-[11.125rem] rounded-full bg-white"></div>
          <Avatar className="absolute -bottom-10 left-5 h-[10.625rem] w-[10.625rem]">
            <AvatarImage src={formatedData.Img} />
            <AvatarFallback>{formatedData["Nazwa organizacji"]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="mt-12 space-y-2 px-6">
          <h1 className="text-xl font-semibold">
            {formatedData["Nazwa Organizacji"]}
          </h1>
          <h2 className="text-sm font-light">{formatedData.Opis}</h2>
          <h2 className="flex items-center text-sm">
            <MapPin size={14} className="mr-2" />
            Location: {formatedData["Adres Rejestrowy Ulica"]}
          </h2>
          <h2 className="flex items-center text-sm">
            <Earth size={14} className="mr-2" />
            Areas of impact:{"\u00A0"}
            {formatedData["Obszary Działań Dokładne"]
              .split("|")
              .map((area: string, index: number) => (
                <span key={index}>{area}</span>
              ))}
          </h2>
          <Link
            className="flex items-center text-sm"
            href={formatedData["Link NGO"]}
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkIcon size={14} className="mr-2" />
            Website: {"\u00A0"}
            <span className="underline">
              {formatedData["Link NGO"].replace(/^https?:\/\//, "")}
            </span>
          </Link>
        </div>
        <div className="mb-9 mt-5 flex space-x-2 px-6">
          <Button className="rounded-3xl font-semibold">
            <UserRoundPlus className="mr-2 h-4 w-4" />
            To set up a contact
          </Button>
          <Button
            variant="outline"
            className="rounded-3xl border-primary font-semibold text-primary transition-all hover:bg-primary hover:text-white"
          >
            <LockKeyhole className="mr-2 h-4 w-4" />
            Send a message
          </Button>
          <Button
            variant="outline"
            className="rounded-3xl border-[#585858] font-semibold text-[#585858]"
          >
            More
          </Button>
        </div>
      </Card>
    </>
  );
};

export default Profile;
