import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";

const TwitterloginPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[82px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <Header className="flex items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col gap-[29px] items-center justify-start mb-[267px] md:px-5 w-[39%] md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
            size="txtGilroySemiBold32"
          >
            Sign in to Recharge Direct
          </Text>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex-col gap-1.5 hidden items-start justify-start rounded-lg w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Email
              </Text>
              <Input
                name="email"
                placeholder="jane@gmail.com"
                className="font-medium p-0 placeholder:text-blue_gray-300 text-base text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid w-full"
                type="email"
                size="md"
              ></Input>
            </div>
            <div className="flex flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
              <Text
                className="hidden text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Password
              </Text>
              <Input
                name="Group10198"
                placeholder="Enter Password"
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium hidden p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid hidden w-full"
                type="password"
                size="md"
              ></Input>
            </div>
            <a
              href="javascript:"
              className="hidden md:ml-[0] ml-[381px] mt-[15px] text-blue-A700 text-lg"
            >
              <Text size="txtGilroyMedium18BlueA700">Forgot Password?</Text>
            </a>
            <Button
              className="cursor-pointer font-medium hidden min-w-[528px] sm:min-w-full mt-[23px] text-base text-center"
              shape="round"
              color="blue_A700"
              size="sm"
              variant="fill"
            >
              Log in
            </Button>
            <div className="sm:flex-col flex-row gap-4 hidden items-start justify-between ml-2 md:ml-[0] mt-7 w-[97%] md:w-full">
              <Line className="bg-blue_gray-200 h-px sm:mt-0 my-[7px] w-[36%]" />
              <a
                href="javascript:"
                className="hidden text-base text-blue_gray-200"
              >
                <Text size="txtGilroyRegular16">Or continue with</Text>
              </a>
              <Line className="bg-blue_gray-200 h-px sm:mt-0 my-[7px] w-[35%]" />
            </div>
            <div className="flex flex-col gap-4 items-center justify-start mt-[29px] w-full">
              <Button
                className="common-pointer cursor-pointer sm:flex font-medium min-w-[528px] sm:min-w-full text-base text-center"
                onClick={() => googleSignIn()}
                shape="round"
                color="blue_A700"
                size="sm"
                variant="outline"
              >
                Sign in with Google
              </Button>
              <Button
                className="common-pointer cursor-pointer sm:flex font-medium inline min-w-[528px] sm:min-w-full text-base text-center"
                onClick={() => navigate("/map")}
                shape="round"
                color="blue_A700"
                size="sm"
                variant="outline"
              >
                Sign in with Facebook
              </Button>
              <div className="border border-blue-A700 border-solid flex-col hidden items-center justify-end p-3 rounded-md w-full">
                <div className="flex flex-row gap-2 items-start justify-center w-[36%] md:w-full">
                  <Img
                    className="h-6 md:h-auto object-cover w-6"
                    src="images/img_twitterlogo4.png"
                    alt="twitterlogoFour"
                  />
                  <Text
                    className="mt-[5px] text-base text-blue-A700"
                    size="txtGilroyMedium16BlueA700"
                  >
                    Sign in with Linkedin
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwitterloginPage;
