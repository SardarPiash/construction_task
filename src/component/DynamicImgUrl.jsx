import React from 'react'

export default function ImageUrl(cover,path) {
  return new URL(`../assets/${path}/${cover}`, import.meta.url).href;
}