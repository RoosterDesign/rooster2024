import { Poppins, Permanent_Marker } from 'next/font/google'

export const poppins = Poppins({
    weight: ['400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins'
})

export const permanent_marker = Permanent_Marker({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-permanent-marker'
})