import { writable } from 'svelte/store'

const cardStore = writable([
  {
    imageSrc: 'images/teaser-icon-photos.png',
    title: 'Share Photos',
    content: 'Easily and securely share photos with one friend at a time.',
    link: 'Learn More'
  },
  {
    imageSrc: 'images/teaser-icon-photos.png',
    title: 'Share Photos',
    content: 'Easily and securely share photos with one friend at a time.',
    link: 'Learn More'
  },
  {
    imageSrc: 'images/teaser-icon-photos.png',
    title: 'Share Photos',
    content: 'Easily and securely share photos with one friend at a time.',
    link: 'Learn More'
  }
])

export default cardStore