import { Feed } from "@components/Feed"

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover e shares
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'>AI Sudpromp</span>
      </h1>
      <p className='text-center desc'>
        Sudpromp, you can share some nice AI prompts
      </p>

      <Feed />
    </section>
  )
}

export default Home