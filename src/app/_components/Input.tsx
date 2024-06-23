import { Input } from "@chakra-ui/react"
import { ChangeEventHandler } from "react"

const InputField = ({ onValueChanged, value, placeholder, id, label, errorMsg, type = "text", hasTopMargin = 3 }: { onValueChanged?: ChangeEventHandler<HTMLInputElement>, value: string | number | readonly string[] | undefined, placeholder: string, id: string, label: string, errorMsg?: string, type?: string, hasTopMargin?: number }) => {

    return (
        <div className={`mt-${hasTopMargin}`}>
            <label htmlFor={id} className="text-gray-700" >{label}</label>

            <Input
                onChange={onValueChanged}
                name={id}
                py={6}
                placeholder={placeholder}
                id={id}
                type={type}
                value={value}
                border={'1px'}
                borderColor={'gray.100'}
                mt={1}
                fill={'none'}
                _hover={{}}
                _autofill={{ bg: 'none' }}
            />

            {
                errorMsg != undefined && errorMsg.length > 0 ?
                    <span className="block text-red-500 py-2">
                        {errorMsg}
                    </span>
                    : <></>
            }
        </div>
    )

}


export default InputField