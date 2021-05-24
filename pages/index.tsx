import { NextPage } from 'next'
import { styled } from 'twin.macro'
import tw from 'twin.macro'

import { ThemeToggler } from '../components/ThemeToggler'

const Main = styled.main(tw`text-lg dark:bg-black dark:text-white`)

const IndexPage: NextPage = () => {
  return (
    <Main>
      <ThemeToggler />
      <br />A quick brown fox <span tw="italic font-bold">jumps</span> over the
      lazy dog.
    </Main>
  )
}

export default IndexPage
