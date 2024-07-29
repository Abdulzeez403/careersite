"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

// interface IProps {
//     handleCloseModal: () => void;
//     handleOpenModal: () => void;
//     open: boolean
// }

const HomeLayout = () => {

    // const { currentUser, user, signOut, loading } = useAuthContext();

    // const cookies = new Cookies();
    // let userCookie = cookies.get("user");


    // useEffect(() => {

    //     if (userCookie && userCookie._id) {
    //         currentUser(userCookie._id);
    //     } else {
    //         console.error("User cookie not found or malformed");
    //     }
    // }, []);










    return (
        <div className='herobg sticky top-0 z-50 bg-white shadow-md'>

            <div className='pageWidth '>
                <div className="flex justify-between items-center py-2 px-2 shadow-md">
                    <h3 className='text-black font-bold text-[1.5rem]'>GuideUs
                    </h3>

                    <div className="hidden md:flex lg:flex">
                        <div className=" hidden gap-x-4 items-center text-black lg:flex">
                            <Link href="/career" className=' text-md'>Home</Link>
                            <Link href="/career" className='text-md'>Careers</Link>
                            <Link href="/career" className='text-md'>FAQ</Link>

                        </div>
                    </div>
                    <div>
                        {/* {
                            userCookie?._id ? ( */}

                        <div className='flex gap-x-4'>
                            {/* <Button className='bg-foreground border-none hidden md:flex lg:flex bg-customSecondary text-white'>
                                <Link href="/admin">{user?.username}</Link>
                            </Button> */}

                            {/* <Button className='bg-foreground border-none hidden md:flex lg:flex bg-customSecondary text-white' >
                                LogOut
                            </Button> */}
                        </div>


                        {/* ) : ( */}
                        <div className="pl-4 flex ">
                            <Button className="text-white bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:bg-slate-300 text-md">Enquire Now</Button>
                        </div>

                        {/* )
                        } */}
                    </div>

                    <div className="flex md:hidden lg:hidden">
                        <Sheet>
                            <SheetTrigger>
                                <HiOutlineMenuAlt2 color="black" size={30} />
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>GuideUs</SheetTitle>
                                    <div className="block items-center">
                                        <div>
                                            <Link href="/" className=' text-[20px]'>Home</Link>
                                        </div>
                                        <div>

                                            <Link href="/" className='text-[20px]'>Blog</Link>
                                        </div>
                                        <div>

                                            <Link href="/" className='text-[20px]'>FAQ</Link>
                                        </div>
                                        <div>

                                            {/* {userCookie?._id && (<Link href="/admin" className='text-[20px]'>Dashboard</Link>)} */}
                                        </div>



                                    </div>


                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>


                </div>
            </div >

            {/* <ResponsiveDrawerDialog
                title="Login/Register"
                description="Let's the journey begins!"
                isOpen={open}
                onClose={handleCloseModal}
            >
                <Tabs defaultValue="signin" className=" pr-2">
                    <TabsList className=" w-90 grid grid-cols-2">
                        <TabsTrigger value="signin" className='focus:bg-customSecondary'>SignIn</TabsTrigger>
                        <TabsTrigger value="signup" className='active:bg-customSecondary'>SignUp</TabsTrigger>
                    </TabsList>

                    <TabsContent value="signin">
                        <SignInForm />
                    </TabsContent>

                    <TabsContent value="signup" >
                        <SignUpForm />

                    </TabsContent>

                </Tabs>


            </ResponsiveDrawerDialog> */}



        </div>

    );
};
export default HomeLayout;
