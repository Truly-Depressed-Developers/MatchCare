import {
  Earth,
  Link as LinkIcon,
  LockKeyhole,
  MapPin,
  UserRoundPlus,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { exampleProfile } from "../../../../mocks/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Project from "@/components/Project/Project";
import { Card } from "@/components/ui/card";

const Profile = ({ params }: { params: { id: string } }) => {
  const profileID = params.id;

  console.log(profileID);

  return (
    <Card className="mx-auto mb-10 flex min-h-screen max-w-3xl flex-col">
      <div className="relative inset-0 flex h-52 bg-blue-400">
        <div className="absolute -bottom-11 left-4 h-[11.125em] w-[11.125rem] rounded-full bg-white"></div>
        <Avatar className="absolute -bottom-10 left-5">
          <AvatarImage src={exampleProfile.avatar} />
          <AvatarFallback>
            {exampleProfile.name[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="mt-12 space-y-2 px-6">
        <h1 className="text-xl font-semibold">{exampleProfile.name}</h1>
        <h2 className="text-sm font-light">{exampleProfile.bio}</h2>
        <h2 className="flex items-center text-sm">
          <MapPin size={14} className="mr-2" />
          Location: {exampleProfile.location}
        </h2>
        <h2 className="flex items-center text-sm">
          <Earth size={14} className="mr-2" />
          Areas of impact:{"\u00A0"}
          {exampleProfile.areasOfImpact.map((area, index) => (
            <span key={index}>
              {area}
              {index < exampleProfile.areasOfImpact.length - 1 && ",\u00A0"}
            </span>
          ))}
        </h2>
        <Link
          className="flex items-center text-sm"
          href={exampleProfile.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkIcon size={14} className="mr-2" />
          Website: {"\u00A0"}
          <span className="underline">
            {exampleProfile.link.replace(/^https?:\/\//, "")}
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
      <Separator />
      <div className="my-6 mb-9 px-6">
        <h1 className="text-lg">General information</h1>
        <p className="text-sm">{exampleProfile.generalInfo}</p>
      </div>
      <Separator />
      <div className="my-8 px-6">
        <h1 className="text-lg">Adress</h1>
        <p className="text-sm">{exampleProfile.adress}</p>
      </div>
      <Separator />
      <div className="my-8 space-y-10 px-6">
        <h1 className="text-lg">Past Projects</h1>
        {exampleProfile.projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </Card>
  );
};

export default Profile;
