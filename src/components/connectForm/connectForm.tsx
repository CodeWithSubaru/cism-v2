"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import emailjs, { EmailJSResponseStatus } from "@emailjs/nodejs";
import { formSchema } from "@/schema/form.schema";
import { useState } from "react";
import Toast from "@/hooks/use-toast";

function ConnectForm() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { onToast } = Toast({ title: "Email" });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const env = process.env.NODE_ENV;
    let envEmailJsServiceId = "";
    let envEmailJsTemplateId = "";
    let envEmailJsPublicKey = "";
    if (env === "development") {
      envEmailJsServiceId = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!;
      envEmailJsTemplateId = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!;
      envEmailJsPublicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY!;
    }

    if (env === "production") {
      envEmailJsServiceId = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!;
      envEmailJsTemplateId = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!;
      envEmailJsPublicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY!;
    }

    try {
      setLoading(true);
      await emailjs.send(envEmailJsServiceId, envEmailJsTemplateId, values, {
        publicKey: envEmailJsPublicKey,
      });
      onToast("SEND");
    } catch (err) {
      onToast("ERROR");
      if (err instanceof EmailJSResponseStatus) {
        return;
      }
    } finally {
      setLoading(false);
      form.reset();
    }
  }

  const { isDirty, isValid } = form.formState;

  return (
    <>
      <div className="absolute inset-0 bg-fuchsia-400 bg-[size:1.25rem_1.25rem] opacity-20 blur-[6.25rem] -z-10"></div>
      <div className="flex-1 max-w-[31.25rem] mx-10 sm:mx-10 sm:p-10 sm:border border-gray-700 rounded-3xl">
        <h3 className="text-2xl mb-5">Connect with me</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className="text-gray-500 flex justify-between"
                    htmlFor="subject"
                  >
                    <span>Subject</span>
                    <div className="group relative flex flex-col">
                      <span className="relative self-end inline-flex justify-center items-center w-4 h-4 font-bold text-xs border border-neutral-300 rounded-full">
                        ?
                      </span>
                      <div className="group-hover:flex hidden absolute -top-3 right-0 -translate-y-full py-2 px-3 mb-2 w-48 leading-6 text-gray-500 bg-black border border-neutral-400 rounded-md">
                        Please provide the subject of your concern, similar to
                        other email services (e.g., &ldquo;Recruitment
                        Purposes&rdquo;).
                      </div>
                    </div>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Subject Here..."
                      id="subject"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Please put your subject here.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-500" htmlFor="name">
                    Fulll Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Full Name Here..."
                      id="name"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Please put your Full Name here.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-500" htmlFor="email">
                    Your Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Email Here..."
                      id="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Please put your email here.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-500">Your Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your Message Here..."
                      id="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Connect by messaging me here.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className={
                (!isDirty || !isValid
                  ? "cursor-pointer"
                  : "cursor-not-allowed") + "py-3 h-full w-full"
              }
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}

export default ConnectForm;
