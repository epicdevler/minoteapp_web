'use client'
import InputField from "@/app/_components/Input"
import { Button, Divider, Flex, Input } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"

const Page = () => {

    return (
        <>
            <p className="text-sm font-light">WELCOME BACK</p>
            <h1 className="text-2xl mt-3 mb-8">
                Sign to your Account
            </h1>

            <form action="">

                <InputField hasTopMargin={0} label="Email" id="email" placeholder="johndoe@example.com" />
                <InputField label="Password" id="password" placeholder="Password" />


                <div className="my-4 text-right">
                    <Link href={'/auth/forgot_password'}>Forgot Password?</Link>
                </div>

                <div>
                    <Button py={6} textColor={'white'} w={'full'} bg={'#0058CB'} _hover={{}} _active={{}} >CONTINUE</Button>
                </div>

                <div className="my-7 text-right gap-3 flex items-center">
                    <Divider w={'full'} bg={'gray.200'} />
                    <p className="font-bold">Or</p>
                    <Divider w={'full'} bg={'gray.200'} />
                </div>

               
                <Button my={3} textColor={'black'} py={6} px={6} fontWeight={'normal'} w={'full'} bg={'transparent'} border={'1px'} borderColor={'gray.100'} _hover={{}} _active={{bg: "gray.100"}} >
                        <Flex w={'full'}>
                            <Image src="/icons/google.svg" alt="" width={24} height={24} />
                        <p className="w-full">Sign Up with Google</p>
                        </Flex>
                    </Button>

                <div className="my-6 text-center">
                    <p>New User? <Link href={'signup'}><strong>SIGN UP HERE</strong></Link></p>
                </div>

            </form>
        </>
    )

}


export default Page