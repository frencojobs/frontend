import { Text } from '@geist-ui/react'

export const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return <Text className="py-5 text-xl">{year} &copy; Frenco</Text>
}
