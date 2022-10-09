// 
// kod próbny 
//import { useRef, FC, SyntheticEvent } from 'react'
// interface Props {
//     val: string, //  oczekuje 'Tak'
//     children?: JSX.Element[],
//     data: number // [5, 5]
// }
// const ListPosts:FC<Props> = (props: Props) => {
//     const inputValue = useRef<HTMLInputElement>(null)
//     const paragrafValue = useRef<HTMLParagraphElement>(null)
//     // (event: SyntheticEvent<HTMLFormElement>) alternatywa to (event: FormEvent)
//     const zapiszDane = (event: SyntheticEvent<HTMLFormElement>) => {
//         console.log(event)
//         event.preventDefault()
//     }
//   return (
//     <div>ListPosts
//         {props.data}
//         {props.children}
//         <form onSubmit={zapiszDane}>
//         <p ref={paragrafValue}>Lorem </p>
//         <input type="text" ref={inputValue} />
//         <button>Zapisz</button>
//         </form>
//     </div>
//   )
// }

// export default ListPosts


// kod właściwy 

import{ useContext, useState, FC } from 'react'
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
interface Props {
    children?: JSX.Element
}
 const ListPosts:FC<Props> = (props) => {
    console.log('nowe renderowania komponentu listPost')
    const GlobalContext = useContext<InterFaceGlobalContext>(ConstextGlobalApp)
    console.log("komponent Lsit Post",GlobalContext )
    const [ListaPostow, setListaPostow] = useState<ListPost[]>(GlobalContext.listPost)
    console.log(ListaPostow)
    const listaView = ListaPostow.map(item => {
        return (
            <li>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </li>
        )
    })
  return (
    <>
        <ul>
            {listaView}
        </ul>
        <p>To jest liczba z countera {GlobalContext.couter}</p>
    </>
  )
}

export default ListPosts