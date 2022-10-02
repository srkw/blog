import React, { FC, ReactNode } from 'react'
import { css } from '@emotion/react'

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <h1 css={headerStyle}>header</h1>
      {children}
    </div>
  )
}

const headerStyle = css({
  color: 'red'
})
