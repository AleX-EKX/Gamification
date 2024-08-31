export function swiper(){
    const swiperAchievements = new Swiper('.swiper-achievements', {
        loop: false,
        spaceBetween: 25,
        slidesPerView: 4,
        breakpoints: {
            240: {
                slidesPerView: 2
            },
            768:{
                slidesPerView: 4
            }
        },
    });
    const swiperAchievementsBlock = new Swiper('.swiper-achievements-item', {
        loop: false,
        spaceBetween: 25,
        slidesPerView: 2,
        breakpoints: {
            240: {
                slidesPerView: 1
            },
            768:{
                slidesPerView: 2
            }
        },
    });
    const swiperAchievementsItem = new Swiper('.swiper-achievementsItem', {
        loop: false,
        spaceBetween: 64,
        // slidesPerView: 9,
        breakpoints: {
            240: {
                slidesPerView: 2
            },
            768:{
                slidesPerView: 9
            }
        },
    });
}