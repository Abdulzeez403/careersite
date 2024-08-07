"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignInForm } from "./(auth)/signin";
import { SignUpForm } from "./(auth)/signup";
import { ResponsiveDrawerDialog } from "./components/modal/responsivedrawer";
import { useAuthContext } from "./(auth)/context";
import Cookies from "universal-cookie";
import Image from "next/image"
import Logo from "../public/CareerQuest.png"

interface IProps {
    handleCloseModal: () => void;
    handleOpenModal: () => void;
    open: boolean
}

const HomeLayout: React.FC<IProps> = ({ handleOpenModal, handleCloseModal, open }) => {
    const { currentUser, user, signOut, loading } = useAuthContext();

    const cookies = new Cookies();
    let userCookie = cookies.get("user");

    useEffect(() => {

        if (userCookie && userCookie.id) {
            currentUser(userCookie.id);
        } else {
            console.error("User cookie not found or malformed");
        }
    }, []);

    return (
        <div className="herobg sticky top-0 z-50 bg-white shadow-md">
            <div className="pageWidth ">
                <div className="flex justify-between items-center py-2 px-2 shadow-md">
                    <h3 className="text-gradient-to-r from-green-400 via-blue-500 to-purple-600 font-bold text-[1.2rem]">CareerGuide</h3>


                    {/* <Image src={Logo} alt="image.jpg" width={100} height={50} /> */}

                    <div className="hidden md:flex lg:flex">
                        <div className=" hidden gap-x-4 items-center text-black lg:flex">
                            <Link href="/" className=" text-md">
                                Home
                            </Link>
                            <Link href="/" className="text-md">
                                Careers
                            </Link>
                            <Link href="/" className="text-md">
                                FAQ
                            </Link>
                        </div>
                    </div>
                    <div>
                        {
                            userCookie?.id ? (

                                <div className="flex gap-x-4">
                                    <Button className='text-white bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:bg-slate-300 text-md'>
                                        {user?.firstName}
                                    </Button>

                                    <Button className="bg-white border-2 border-blue-500 text-blue-500 hidden md:flex lg:flex font-semibold"
                                        onClick={() => signOut()}>
                                        LogOut
                                    </Button>

                                </div>

                            ) : (
                                <div className="pl-4 flex "
                                    onClick={handleOpenModal}>
                                    <Button className="text-white bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:bg-slate-300 text-md">
                                        Login / Register
                                    </Button>
                                </div>

                            )
                        }
                    </div>

                    <div className="flex md:hidden lg:hidden">
                        <Sheet>
                            <SheetTrigger>
                                <HiOutlineMenuAlt2 color="black" size={30} />
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>CareerGuide</SheetTitle>
                                    <div className="block items-center">
                                        <div>
                                            <Link href="/" className=" text-[20px]">
                                                Home
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href="/" className="text-[20px]">
                                                Career
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href="/" className="text-[20px]">
                                                FAQ
                                            </Link>
                                        </div>
                                        <div>
                                            {userCookie?.id && (<Button className="bg-white border-2 border-blue-500 text-blue-500  md:flex lg:flex font-semibold"
                                                onClick={() => signOut()}>
                                                LogOut
                                            </Button>)}
                                        </div>
                                    </div>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>

                </div>
            </div>

            <ResponsiveDrawerDialog
                title="Login/Register"
                description="Let the journey begins!"
                isOpen={open as any}
                onClose={handleCloseModal}
            >
                <Tabs defaultValue="signin" className=" pr-2">
                    <TabsList className=" w-90 grid grid-cols-2">
                        <TabsTrigger value="signin" className='focus:bg-customSecondary'>Sign In</TabsTrigger>
                        <TabsTrigger value="signup" className='active:bg-customSecondary'>Sign Up</TabsTrigger>
                    </TabsList>

                    <TabsContent value="signin">
                        <SignInForm />
                    </TabsContent>

                    <TabsContent value="signup" >
                        <SignUpForm />

                    </TabsContent>

                </Tabs>
            </ResponsiveDrawerDialog>
        </div>
    )
};
export default HomeLayout;
