'use client'

import Call from '@/components/shared/call'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog'
import Image from 'next/image'

const Contacts = [
  {
    name: 'Gmail',
    icons: '/gmail.svg',
    link: 'https://mail.google.com/mail/?view=cm&fs=1&to=agustchannel@gmail.com&body=HI',
  },
  {
    name: 'Instagram',
    icons: '/instagram.svg',
    link: 'https://instagram.com/agus_wesly',
  },
  {
    name: 'Discord',
    icons: '/discord.svg',
    link: 'https://discord.com/users/719405440915603478',
  },
  {
    name: 'Telegram',
    icons: '/telegram.svg',
    link: 'https://t.me/aguswesly',
  },
]

export default function Modal() {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="flex items-center justify-center space-x-1 sm:space-x-2 rounded-full border border-border bg-background px-5 py-2 shadow-lg transition-all hover:border-foreground">
          <Call />
          <span>Contact me</span>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact me</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-4 mt-4">
              {Contacts.map((contact) => (
                <section className="p-3 gap-6 border flex items-center justify-between rounded-xl cursor-pointer hover:bg-muted">
                  <div className="flex items-center gap-4">
                    <Image
                      src={contact.icons}
                      width={20}
                      height={20}
                      alt={contact.name}
                      className="flex-none"
                    />
                    <p className="font-medium">{contact.name}</p>
                  </div>

                  <a href={contact.link} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-arrow-up-right"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>
                </section>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
