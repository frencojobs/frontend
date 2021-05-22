import { NextPage } from 'next'

import { ThemeToggler } from '../components/ThemeToggler'

const IndexPage: NextPage = () => {
  return (
    <>
      <ThemeToggler />
      <article className="text-2xl dark:bg-black dark:text-white">
        A quick brown fox jumps over the lazy dog.
      </article>
    </>
  )
}

export default IndexPage
