'use client'

import LottieView, { LottieFiles } from "@/app/_components/Lottie"
import { UiState } from "@/app/utils/UiState"
import Image from "next/image"
import { useState } from "react"
import IconButton, { Icon, Icons } from "@/app/_components/IconButton"

const Notes = () => {

    const initUiState: UiState = { msg: "Create new note", isError: false, isLoading: true, isSuccess: false }

    var [uiState, setUiState] = useState<UiState>(initUiState)

    return (
        <div className="h-full flex flex-col">
            <section className="flex justify-between items-center">
                <p className="text-2xl flex-none">{uiState.msg}</p>
                {
                    uiState.isSuccess ?
                        <ol>
                            <IconButton icon={Icons.search} onClick={() => { alert('Search Notes...') }} />
                        </ol>
                        : <></>
                }
            </section>

            <div className="flex-auto flex justify-center items-center">
                {
                    !uiState.isLoading ? <LottieView lottie={LottieFiles.loader} /> : <></>
                }

                {
                    !uiState.isSuccess ? <NotesList items={dummyList} /> : <></>
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
    )



}

export default Notes

const NotesList = ({ items }: { items: Array<NoteModel> }) => {
    return <section className="w-full portrait:h-full landscape:lg:h-full py-4">

        {
            items.length > 0
                ?
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 w-full mt-8">

                    <div className="bg-card/10 py-11 flex flex-col gap-3 rounded-lg cursor-pointer justify-center items-center group">

                        <Icon className="border border-slate-600 border-dashed rounded-full p-2  group-hover:scale-125 group-hover:rotate-180 transition-transform duration-700" icon={Icons.plus} />

                    </div>
                    {
                        items.map(note => {
                            return (
                                <div key={note.id} className="bg-card/10 p-4 flex flex-col gap-3 rounded-lg cursor-pointer">
                                    <div className="flex justify-between items-center text-inherit/80">
                                        <p className="font-light text-xs">{note.date}</p>
                                        <p className="font-light text-xs">{note.tag}</p>
                                    </div>
                                    <p className="font-medium text-base">{note.title}</p>
                                    <p className="text-sm text-inherit/90">{note.shortText}</p>
                                </div>
                            )
                        })
                    }
                </div>
                :
                <section className="h-full text-center flex flex-col items-center justify-center ">
                    <LottieView lottie={LottieFiles.empty} />
                    <p className="mt-3 md:w-1/3">Start taking digital versions of your notes, meetings, ideas and more.</p>
                    <button type="button" className="mt-6 aspect-square p-3 flex justify-center items-center drop-shadow-lg bg-primary rounded-full" >
                        <Icon icon={Icons.plus} className="text-white" />
                    </button>
                </section>
        }

    </section>
}

const dummyList: Array<NoteModel> = [
    {
        id: '0',
        shortText: 'Yorem ipsum dolodignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut ',
        tag: 'Tag',
        title: 'Lorem Ipsom Meeting',
        date: 'Jun 9, 23'
    },

    {
        id: '1',
        shortText: 'Yorem ipsum dolodignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut ',
        tag: 'Tag',
        title: 'Lorem Ipsom Meeting',
        date: 'Jun 9, 23'
    },
    {
        id: '2',
        shortText: 'Yorem ipsum dolodignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut ',
        tag: 'Tag',
        title: 'Lorem Ipsom Meeting',
        date: 'Jun 9, 23'
    },
    {
        id: '3',
        shortText: 'Yorem ipsum dolodignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut ',
        tag: 'Tag',
        title: 'Lorem Ipsom Meeting',
        date: 'Jun 9, 23'
    },

    {
        id: '4',
        shortText: 'Yorem ipsum dolodignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut ',
        tag: 'Tag',
        title: 'Lorem Ipsom Meeting',
        date: 'Jun 9, 23'
    },
]

type NoteModel = {
    id: string,
    shortText: string,
    tag: string,
    title: string,
    date: string
}