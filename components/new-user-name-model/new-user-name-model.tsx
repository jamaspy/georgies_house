"use client";
import { handleSubmit, updateUserName } from "@/actions/user";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Session } from "next-auth";
import React, { useState } from "react";
export function NewUserNameModel({ session }: { session: Session | null }) {
  const name = session?.user?.name;

  const [newName, setNewName] = useState(name as string);
  const [isOpen, setIsOpen] = useState(!name);

  const updateName = async () => {
    if (newName) {
      await updateUserName(newName as string);
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Let&lsquo;s add your name.</DialogTitle>
          <DialogDescription>
            Looks like you are new here. Please add your name below so we can
            get to know you.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Label htmlFor="name" className="text-left">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Please enter your full name"
            onChange={(e) => setNewName(e.target.value)}
            className="col-span-3"
          />
        </div>
        <DialogFooter>
          <Button type="button" onClick={updateName}>
            Save Name
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
