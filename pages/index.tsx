import { NextPage } from 'next'

import { ThemeToggler } from '../components/ThemeToggler'

const IndexPage: NextPage = () => {
  return (
    <>
      <ThemeToggler />
      <article className="font-serif text-2xl dark:bg-black">
        A quick brown fox jumps over the lazy dog.
      </article>
    </>
  )
}

export default IndexPage
