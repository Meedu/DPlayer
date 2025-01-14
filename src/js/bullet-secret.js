class BulletSecret {
    constructor(player) {
        this.player = player;

        if (this.player.options.bulletSecret.enabled) {
            this.init();
        }
    }

    init() {
        this.bulletSecretInterval = setInterval(() => {
            const top = this.randomNum(35, document.querySelector('.dplayer-video-wrap').offsetHeight);
            const left = this.randomNum(0, document.querySelector('.dplayer-video-wrap').offsetWidth - 150);

            const text = this.player.options.bulletSecret.text;
            const color = typeof this.player.options.bulletSecret.color === 'undefined' ? 'red' : this.player.options.bulletSecret.color;
            const size = typeof this.player.options.bulletSecret.size === 'undefined' ? '14px' : this.player.options.bulletSecret.size;
            const opacity = typeof this.player.options.bulletSecret.opacity === 'undefined' ? 1 : this.player.options.bulletSecret.opacity;

            const bulletSecretDom = document.createElement('div');
            bulletSecretDom.setAttribute('style', `position:absolute;top:${top}px;left:${left}px;zIndex:5;color:${color};width:auto;font-size:${size};opacity:${opacity}`);

            bulletSecretDom.appendChild(document.createTextNode(text));

            document.querySelector('.dplayer-video-wrap').appendChild(bulletSecretDom);

            setTimeout(() => {
                if (document.querySelector('.dplayer-video-wrap')) {
                    document.querySelector('.dplayer-video-wrap').removeChild(bulletSecretDom);
                }
            }, 4900);
        }, 5000);
    }

    randomNum(min, max) {
        return min + Math.round((max - min) * Math.random());
    }

    randomString(e) {
        e = e || 32;
        const t = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
        const a = t.length;
        let n = '';

        for (let i = 0; i < e; i++) {
            n += t.charAt(Math.floor(Math.random() * a));
        }
        return n;
    }

    destroy() {
        if (this.bulletSecretInterval) {
            clearInterval(this.bulletSecretInterval);
        }
    }
}

export default BulletSecret;
