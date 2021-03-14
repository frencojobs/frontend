import { Code, Text } from '@geist-ui/react'
import { NextPage } from 'next'

import { Layout } from '../components/Layout'

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Text className="font-serif text-2xl">
        A quick brown fox <Code>jumps</Code> over the lazy dog.
      </Text>
    </Layout>
  )
}

export default IndexPage
