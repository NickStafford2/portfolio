import React, { FC, HTMLAttributes } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const IceboxLogin: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <div className={`h-full font-semibold ${className}`}>
      <p>
        The icebox is a private server I built. Login for remote access.{' '}
        <a
          href="#"
          className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800">
          See details
        </a>
        .
      </p>
      <h2 className="pt-8 text-2xl">Enter Password</h2>
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" />
    </div>
  )
}
export default IceboxLogin
