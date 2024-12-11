import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SmallCardProps {
  image: string;
  name: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ image, name }) => {
  return (
    <Card className="w-28">
      <CardHeader>
        <Avatar>
          <Image
            src={image}
            className="aspect-square h-full w-full"
            alt="avatar image"
            width={10}
            height={10}
          />

          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardHeader>{name}</CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default SmallCard;
