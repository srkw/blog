import type { NextPage } from 'next'
import { fetchBlogContents } from '../src/lib/api'

const Home: NextPage<any> = ({ blogContents }) => {
  return (
    <div>
      srkw
      <div className={'blogContents'}>
        {blogContents.map((content: any) => <div key={content.id} dangerouslySetInnerHTML={{ __html: content.content }} />)}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const contents = await fetchBlogContents().then(res => res.json()).then(result => result.contents)

  console.log(contents)

  return { props: { blogContents: contents } }
}

export default Home
