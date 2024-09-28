import { ExternalLink, MapPinHouse } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { exampleProfile } from "../../../../mocks/data";
import Link from "next/link";

const Profile = ({ params }: { params: { id: string } }) => {
  const profileID = params.id;

  return (
    <div className="flex min-h-screen flex-col">
      <div className="relative inset-0 flex h-32 justify-center bg-blue-400">
        placeholder banner
        <div className="absolute -bottom-[2.25rem] h-[5.5rem] w-[5.5rem] rounded-full bg-white"></div>
        <Avatar className="absolute -bottom-8">
          <AvatarImage src={exampleProfile.avatar} />
          <AvatarFallback>
            {exampleProfile.name[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="mt-10 space-y-2">
        <h1 className="text-center text-2xl font-bold">
          {exampleProfile.name}
        </h1>
        <h1 className="flex items-center justify-center text-sm">
          <MapPinHouse size={16} className="mr-2" />
          {exampleProfile.location}
        </h1>
        <Link
          className="flex items-center justify-center text-xs"
          href={exampleProfile.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <ExternalLink size={12} className="mr-1" />
          <span className="underline">
            {exampleProfile.link.replace(/^https?:\/\//, "")}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
