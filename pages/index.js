import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <style jsx>
          {`
            h2{
              font-size: 38px
            }
            h3{
              font-size: 28px
            }
          `}
      </style>

      <div className={styles.container}>
        <Head>
          <title>Hunting Coders</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="keywords" content="nextjs, huntingCoder blog, hunting coder" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Hunting Coders
          </h1>

          <div className={styles.imageWrapper}>
            <Image
              src="/home.avif"
              alt='Home image here'
              width={237}
              height={158}
              className={styles.myImg}
            />
          </div>

          <p className={styles.description}>
            A blog for hunting coders by a hunting coder
          </p>

          <div className="blogs">
            <h2>Latest blogs</h2>
            
            <div className="blogItem">
              <h3>How to learn JavaScript in 2022 ?</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam reiciendis distinctio explicabo.</p>
            </div>

            <div className="blogItem">
              <h3>How to learn JavaScript in 2022 ?</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam reiciendis distinctio explicabo.</p>
            </div>

            <div className="blogItem">
              <h3>How to learn JavaScript in 2022 ?</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam reiciendis distinctio explicabo.</p>
            </div>

          </div>
        </main>

        <footer className={styles.footer}>

        </footer>
      </div>
    </>
  )
}
