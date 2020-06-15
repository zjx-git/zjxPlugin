//yoku视频广告
setInterval(() => {
    let ad_youku = document.querySelector('.h5-ext-layer video');
    if (ad_youku) {
        ad_youku.muted = true;
    }
}, 100);
window.onload = ()=>{
    let youku_player = document.querySelector('.youku-film-player>video');
    youku_player.play();
};



