import Head from 'next/head'


export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>Django</title>
        <meta name="Blog with next js" content="My Blog" />
      </Head>
	    {articles.map(article=> <h5>{article.title}</h5>)}
    </div>
  )
}



export const getStaticProps = async() => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
	const articles = await res.json()
	return{
		props: {articles}
	}
}