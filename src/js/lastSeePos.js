class LastSeePos {
    constructor(player) {
        this.player = player;
        // 提示dom
        this.container = player.template.lastSeePos;
        // 显示时长dom
        this.lastSeePosText = player.template.lastSeePosText;
        // 配置
        this.config = player.options.last_see_pos;

        if (this.config) {
            this.show();

            setTimeout(() => {
                this.close();
            }, this.config.time * 1000);

            this.player.template.btnLastSeePos.addEventListener('click', () => {
                this.player.seek(this.config.pos);
                this.close();
            });
        }
    }

    format() {
        const pos = this.config.pos;
        let h = 0,
            m = 0,
            s = 0;
        h = parseInt(pos / 3600);
        m = parseInt((pos - h * 3600) / 60);
        s = parseInt(pos - h * 3600 - m * 60);

        const str = (h > 0 ? h + ':' : '') + (m >= 10 ? m : '0' + m) + ':' + (s >= 10 ? s : '0' + s);

        return str;
    }

    show() {
        this.lastSeePosText.innerHTML = this.format();
        this.container.classList.remove('meedu-last-see-pos-hide');
    }

    close() {
        this.container.classList.add('meedu-last-see-pos-hide');
    }
}

export default LastSeePos;
