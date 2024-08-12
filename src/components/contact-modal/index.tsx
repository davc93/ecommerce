import React, { ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { ContactForm } from "../contact-form";
import { Button } from "../ui/button";
import { Cross1Icon } from "@radix-ui/react-icons";
type Props = {
  triggerElement:ReactNode
}
export const ContactModal = ({triggerElement}:Props) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {triggerElement}
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-3xl max-h-svh overflow-y-auto">
          <ContactForm />
          <AlertDialogCancel className="absolute top-1  right-1 border-none shadow-none">
            <Cross1Icon />
          </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};
