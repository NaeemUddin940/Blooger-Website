"use client";
import { TabsContent } from "@/components/ui/tabs";

export function TabsContents() {
  return (
    <>
      <TabsContent value="account">
        <p>Account content goes here...</p>
      </TabsContent>
      <TabsContent value="password">
        <p>Password content goes here...</p>
      </TabsContent>
    </>
  );
}
