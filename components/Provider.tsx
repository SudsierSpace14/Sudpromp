'use client'

import React, { ReactNode } from 'react'

import { SessionProvider, } from 'next-auth/react'
import type { Session } from 'next-auth/core/types'

interface Props {
    session?: Session
    children: ReactNode
}

export const Provider: React.FC<Props> = ({ children, session }) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}
