import React from 'react'

export default function componente1({lista}) {
  return (
    <ul>
        {lista.map((nombres) => (
            <li>nombre</li>
        ))}
    </ul>
  )
}
