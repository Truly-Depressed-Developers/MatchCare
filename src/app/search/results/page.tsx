import React from "react";
import prisma from "../../../../db/db";
import Image from "next/image";
import { type NGO as NGOType } from "@prisma/client";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const Results = async () => {
  const ngos = await prisma.nGO.findMany({
    take: 3,
  }); // mock search results

  return (
    <Card className="mx-auto max-w-3xl">
      <div>
        <h1 className="my-5 text-center text-2xl font-bold">Dopasowania NGO</h1>
        <Separator />
        {ngos.map((ngo) => (
          <React.Fragment key={ngo.id}>
            <SearchResult ngo={ngo} />
            <Separator />
          </React.Fragment>
        ))}
      </div>
    </Card>
  );
};

export default Results;

const SearchResult = ({ ngo }: { ngo: NGOType }) => {
  return (
    <Link
      href={`/profile/${ngo.id}`}
      className="grid grid-cols-10 p-5 transition-all hover:bg-gray-100"
    >
      <div className="relative h-14 w-14 overflow-hidden rounded-full">
        <Image src={"/" + ngo.image} fill alt="NGO Image" />
      </div>
      <div className="col-span-9">
        <h1 className="">{ngo.name}</h1>
        <div className="flex space-x-4 text-sm leading-4">
          <p className="text-slate-600">{ngo.location}</p>
          <p className="text-blue-600"></p>
        </div>
        <p className="text-sm leading-4">{ngo.bio}</p>
      </div>
    </Link>
  );
};
