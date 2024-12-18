"use client";

import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function ButtonsPage() {
  const router = useRouter();

  const navigateToPage = (path: string) => {
    router.push(path); // replace with the desired route
  };

  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button onClick={() => navigateToPage("/")}>
        Back to Marketing page
      </Button>
      <Button variant={"primary"}>Primary</Button>
      <Button variant={"primaryOutline"}>Primary Outline</Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button variant={"secondaryOutline"}>Secondary Outline</Button>
      <Button variant={"danger"}>Danger</Button>
      <Button variant={"dangerOutline"}>Danger Outline</Button>
      <Button variant={"super"}>super</Button>
      <Button variant={"superOutline"}>super Outline</Button>
      <Button variant={"sidebar"}>sidebar</Button>
      <Button variant={"sidebarOutline"}>sidebar Outline</Button>
    </div>
  );
}
