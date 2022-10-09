import React, { useContext, useRef } from 'react'
import { ConstextGlobalApp } from '../Store/GlobalStore'

interface ListPost { 
    title: string, 
    body: string, 
    id: string 
}

interface InterFaceGlobalContext {
    listPost: ListPost[]
    couter: number | null
    editPost: (id: string, text: string) => void
    editcounter: () => void
}

const OnePost = () => {
    const GlobalContext = useContext<InterFaceGlobalContext>(ConstextGlobalApp)
    const idPost = useRef<HTMLInputElement>(null)
    const bodyPost = useRef<HTMLInputElement>(null)
   
    const addTwoToCounter = () => {
        console.log('Jestem funkcją z komponetu onePost i odwołuj się do funkcji z GlobalStore')
        GlobalContext.editcounter()
    }

    const zminaPostu =  () => {
        if(idPost.current?.value && bodyPost.current?.value) {

            GlobalContext.editPost(idPost.current.value, bodyPost.current.value)
        } else {
            alert('Podaj poprawne wartości do inputów')
        }
    }
    return (
        <div>
            <button onClick={addTwoToCounter}>Add +2 </button>

            <input type="number" ref={idPost} />
            <input type="text" ref={bodyPost}/>
            <button onClick={zminaPostu}>Zminiń Post</button>
        </div>
    )
}
export default OnePost