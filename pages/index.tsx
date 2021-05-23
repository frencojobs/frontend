import { NextPage } from 'next'
import tw from 'twin.macro'

import { ThemeToggler } from '../components/ThemeToggler'
import { styled } from '../stitches.config'

const Main = styled('main', tw`text-2xl dark:bg-black dark:text-white`)

const IndexPage: NextPage = () => {
  return (
    <Main>
      <ThemeToggler />
      <br />A quick brown fox jumps over the lazy dog.
    </Main>
  )
}

export default IndexPage
