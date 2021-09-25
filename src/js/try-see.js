class TrySee {
    constructor(player) {
        this.player = player;

        if (this.player.options.try) {
            this.player.template.meeduSubButton.addEventListener('click', () => {
                this.player.events.trigger('sub_course');
            });
        }
    }
}

export default TrySee;
