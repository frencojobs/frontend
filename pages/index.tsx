import { NextPage } from 'next'

import { ThemeToggler } from '../components/ThemeToggler'

const IndexPage: NextPage = () => {
  return (
    <main tw="text-2xl px-10 flex flex-row items-center w-full h-screen justify-center dark:(bg-black text-white)">
      <div tw="absolute top-0 px-5 py-3 mt-5 bg-white rounded-lg shadow dark:bg-gray-900">
        <ThemeToggler />
      </div>
      <p tw="dark:(text-transparent bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text)">
        A quick brown fox <span tw="italic font-bold">jumps</span> over the lazy
        dog.
      </p>
    </main>
  )
}

export default IndexPage
