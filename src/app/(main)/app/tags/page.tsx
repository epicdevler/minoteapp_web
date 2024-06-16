'use client'
import IconButton, { Icon, Icons } from "@/app/_components/IconButton"
import LottieView, { LottieFiles } from "@/app/_components/Lottie"
import { UiState } from "@/app/utils/UiState"
import { MouseEventHandler, useState } from "react"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure, InputRightAddon, HStack, Input, Flex } from "@chakra-ui/react"

const Tags = () => {

    const initUiState: UiState = { msg: "Your Tags", isError: false, isLoading: false, isSuccess: true }

    var [uiState, setUiState] = useState<UiState>(initUiState)
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>

            <div className="h-full flex flex-col">
                <section className="flex justify-between items-center">
                    <p className="text-2xl flex-none">{uiState.msg}</p>
                    {
                        uiState.isSuccess ?
                            <ol className="flex gap-2">
                                {
                                    dummyList.length ? <IconButton icon={Icons.plus} onClick={onOpen} /> : <></>
                                }
                                <IconButton icon={Icons.search} onClick={() => { alert('Search Notes...') }} />
                            </ol>
                            : <></>
                    }
                </section>

                <div className="flex-auto flex justify-center items-center">
                    {
                        uiState.isLoading ? <LottieView lottie={LottieFiles.loader} /> : <></>
                    }

                    {
                        uiState.isSuccess ? <TagsList createNewTagRequeset={onOpen} items={dummyList} /> : <></>
                    }

                    {
                        uiState.isError ? <section className="text-center flex flex-col items-center justify-center p-2">
                            <LottieView lottie={LottieFiles.error} width={1} widthLL={2} widthL={2} />
                            <p className="mt-3">error</p>

                            <button type="button" className="mt-6 px-7 py-2 text-slate-900 bg-slate-400 rounded-full" >Retry</button>

                        </section> : <></>
                    }
                </div>
            </div>

            {
                isOpen ?
                    <Modal isOpen={isOpen} onClose={onClose} isCentered>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Create Tag</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <p>
                                    Tags helps you identify notes tied to a particular subject matter. Enter a descriptive name (max of 2 words) for your future notes. e.g Work, School, Ideas, ...
                                </p>
                                <div className="flex items-center pe-4 rounded-full border mt-4 ">
                                    <Input rounded={'full'} placeholder="Tag Name" _focus={{ outlineColor: "0px" }} borderWidth={'0px'} />
                                    <div>
                                        <Icon icon={Icons.tag} />
                                    </div>
                                </div>
                            </ModalBody>

                            <ModalFooter >
                                <Flex w={'full'} gap={3}>
                                    <Button width={'full'} rounded={'full'} variant={'outline'} onClick={onClose}>
                                        Cancel
                                    </Button>
                                    <Button width={'full'} rounded={'full'} bg={'#0058CB'} textColor={'white'} _hover={{}} boxShadow={'md'}>Create</Button>
                                </Flex>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                    :
                    <></>
            }
        </>


    )

}

export default Tags


const TagsList = ({ items, createNewTagRequeset }: { items: Array<TagModel>, createNewTagRequeset: MouseEventHandler<HTMLDivElement> }) => {
    return <section className="w-full portrait:h-full landscape:lg:h-full py-4">

        {
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 w-full mt-8">

                <div onClick={createNewTagRequeset} className="bg-card/10 py-11 hidden md:flex flex-col gap-3 rounded-lg cursor-pointer justify-center items-center group">

                    <Icon className="border border-slate-600 border-dashed rounded-full p-2  group-hover:scale-125 group-hover:rotate-180 transition-transform duration-700" icon={Icons.plus} />

                </div>
                {
                    items.map(note => {
                        return (
                            <div key={note.id} className="bg-card/10 py-4 px-7 flex items-center justify-between gap-3 rounded-lg cursor-pointer">
                                <p className="font-medium text-base">{note.title}</p>
                                <div className="flex flex-col text-inherit opacity-70  font-medium">
                                    <p className="font-light text-3xl">{note.notes}</p>
                                    <p className="font-light text-base">Note{note.notes > 1 ? "s" : ""}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        }

    </section>
}

const dummyList: Array<TagModel> = [
    {
        id: '0',
        title: 'School (PTI)',
        notes: 5
    },
]

type TagModel = {
    id: string,
    notes: number,
    title: string,
}