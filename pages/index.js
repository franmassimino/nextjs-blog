import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout/Layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, im Fran! I work as a Front End Developer at Üma Health AI and im currently learning next.js. You can find me on <a href="https://github.com/franmassimino" target="_blank">GitHub</a></p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <Link href={`/posts/${id}`}>
              <li className={utilStyles.listItem} key={id}>
              <a>{title}</a>
              <p className={utilStyles.lightText}>{date}</p>
            </li>
            </Link>
          ))}
        </ul>
      </section>
    </Layout>
  )
}