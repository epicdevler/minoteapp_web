import { Input } from "@chakra-ui/react"
import { ChangeEventHandler } from "react"

const InputField = ({onValueChanged, placeholder, id, label, type = "text", hasTopMargin = 3}:{onValueChanged?: ChangeEventHandler<HTMLInputElement>, placeholder: string, id: string, label: string, type?: string, hasTopMargin?: number}) => {

    return (
        <div className={`mt-${hasTopMargin}`}>
            <label htmlFor={id}>{label}</label>

        <Input onChange={onValueChanged} py={6} placeholder={placeholder} id={id} type={type} border={'1px'} borderColor={'gray.100'} mt={1} fill={'none'} _hover={{}} _autofill={{ bg: 'none' }} />
        </div>
    )

}


export default InputField