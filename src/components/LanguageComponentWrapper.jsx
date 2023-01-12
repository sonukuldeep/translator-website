import LanguageComponent from './LanguageComponent'
import data from './mockData.js'
import styles from '../styles/utility.module.css'

export default function LanguageWrapperComponent() {
    return (
        <div className={styles.gridCenter}>
            {data.map((data, index) => <LanguageComponent key={index} data={data} />)}
        </div>
    )
}