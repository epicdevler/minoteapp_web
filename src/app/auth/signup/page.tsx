'use client'
import InputField from "@/app/_components/Input"
import { SignUpValidationSchema, handleSignUp } from "@/core/lib/auth"
import { Button, Divider, Flex } from "@chakra-ui/react"
import { Form, Formik } from "formik"
import Image from "next/image"
import Link from "next/link"



const SignUpPage = () => {


    return (
        <>
            <p className="text-sm font-light">LET&#39;S GET YOU STARTED</p>
            <h1 className="text-2xl mt-2 mb-8">
                Create an Account
            </h1>


            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                validationSchema={SignUpValidationSchema}

                onSubmit={ async (values, { setSubmitting }) => {
                    await handleSignUp(values)
                    setSubmitting(false)
                }}
            >
                {({ values, errors, handleChange, isSubmitting }) => (

                    <Form>

                        <InputField onValueChanged={handleChange} label="Full Name" hasTopMargin={0} id="name" placeholder="John Doe" value={values.name} errorMsg={errors.name} />
                        <InputField onValueChanged={handleChange} label="Email" id="email" placeholder="johndoe@example.com" value={values.email} errorMsg={errors.email} />
                        <InputField onValueChanged={handleChange} type="password" label="Password" id="password" placeholder="Password" value={values.password} errorMsg={errors.password} />



                        <Button isLoading={isSubmitting} type="submit" mt={10} py={6} textColor={'white'} w={'full'} bg={'#0058CB'} _hover={{}} _active={{}} >CONTINUE</Button>


                        <div className="my-7 text-right gap-3 flex items-center">
                            <Divider w={'full'} bg={'gray.200'} />
                            <p className="font-bold">Or</p>
                            <Divider w={'full'} bg={'gray.200'} />
                        </div>

                        <Button my={3} textColor={'black'} py={6} px={6} fontWeight={'normal'} w={'full'} bg={'transparent'} border={'1px'} borderColor={'gray.100'} _hover={{}} _active={{ bg: "gray.100" }} >
                            <Flex w={'full'}>
                                <Image src="/icons/google.svg" alt="" width={24} height={24} />
                                <p className="w-full">Sign Up with Google</p>
                            </Flex>
                        </Button>

                        <div className="my-6 text-center">
                            <p>Already have an account? <Link href={'signin'}><strong>SIGN IN HERE</strong></Link></p>
                        </div>

                    </Form>
                )}
            </Formik>

        </>
    )

}

export default SignUpPage