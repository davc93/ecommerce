"use client";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../ui/label";
import { wait } from "@/helpers";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
const FormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type FormValues = z.infer<typeof FormSchema>

export const LoginForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const path = usePathname()
  const onSubmit = async (data:FormValues) => {
    setIsLoading(true)
    try {
      await wait(3)
      router.push('/admin/dashboard')
      
    } catch (error) {
      
    }
    setIsLoading(false)

  };
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="w-full max-w-md space-y-6"
    >
      <div>
        <Label>Email</Label>
        <Input {...form.register('email')} placeholder="Enter your email" />
        <span>{form.formState.errors.email?.message}</span>
      </div>
      <div>
        <Label>Password</Label>

        <Input type="password" {...form.register('password')} placeholder="Enter your password" />
        <span>{form.formState.errors.password?.message}</span>
      </div>

      <Button type="submit">{ isLoading ? 'Loading...' : 'Login'}</Button>
    </form>
  );
};
