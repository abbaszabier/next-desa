import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Selamat Datang</h1>
                <p className="text-balance text-muted-foreground">
                  Silahkan login untuk melanjutkan
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="password"
                />
              </div>
              <Link href="/dashboard">
                <Button
                  variant="black"
                  type="submit"
                  className="w-full text-white"
                >
                  Login
                </Button>
              </Link>
              <span className="text-center text-sm text-muted-foreground">
                <Link href="/" className="underline">
                  Kembali ke Beranda
                </Link>
              </span>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <Image
              src="/images/icons/icon-512x512.png"
              width={256}
              height={256}
              alt="Logo"
              className="object-cover w-full h-full p-10"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        © 2025 Copyright. All rights reserved.
      </div>
    </div>
  );
}
