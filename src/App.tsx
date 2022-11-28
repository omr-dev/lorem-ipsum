import styles from './App.module.css';
import {FormEvent, useState} from 'react';
import text from './data';
function App() {
    const [count,setCount]=useState(1);
    const [resultText, setResultText]=useState<string[]|null>(null);
    const updateCount=(num:number)=>{
        if(num<1){
            setCount(1);
        } else
        if (num>8) { setCount(8)}else{
            setCount(num);
        }


    }
    const handleSubmit=(e:FormEvent)=>{
        e.preventDefault();
        setResultText(text.slice(0,count))

    }

  return (
    <div className={styles.App}>
      <h1 className={styles.title}>tired of boring lorem ipsum?</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div className={styles.formRow}>
                <label htmlFor="paragraphCount">Paragraphs:</label>
                <input id="paragraphCount" type="number" className={styles.inputCount} value={count} onChange={(e)=>updateCount(Number(e.target.value))} required/>
                <button className={styles.btnGenerate}>GENERATE</button>
            </div>
        </form>

        <div className={styles.allParagraphs}>
            {resultText?.map((t,key)=> <p key={key} className={styles.paragraph}>{t}</p>)}

        </div>
    </div>
  )
}

export default App
