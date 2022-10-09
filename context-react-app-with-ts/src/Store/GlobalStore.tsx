import { useState, createContext, FC } from "react";
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



export const ConstextGlobalApp = createContext<InterFaceGlobalContext>({
    listPost: [],
    couter: null,
    editPost: () => {},
    editcounter: () => {},
})


interface Props {
    children: JSX.Element
}
const ContextComponent: FC<Props> = (props) => {
    const [list, setList] = useState<ListPost[]>([
        {
          title: "Most Krymski",
          body: "Opis wydarzenia",
          id: "1"
        },
        {
          title: "Węgiel na ziemę",
          body: "Opis problemu",
          id: "2"
        }
      ])
      const [counterValue, setcounterValue] = useState<number>(10)

      const editPostFc = (id: string, text: string) => {
        console.log(id, text)
        const thisPost:ListPost | undefined = list.find(item => item.id === id) // znajdujemy po id post który chemy edytować
        console.log(thisPost)
        if(thisPost !== undefined) {
            thisPost.body = text
            setList([...list, thisPost])
        } else {
            alert("Post o podanym Id nie istnieje")
        }
      }

      const changeCounter = () => {
        setcounterValue(counterValue + 2)
      }
      const providerValue = {
        listPost: list,
        couter: counterValue,
        editPost: editPostFc,
        editcounter: changeCounter
      }
    return (
        <ConstextGlobalApp.Provider value={providerValue}>
            {props.children}
        </ConstextGlobalApp.Provider>
    
    )
}


export default ContextComponent

















// jak opisać wartość zwracaną z funkcji.
// const add = (a: number, b: number): void => {
//     a + b
// } tak opisujemy funkcję która nic nie zwraca tj. nie ma returna, void jest to określenie typu wywołania
// const add = (a: number, b: number): number => {
//    return a + b
// } jeżeli funkcja ma return, typ zwracany odpaowiada temu co zwrócił return


// typ generyczny


// function identity<Type>(arg: Type): Type {
//     return arg;
//   }

//   identity<string>("arg": string)

//   identity<number>(5: number)

// Funkacja 1, jest otypowana bez typu generycznego, tj. za każdym razem musimy ręcznie dodac nowy typ
// funkcja 2 typ generyczny, dodajem taki typ jaki nam jest potrzebny przy wywyłoniu funkcji
//1 function identity(arg: number | string | string[]):  number | string | string[] {
//     return arg;
//   }
//2 function identity<Type>(arg: Type): Type {
//     return arg;
//   }