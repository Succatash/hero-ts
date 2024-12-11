import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { CheckCircle2, Info, X } from "lucide-react";

// Define an interface for the card configuration
interface CardConfig {
  title: string;
  description: string;
  content: React.ReactNode;
  footer?: string;
  type?: "default" | "secondary" | "destructive" | "outline" | "success";
  icon?: React.ReactNode;
  className?: string;
  yarzehit?: Date;
}

// Define a type for the card configurations
type CardConfigMap = {
  [key: string]: CardConfig;
};

// Create a component that takes a type and configs
interface DynamicCardProps {
  type: string;
  configs: CardConfigMap;
}

const DynamicCard: React.FC<DynamicCardProps> = ({ type, configs }) => {
  // Get the configuration for the specific type
  const config = configs[type];

  // If no config is found, return null or a default card
  if (!config) {
    return (
      <Card className="w-[350px] text-center">
        <CardContent className="pt-6">
          <p>No configuration found for type: {type}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`w-[350px] ${config.className || ""}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{config.title}</CardTitle>
        </div>
        <CardDescription>{config.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          {config.icon && <span className="mr-2">{config.icon}</span>}
          {config.content}
        </div>
      </CardContent>
      {config.footer && (
        <CardFooter>
          <p className="text-sm text-muted-foreground">{config.footer}</p>
        </CardFooter>
      )}
    </Card>
  );
};

// Example usage component
export const CardExample = () => {
  // Define your card configurations
  const cardConfigs: CardConfigMap = {
    success: {
      title: "Operation Successful",
      description: "Your action was completed",
      content: <p>The task has been completed successfully.</p>,

      icon: <CheckCircle2 className="text-green-500" />,
      footer: "Processed on: November 26, 2024",
    },
    error: {
      title: "Operation Failed",
      description: "Something went wrong",
      content: <p>Unable to complete the requested action.</p>,

      icon: <X className="text-red-500" />,
      footer: "Error logged at: 14:30",
    },
    info: {
      title: "Information",
      description: "Important notice",
      content: (
        <div>
          <p>Here are some important details you should know.</p>
          <ul className="mt-2 list-disc pl-5">
            <li>First point</li>
            <li>Second point</li>
          </ul>
        </div>
      ),

      icon: <Info className="text-blue-500" />,
      footer: "Last updated: Today",
    },
  };

  return (
    <div className="flex gap-4">
      <DynamicCard type="success" configs={cardConfigs} />
      <DynamicCard type="error" configs={cardConfigs} />
      <DynamicCard type="info" configs={cardConfigs} />
    </div>
  );
};

export default DynamicCard;
