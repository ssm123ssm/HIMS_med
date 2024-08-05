"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { data } from "autoprefixer";

const Login_component = () => {
  const router = useRouter();

  return (
    <div className="flex w-full justify-center p-4 flex-col items-center gap-4 max-h-dvh min-h-[500px] max-w-[500px]">
      <Card className="w-80 max-w-[400px] h-[250px] col-span-12 sm:col-span-5 bg-opacity-30 backdrop-blur-sm backdrop-saturate-150">
        <CardHeader className="absolute z-10 top-0 flex-col items-start bg-slate-500 bg-opacity-30 backdrop-blur-sm backdrop-saturate-150 p-4 rounded-lg">
          <p className="text-tiny text-customSlate2 uppercase font-bold"></p>
          <h4 className="text-customSlate1 font-medium text-2xl">
            Health Information Management System
          </h4>
        </CardHeader>

        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover "
          src="bg.jpg"
        />
        <CardFooter className="absolute bottom-0 justify-center flex flex-row">
          <div className="flex flex-col items-center mb-5">
            <div className="flex flex-row gap-5">
              <Image src="/uop.png" width="80" height="80" className="mb-4" />
              <Image
                src="/PeMSARC.png"
                width="80"
                height="80"
                className="mb-4"
              />
            </div>
          </div>
        </CardFooter>
      </Card>
      <Divider className="mt-5" />

      <div className="text-xl font-medium">Welcome Back</div>
      <div className="tex-small text-default-500">
        Please log in to continue
      </div>
      <Button
        className="w-80 "
        color="primary"
        size="lg"
        variant="bordered"
        onClick={() => {
          console.log("Login");
          router.push("/dashboard");
        }}
      >
        Log in
      </Button>

      <Divider className="mt-5" />

      <p className="text-default-500 text-xs mb-5">
        Need an acount? <Link className=" text-xs text-blue-500"> Sign up</Link>
      </p>
    </div>
  );
};

export default Login_component;
