"use client";

import { useFormik } from "formik";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { addEvent } from "@/lib/db/event-repository";
import { useUserContext } from "@/components/user-provider";

export function EventForm({ onClose }: { onClose: () => void }) {
    const { userId } = useUserContext()
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: async (values) => {
      await addEvent(values.title, userId!);
      onClose();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Event Title</Label>
        <Input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
          placeholder="Enter event title"
        />
      </div>
      <Button type="submit">
        Create Event
      </Button>
    </form>
  );
}

