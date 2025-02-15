"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Server name is required",
  }),
  imageUrl: z.string().min(1, {
    message: "Server image is required",
  }),
});

export const InitialModel = () => {

    const [Mounted, setMounted] = useState(false);
    useEffect(()=>{
        setMounted(true);
    });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  if (!Mounted){
    return null
  }

  return (
    <Dialog open>
      <DialogContent className={`bg-white text-black p-0 overflow-hidden`}>
        <DialogHeader className="pt-8 px-6 ">
          <DialogTitle className="text-2xl text-center font-bold">
            Customize your server
          </DialogTitle>
          <DialogDescription className="text-zinc-500 text-center">
            Give your server some personality
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-2">
            <div className="space-y-6   px-6">TODO: Image Upload</div>
            <FormField
              control={form.control}
              name="name"
              render={(
                { field } // Add return statement and destructure `field`
              ) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                    Server Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="sm:rounded-md rounded-md overflow-hidden bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                      placeholder="Enter Server Name"
                      {...field} // Spread `field` props to the Input component
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <div>
                <DialogFooter className="bg-gray-100 px-6 py-4 sm:rounded-md rounded-md overflow-hidden">
                    <Button variant='primary' disabled={isLoading}>
                        Create
                    </Button>
                </DialogFooter>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
