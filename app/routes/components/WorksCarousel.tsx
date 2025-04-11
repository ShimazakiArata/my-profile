// components/WorksCarousel.tsx

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const works = [
  { src: '/app/images/work1.png', title: '3Dアクションゲーム' },
  { src: '/app/images/work2.png', title: 'UnrealEngine使用ゲーム' },
  { src: '/app/images/work3.png', title: 'チーム制作ゲーム' },
  { src: '/app/images/work1.png', title: '3Dアクションゲーム' }, // 複製すると自然な無限感
  { src: '/app/images/work2.png', title: 'UnrealEngine使用ゲーム' },
]

export default function WorksCarousel() {
  return (
    <section className="pt-8 px-4 w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 flex items-center justify-center bg-white/70 backdrop-blur-sm text-stone-800 px-6 py-3 rounded-xl shadow-md">
  🖼️ 制作作品
</h2>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        spaceBetween={30}
        slidesPerView={2.5}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className="w-full max-w-5xl"
      >
        {works.map((work, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-xl overflow-hidden shadow border border-stone-300 bg-white">
              <img
                src={work.src}
                alt={work.title}
                className="w-full h-auto object-cover"
              />
              <p className="text-center text-stone-600 text-sm py-2">{work.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
