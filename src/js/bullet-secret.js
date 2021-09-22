class BulletSecret {
    constructor(player) {
        this.player = player;

        if (this.player.options.bulletSecret.enabled) {
            this.init();
        }
    }

    init() {
        this.bulletSecretInterval = setInterval(() => {
            const domId = this.randomString(12);
            const top = this.randomNum(0, document.querySelector('.dplayer-video-wrap').offsetHeight);
            const left = this.randomNum(0, document.querySelector('.dplayer-video-wrap').offsetWidth - 150);

            const text = this.player.options.bulletSecret.text;
            const color = this.player.options.bulletSecret.color;
            const size = this.player.options.bulletSecret.size;
            const parsedDom = new DOMParser().parseFromString(
                `
            <div class="${domId}" style="position:absolute;top:${top}px !important;left:${left}px !important;color:${color};width: auto;font-size: ${size}">${text}</div>
            `,
                'text/html'
            );
            const bulletSecretDom = parsedDom.querySelector('.' + domId);
            document.querySelector('.dplayer-video-wrap').appendChild(bulletSecretDom);

            setTimeout(() => {
                document.querySelector('.dplayer-video-wrap').removeChild(bulletSecretDom);
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
