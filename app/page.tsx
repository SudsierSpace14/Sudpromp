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
        Sudpromp is another project of sudsierspace in his journey of making the world a good place to talk with people
      </p>

      <Feed />
    </section>
  )
}

export default Home