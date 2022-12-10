import  Children  from "./Children";

const FirstComponent = () => {

    let myWidth="500px";
    let textComp="Текст который мы хотим видеть в дочернем элементе"
return(
    <div className="first">

         <h1> Первый текст</h1>
         <p>
            Текст 2 
         </p>
       <Children text={textComp} width ={myWidth} />

    </div>
);
}

export default FirstComponent