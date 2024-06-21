'use client'
import InputField from "@/app/_components/Input"
import { Button, Divider, Flex, Input } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"

const Page = () => {

    return (
        <>
            <p className="text-sm font-light">FORGOT PASSWORD</p>
            <h1 className="text-2xl mt-3 mb-2">
                Verify Email
            </h1>
            <p className="mb-8 text-gray-600">Enter the email you used to create your account so we can send you instructions on how to reset your password.</p>

            <form action="">

                <InputField hasTopMargin={0} label="Email" id="email" placeholder="johndoe@example.com" />


                
                    <Button mt={20} py={6} textColor={'white'} w={'full'} bg={'#0058CB'} _hover={{}} _active={{}} >SEND</Button>
                

                    <Button my={5} as={Link} href={'signin'} variant={'outline'} textColor={'inherit'} py={6} px={6} fontWeight={'normal'} w={'full'} bg={'transparent'} border={'1px'} borderColor={'gray.100'} _hover={{}} _active={{ bg: "gray.100" }} >

                        Back to Sign In

                    </Button>


            </form>
        </>
    )

}


export default Page