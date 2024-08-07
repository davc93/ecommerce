import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { ContactForm } from "../contact-form";
import { Button } from "../ui/button";

export const ContactModal = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Contactanos</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-3xl">
        <ContactForm />
        <AlertDialogCancel className="absolute top-0 right-0">
          Cancel
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};
