import { Row, Text } from '@geist-ui/react'

import { ThemeToggler } from './ThemeToggler'

export const Header: React.FC = () => {
  return (
    <Row align="middle" justify="space-between" className="pt-5">
      <Text className="text-4xl font-bold">Header</Text>
      <ThemeToggler />
    </Row>
  )
}
