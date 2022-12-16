import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
export function Sidebar() {

    return (
        <aside className={styles.sidebar}>

            <img className={styles.cover} 
                    src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                />
            
            <div className={styles.profile}>
               <Avatar src="https://github.com/gmartinsti.png"/>

                <strong>Guilherme Martins</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#"> 
                <PencilLine size={20}/>
                Editar seu perfil
                </a>
            </footer>
            </aside>
    );

}