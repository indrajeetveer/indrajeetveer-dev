const reels = [
  {
    username: "john_doe",
    likeCount: 12450,
    isLike: false,
    commentCount: 328,
    caption: "Nothing beats a peaceful evening by the beach 🌅",
    video: "./Reels/1.mp4",
    userProfile: "https://i.pravatar.cc/150?img=1",
    shareCount: 142,
    isFollow: true
  },
  {
    username: "emma_styles",
    likeCount: 89320,
    isLike: true,
    commentCount: 1452,
    caption: "Coffee, code, and good vibes ☕💻",
    video: "./Reels/2.mp4",
    userProfile: "https://i.pravatar.cc/150?img=2",
    shareCount: 684,
    isFollow: false
  },
  {
    username: "travelwithalex",
    likeCount: 56780,
    isLike: false,
    commentCount: 927,
    caption: "Found another hidden paradise in the mountains 🏔️",
    video: "./Reels/3.mp4",
    userProfile: "https://i.pravatar.cc/150?img=3",
    shareCount: 315,
    isFollow: true
  },
  {
    username: "fit_mia",
    likeCount: 34210,
    isLike: true,
    commentCount: 506,
    caption: "Discipline always beats motivation 💪",
    video: "./Reels/4.mp4",
    userProfile: "https://i.pravatar.cc/150?img=4",
    shareCount: 191,
    isFollow: false
  },
  {
    username: "chef_lucas",
    likeCount: 21890,
    isLike: false,
    commentCount: 274,
    caption: "Homemade pasta tastes better than restaurant food 🍝",
    video: "./Reels/5.mp4",
    userProfile: "https://i.pravatar.cc/150?img=5",
    shareCount: 119,
    isFollow: true
  },
  {
    username: "nature_clicks",
    likeCount: 98540,
    isLike: true,
    commentCount: 1835,
    caption: "The beauty of nature never gets old 🌿📸",
    video: "./Reels/6.mp4",
    userProfile: "https://i.pravatar.cc/150?img=6",
    shareCount: 940,
    isFollow: true
  },
  {
    username: "gaming_hub",
    likeCount: 76300,
    isLike: false,
    commentCount: 1264,
    caption: "That clutch play was absolutely insane! 🎮🔥",
    video: "./Reels/7.mp4",
    userProfile: "https://i.pravatar.cc/150?img=7",
    shareCount: 472,
    isFollow: false
  },
  {
    username: "daily_quotes",
    likeCount: 15460,
    isLike: true,
    commentCount: 198,
    caption: "Small steps every day lead to big achievements ✨",
    video: "./Reels/8.mp4",
    userProfile: "https://i.pravatar.cc/150?img=8",
    shareCount: 88,
    isFollow: true
  },
  {
    username: "fashion_luna",
    likeCount: 64720,
    isLike: false,
    commentCount: 873,
    caption: "Weekend outfit inspiration for every occasion 👗",
    video: "./Reels/9.mp4",
    userProfile: "https://i.pravatar.cc/150?img=9",
    shareCount: 391,
    isFollow: false
  },
  {
    username: "code_master",
    likeCount: 43280,
    isLike: true,
    commentCount: 612,
    caption: "Building projects is the fastest way to learn JavaScript 🚀",
    video: "./Reels/10.mp4",
    userProfile: "https://i.pravatar.cc/150?img=10",
    shareCount: 247,
    isFollow: true
  }
];

 let sum = ''
 reels.forEach((elem)=>{
    sum = sum + ` <div class="reel">
                    <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollow?"UnFllow":"Fllow"}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                       <div class="like">
                        <h4 class="like-icon icon">${elem.isLike?'<i class="ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</i></h4>
                        <h6>${elem.likeCount}</h6>
                       </div>

                       <div class="comment">
                        <h4 class="commnet-icon icon"><i class="ri-chat-3-line"></i></h4>
                        <h6>${elem.commentCount}</h6>
                       </div>

                       <div class="share">
                        <h4 class="share-icon icon"><i class="ri-send-ins-fill"></i></h4>
                        <h6>${elem.shareCount}</h6>
                       </div>

                       <div class="menu">
                        <h4 class="menu-icon icon"><i class="ri-more-2-line"></i></h4>
                       </div>
                    </div>
                </div>`
 })

 let one = document.querySelector('.all-reels');
 one.innerHTML = sum
