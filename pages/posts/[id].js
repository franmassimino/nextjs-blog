import Layout from "../../components/Layout/Layout";
import { getAllPostsId, getPostData } from '../../lib/posts'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}


export async function getStaticPaths() {
    const paths = getAllPostsId()
    return {
        paths,
        fallback: false
    }
}


export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <h1 className={utilStyles.headingXl}>
            {postData.title}
        </h1>
        <h3 className={utilStyles.lightText}>
            {postData.date}
        </h3>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Layout>
    )
  }