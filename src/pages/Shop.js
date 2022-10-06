import React from 'react'

const PRODUCT = [
  { id: 1, img: "/assets/img/product01.png", tit: "눈치구름 메모패드", price: "2,800원", situation:"1" },
  { id: 2, img: "/assets/img/product02.png", tit: "눈치껏 메모", price: "2,800원" },
  { id: 3, img: "/assets/img/product03.png", tit: "Noonch Daily Sticker", price: "3,500원" },
  { id: 4, img: "/assets/img/product04.png", tit: "Noonch Mix Sticker", price: "3,500원" },
  { id: 5, img: "/assets/img/product05.png", tit: "Noonch Motion Sticker", price: "3,500원" },
  { id: 6, img: "/assets/img/product06.png", tit: "Routine Icon Sticker", price: "3,500원" },
  { id: 7, img: "/assets/img/product07.png", tit: "Noonch Masking Tape", price: "5,500원" },
  { id: 8, img: "/assets/img/product08.png", tit: "My Way Removable Sticker", price: "4,500원" },
]

const Shop = () => {
  return (
    <section className='Shop inner'>
      <ul>
        {
          PRODUCT.map((it, idx) => {
            return (
              <li key={idx}>
                <img src={`${process.env.PUBLIC_URL}${it.img}`} alt='' />
                <p className='tit'>{it.tit}</p>
                <p className='price'>{it.price}</p>
                <span className='new'>NEW</span>
                <span className='best'>BEST</span>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default Shop