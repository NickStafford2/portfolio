import React, { FC, HTMLAttributes } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const IceboxLogin: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <div className={`h-full ${className}`}>
      <p>The icebox is a private server I built. Login for remote access.</p>
      <h2 className="text-2xl pt-8">Enter Password</h2>
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" />
    </div>
  )
}
export default IceboxLogin
