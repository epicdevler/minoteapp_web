'use client'
import InputField from "@/app/_components/Input"
import { ResetPasswordValidationSchema } from "@/core/lib/auth"
import { Button, Divider, Flex, Input } from "@chakra-ui/react"
import { Form, Formik } from "formik"
import Image from "next/image"
import Link from "next/link"

const Page = () => {

    return (
        <>
            <p className="text-sm font-light">SECURE ACCOUNT</p>
            <h1 className="text-2xl mt-3 mb-8">
                Reset your password
            </h1>

            <Formik
                initialValues={{ password: '', confirmPassword: '' }}
                validationSchema={ResetPasswordValidationSchema}
                validate={values => {
                    const errors = {confirmPassword: ''}


                    if(values.confirmPassword != values.password){
                        errors.confirmPassword = "Password doesn't match"
                    }

                    return errors

                }}
                onSubmit={(values, { setSubmitting }) => {

                }}
            >

                {({ values, errors, handleChange, isSubmitting }) => (

                    <Form >

                        <InputField onValueChanged={handleChange} value={values.password} errorMsg={errors.password} hasTopMargin={0} type="password" label="New Password" id="password" placeholder="New Secured Password" />
                        <InputField onValueChanged={handleChange} value={values.confirmPassword} errorMsg={errors.confirmPassword} type="password" label="Confirm Password" id="confirmPassword" placeholder="Re-enter password" />


                        <div className="mt-20">
                            <Button isLoading={isSubmitting} type="submit" py={6} textColor={'white'} w={'full'} bg={'#0058CB'} _hover={{}} _active={{}} >RESET</Button>
                        </div>

                        <div className="my-5">
                            <Button as={Link} href={'/auth/signin'} variant={'outline'} textColor={'inherit'} py={6} px={6} fontWeight={'normal'} w={'full'} bg={'transparent'} border={'1px'} borderColor={'gray.100'} _hover={{}} _active={{ bg: "gray.100" }} >

                                Back to Sign In

                            </Button>
                        </div>


                    </Form>
                )}

            </Formik>
        </>
    )

}


export default Page