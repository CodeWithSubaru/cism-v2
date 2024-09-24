import { z } from "zod";

export const formSchema = z.object({
  subject: z.string().min(3, {
    message: "Subject must be atleast 3 characters",
  }),
  name: z.string().min(5, {
    message: "Name must be atleast 5 characters",
  }),
  email: z.string().email({
    message: "Please put a valid email",
  }),
  message: z.string().min(3, {
    message: "Message must be atleast 3 characters",
  }),
});
