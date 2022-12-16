import { Header } from './components/Headers';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css';

import './global.css';

const posts = [
  {
      id: 1,
      author:  {
          avatarUrl: 'https://github.com/gmartinsti.png',
          name: 'Guilherme L. Martins',
          role: 'CTO # Solidnetwork'
      },
        content: [
            {type: 'paragraph', content:'Fala galeraa 👋'},
            {type: 'paragraph',  content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            {type: 'link', content:'solidnetwork.com.br/doctorcare'}
        ],
      publishedAt: new Date('2022-12-04 06:00:00'),
  },
  {
      id: 2,
      author:  {
          avatarUrl: 'https://github.com/diego3g.png',
          name: 'Diego Fernandes',
          role: 'CTO # Rocketseat'
      },
      content: [
          {type: 'paragraph', content:'Fala galeraa 👋'},
          {type: 'paragraph',  content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
          {type: 'link', content:'solidnetwork.com.br/doctorcare'}
      ],
      publishedAt: new Date('2022-12-12 20:00:00'),
  },
];


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map( post => {
            return (<Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
          })}
             
        </main>
      </div>
      </div>
  )
}

export default App
