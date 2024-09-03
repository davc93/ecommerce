import Link from 'next/link'
import React, { ReactNode } from 'react'


type Props = {
    children:ReactNode
}

export default function Layout({children}:Props) {
  return (
    <>
        <aside>
            <ul>
                <li>
                    Overview
                </li>
            </ul>
        </aside>
        <nav>
            <ul>
                <li>
                    <Link href={'/admin/login'}>
                        Logout

                    </Link>
                </li>
            </ul>
        </nav>
        <main>
            {children}

        </main>
    </>
  )
}
