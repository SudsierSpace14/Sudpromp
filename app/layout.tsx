import '@styles/globals.css'

import { Nav } from '@components/Nav'
import { Provider } from '@components/Provider'
import { ReactNode } from 'react'

export const metadata = {
  title: "Sudpromp",
  description: "Discover and shares AI prompts"
}

interface Props {
  children: ReactNode,
  session: any
}

const RootLayout: React.FC<Props> = ({ children, session }) => {
  return (
    <html lang='en'>
      <body>
        <Provider session={session}>
          <div className='main'>
            <div className="gradient"></div>
          </div>

          <div className="app">
            <Nav />
            {children}
          </div>
        </Provider>

      </body>
    </html>
  )
}

export default RootLayout