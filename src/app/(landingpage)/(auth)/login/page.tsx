import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-[350px]">
        <CardHeader className="flex w-full">
          <CardTitle className="flex flex-col gap-2 items-center">
            <Link href="/">
              <Button
                variant="outline"
                size="icon"
                className="w-8 h-8 dark:border-gray-700"
                title="Kembali ke beranda"
              >
                <ArrowLeft />
              </Button>
            </Link>
            Login Admin
          </CardTitle>
          <CardDescription className="text-center">
            Silahkan login untuk melanjutkan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input id="email" type="email" placeholder="Email anda" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password anda"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex w-full">
          <Button className="w-full">Masuk</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
