import styles from './App.module.css';

function App() {

  return (
    <div className={styles.App}>
      <h1 className={styles.title}>tired of boring lorem ipsum?</h1>
        <form>
            <div className={styles.formRow}>
                <label htmlFor="paragraphCount">Paragraphs:</label> <input id="paragraphCount" type="number" className={styles.inputCount}/> <button className={styles.btnGenerate}>GENERATE</button>
            </div>
        </form>

        <div className={styles.allParagraphs}>
            <p className={styles.paragraph}>Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.</p>
        </div>
    </div>
  )
}

export default App
