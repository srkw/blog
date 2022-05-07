import type { NextPage } from 'next'
import css from '@emotion/react'
import { fetchBlogContents } from '../src/lib/api'
import { Layout } from '../src/components/shared/Layout'

const Home: NextPage<any> = ({ blogContents }) => {
  return (
    <Layout>
      <div className={'blogContents'}>
        {blogContents.map((content: any) => <div key={content.id} dangerouslySetInnerHTML={{ __html: content.content }} />)}
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const contents = await fetchBlogContents().then(res => res.json()).then(result => result.contents)

  return { props: { blogContents: contents } }
}

export default Home
