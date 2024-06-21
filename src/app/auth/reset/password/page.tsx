'use client'
import InputField from "@/app/_components/Input"
import { Button, Divider, Flex, Input } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"

const Page = () => {

    return (
        <>
            <p className="text-sm font-light">SECURE ACCOUNT</p>
            <h1 className="text-2xl mt-3 mb-8">
                Reset your password
            </h1>

            <form action="">

                <InputField hasTopMargin={0} label="Email" id="email" placeholder="New Secured Password" />
                <InputField label="Confirm Password" id="confirm_password" placeholder="Re-enter password" />


                <div className="mt-20">
                    <Button py={6} textColor={'white'} w={'full'} bg={'#0058CB'} _hover={{}} _active={{}} >RESET</Button>
                </div>

                <div className="my-5">
                    <Button as={Link} href={'/auth/signin'} variant={'outline'} textColor={'inherit'} py={6} px={6} fontWeight={'normal'} w={'full'} bg={'transparent'} border={'1px'} borderColor={'gray.100'} _hover={{}} _active={{ bg: "gray.100" }} >

                        Back to Sign In

                    </Button>
                </div>


            </form>
        </>
    )

}


export default Page